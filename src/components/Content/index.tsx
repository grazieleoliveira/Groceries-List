import {FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

import {AllProductProps, ContentItem} from '../ContentItem';
import {Container} from './styles';
import {ContentHeader} from '../ContentHeader';
import {Background} from '../Background';

export function Content() {
  const {groceryList} = useSelector((state: any) => state.grocery);
  const [list, setList] = useState<AllProductProps[]>([]);

  useEffect(() => {
    const newList = groceryList.filter(
      (category) => category.data.length !== 0,
    );
    console.tron.log(`UseEffect`, groceryList);
    setList(newList);
  }, [groceryList]);

  console.tron.log(groceryList);
  const renderCategory = ({item}) => {
    return (
      <Background>
        <ContentHeader title={item.name} />
        <FlatList
          data={item.data}
          extraData={item.data}
          renderItem={({item}) => <ContentItem data={item} />}
          keyExtractor={(itemCurrent) => itemCurrent.id.toString()}
          showsVerticalScrollIndicator={false}
        />
      </Background>
    );
  };
  return (
    <Container>
      <FlatList
        style={{marginTop: 10, padding: 10}}
        data={list}
        extraData={list}
        renderItem={renderCategory}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
  // return (
  //   <Container>
  //     <SectionList
  //       style={{marginTop: 10, padding: 10}}
  //       sections={list}
  //       keyExtractor={(item, index) => item.id}
  //       renderItem={({item, index}) => <ContentItem data={item} />}
  //       renderSectionHeader={({section: {category}}) => (
  //         <ContentHeader title={category} />
  //       )}
  //       inverted={false}
  //       extraData={list}
  //     />
  //   </Container>
  // );
}
