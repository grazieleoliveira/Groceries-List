import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {v4 as uuidv4} from 'uuid';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import cloneDeep from 'lodash/cloneDeep';
import {HeaderNav} from '../../components/HeaderNav';
import {TextArea} from '../../components/TextArea';
import {Background} from '../Home/styles';
import {CategoryPicker} from '../../components/CategoryPicker';
import 'react-native-get-random-values';
import {informationGroceryAction} from '../../store/ducks/grocery';

export function AddItem() {
  const dispatch = useDispatch();

  const {categoryList} = useSelector((state) => state.category);
  const {groceryList} = useSelector((state) => state.grocery);

  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');

  const navigation = useNavigation();

  const isPlaceholder = (value: string) => {
    return value === '';
  };

  const saveItem = () => {
    const newItem = {
      id: uuidv4(),
      name,
      price,
      quantity,
    };

    const newList = cloneDeep(groceryList);

    newList.map((categories) => {
      if (categories.id === category.id) {
        return categories.data.push(newItem);
      }
      return null;
    });

    dispatch(informationGroceryAction(newList));
    navigation.goBack();
  };

  return (
    <Background>
      <HeaderNav onDone={() => saveItem()} title="Add Item" />
      <TextArea onChangeText={setName} placeholder="Item Name" value={name} />
      <TextArea
        onChangeText={setQuantity}
        keyboardType="numeric"
        placeholder="Quantity"
        value={quantity}
      />
      <TextArea
        onChangeText={setPrice}
        keyboardType="numeric"
        value={price}
        placeholder="Price"
      />
      <CategoryPicker
        categories={categoryList}
        itemSelect={category.name}
        setItem={setCategory}
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
