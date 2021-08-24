import {FlatList, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {cloneDeep} from 'lodash';
import {AllProductProps, ContentItem, ProductProps} from '../ContentItem';
import {Container} from './styles';
import {ContentHeader} from '../ContentHeader';
import {Background} from '../Background';
import {informationGroceryAction} from '../../store/ducks/grocery';

export function Content() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const {groceryList} = useSelector((state: any) => state.grocery);
  const [list, setList] = useState<AllProductProps[]>([]);

  useEffect(() => {
    const newList = groceryList.filter(
      (category: any) => category.data.length !== 0,
    );
    console.tron.log(`UseEffect`, groceryList);
    setList(newList);
  }, [groceryList]);

  const goEditItem = (item: ProductProps) => {
    navigation.navigate('AddItem', {item});
  };

  const deleteItem = (item: ProductProps) => {
    const newList = cloneDeep(groceryList);

    newList.forEach((currentCategory: AllProductProps) => {
      currentCategory.data = currentCategory.data.filter(
        (currentItem) => currentItem.id !== item.id,
      );
    });

    console.tron.log('Item', newList);
    dispatch(informationGroceryAction(newList));
  };

  const renderItemList = ({item}) => {
    return (
      <View style={{flex: 1}}>
        <ContentItem
          data={item}
          onEdit={() => goEditItem(item)}
          onDelete={() => deleteItem(item)}
        />
      </View>
    );
  };

  const renderCategory = ({item}) => {
    return (
      <View style={{flex: 1}}>
        <Background>
          <ContentHeader title={item.name} />
          <FlatList
            data={item.data}
            extraData={item.data}
            renderItem={renderItemList}
            keyExtractor={(itemCurrent) => itemCurrent.id.toString()}
            showsVerticalScrollIndicator={false}
          />
        </Background>
      </View>
    );
  };
  return (
    <Container>
      <FlatList
        style={{marginTop: 10}}
        data={list}
        extraData={list}
        renderItem={renderCategory}
        keyExtractor={(item: any) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
}
