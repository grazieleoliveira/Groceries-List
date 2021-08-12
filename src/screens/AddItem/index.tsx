import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {v4 as uuidv4} from 'uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

import {HeaderNav} from '../../components/HeaderNav';
import {TextArea} from '../../components/TextArea';
import {Background} from '../Home/styles';
import {CategoryPicker} from '../../components/CategoryPicker';
import {ProductProps} from '../../components/ContentItem';
import 'react-native-get-random-values';



export function AddItem() {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');


  const navigation = useNavigation();

  const isPlaceholder = (value: string) => {
    return value === '';
  };

  async function handleSave(category: string) {
    const newProduct = {
      id: uuidv4(),
      name,
      quantity,
      price,
      category,
    };

    const productsStorage = await AsyncStorage.getItem(category);
    const products = productsStorage ? JSON.parse(productsStorage) : [];

    await AsyncStorage.setItem(
      category,
      JSON.stringify([...products, newProduct]),
    );

    navigation.navigate('Home');
  }

  return (
    <Background>
      <HeaderNav
        onDone={() => {
          handleSave(category);
        }}
        title="Add Item"
      />
      <TextArea onChangeText={setName} placeholder="Item Name" />
      <TextArea
        onChangeText={setQuantity}
        keyboardType="numeric"
        placeholder="Quantity"
      />
      <TextArea
        onChangeText={setPrice}
        keyboardType="numeric"
        placeholder="Price"
      />
      <CategoryPicker
        style={isPlaceholder(category) ? styles.placeholder : styles.picker}
        selectedValue={category}
        onValueChange={(itemValue, itemIndex) => {
          setCategory(itemValue);
        }}
        dropdownIconColor="#989898"
      />
    </Background>
  );
}

const styles = StyleSheet.create({
  placeholder: {
    height: 50,
    width: '100%',
    color: '#989898', // PLACE HOLDER COLOR
  },
  picker: {
    height: 50,
    width: '100%',
    color: 'black', // VALUE COLOR
  },
});
