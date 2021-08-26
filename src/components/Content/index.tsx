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
import {ADD_ITEM} from '../../constants/routes';
import {
  filterCategoriesWithData,
  removeItem,
  searchListFilter,
} from '../../utils/grocery';

export function Content(searchString) {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const {groceryList} = useSelector((state: any) => state.grocery);
  const [list, setList] = useState<AllProductProps[]>([]);

  useEffect(() => {
    const fullList = filterCategoriesWithData(groceryList);
    const listToBeFiltered = cloneDeep(groceryList);
    const searchName = searchString;
    const newFilteredList = searchListFilter(
      fullList,
      listToBeFiltered,
      searchName.searchString,
    );
    setList(newFilteredList);
  }, [groceryList, searchString]);

  const goEditItem = (item: ProductProps) => {
    navigation.navigate(ADD_ITEM, {item});
  };

  const deleteItem = (item: ProductProps) => {
    const newList = cloneDeep(groceryList);
    const updatedList = removeItem(newList, item);
    dispatch(informationGroceryAction(updatedList));
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
