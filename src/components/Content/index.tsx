import {SectionList} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {AllProductProps, ContentItem, ProductProps} from '../ContentItem';
import {Container} from './styles';
import {ContentHeader} from '../ContentHeader';
import {CATEGORIES} from '../../utils/categories';

export function Content() {
  const [list, setList] = useState<AllProductProps[]>([]);

  useEffect(() => {
    const newList = CATEGORIES.filter((category) => category.data.length !== 0);
    setList(newList);
  }, []);

  return (
    <Container>
      <SectionList
        style={{marginTop: 10, padding: 10}}
        sections={list}
        keyExtractor={(item, index) => item.id}
        renderItem={({item}) => <ContentItem data={item} />}
        renderSectionHeader={({section: {category}}) => (
          <ContentHeader title={category} />
        )}
        inverted={false}
        extraData={list}
      />
    </Container>
  );
}
