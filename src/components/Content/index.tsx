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
import {CategoryPicker} from '../CategoryPicker';

export function Content(searchString) {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const {groceryList} = useSelector((state: any) => state.grocery);
  const [list, setList] = useState<AllProductProps[]>([]);

  useEffect(() => {
    const newList = groceryList.filter(
      (category: any) => category.data.length !== 0,
    );

    const filteredList = cloneDeep(groceryList);

    const searchName = searchString;

    if (
      searchName.searchString === '' ||
      searchName.searchString === undefined ||
      searchName.searchString === null
    ) {
      setList(newList);
    } else {
      filteredList.map((currentCategory: AllProductProps) => {
        currentCategory.data = currentCategory.data.filter((currentItem) =>
          currentItem.name
            .toLowerCase()
            .includes(searchName.searchString.toLowerCase()),
        );
        return null;
      });

      const newFilteredList = filteredList.filter(
        (category: any) => category.data.length !== 0,
      );
      setList(newFilteredList);
    }


  }, [groceryList, searchString]);

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
