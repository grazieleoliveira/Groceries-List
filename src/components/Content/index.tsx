import {FlatList, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {AllProductProps, ContentItem} from '../ContentItem';
import {Container} from './styles';
import {ContentHeader} from '../ContentHeader';
import {Background} from '../Background';


export function Content() {
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

  const editItem = (item) => {
    navigation.navigate('AddItem', {item});
  };

  const renderItemList = ({item}) => {
    return (
      <View style={{flex: 1}}>
        <ContentItem data={item} onEdit={() => editItem(item)} />
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
