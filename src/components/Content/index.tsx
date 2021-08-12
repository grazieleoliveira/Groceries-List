import {SectionList} from 'react-native';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {AllProductProps, ContentItem, ProductProps} from '../ContentItem';
import {Container} from './styles';
import {ContentHeader} from '../ContentHeader';

export function Content() {
  const [allProducts, setAllProducts] = useState<AllProductProps[]>([]);

  //   const [carnes, setCarnes] = useState<ProductProps[]>([]);
  //   const [frutas, setFrutas] = useState<ProductProps[]>([]);
  //   const [legumes, setLegumes] = useState<ProductProps[]>([]);
  //   const [hasUpdated, setHasUpdated] = useState(false);

  async function loadProducts() {
    const carneProducts = await AsyncStorage.getItem('Carnes');
    const storageCarnes: ProductProps[] = carneProducts
      ? JSON.parse(carneProducts)
      : [];

    const frutasProducts = await AsyncStorage.getItem('Frutas');
    const storageFrutas: ProductProps[] = frutasProducts
      ? JSON.parse(frutasProducts)
      : [];

    setAllProducts([
      {
        category: 'Carnes',
        data: storageCarnes,
      },
      {
        category: 'Frutas',
        data: storageFrutas,
      },
    ]);

    console.log(allProducts);
  }

  // useFocusEffect(useCallback(() => {
  //     loadProducts();
  // }, [allProducts]));

  // const categoriesStorage = await AsyncStorage.getItem('product.category');
  // const categories = categoriesStorage ? JSON.parse(categoriesStorage) : null

  // if(categories) {
  //     await AsyncStorage.setItem(
  //         'product.data',
  //         JSON.stringify([...items, newItem])
  //     );
  // }

  // else {
  //     await AsyncStorage.setItem(
  //         'allProducts',
  //         JSON.stringify([
  //             {
  //                 category: category,
  //                 data: [...items, newItem]
  //             }
  //         ])
  //     );
  // }

  return (
    <Container>
      <SectionList
        style={{marginTop: 10, padding: 10}}
        sections={allProducts}
        keyExtractor={(item, index) => item.id}
        renderItem={({item}) => <ContentItem data={item} />}
        renderSectionHeader={({section: {category}}) => (
          <ContentHeader title={category} />
        )}
        inverted={false}
        extraData={allProducts}
      />
    </Container>
  );
}
