import React, {useEffect, useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import cloneDeep from 'lodash/cloneDeep';
import {HeaderNav} from '../../components/HeaderNav';
import {TextArea} from '../../components/TextArea';
import {Background} from '../Home/styles';
import {CategoryPicker} from '../../components/CategoryPicker';
import 'react-native-get-random-values';
import {informationGroceryAction} from '../../store/ducks/grocery';
import {AllProductProps, ProductProps} from '../../components/ContentItem';
import {addItem} from '../../utils/grocery';

export function AddItem() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const route = useRoute();

  const {item} = route.params;

  const {categoryList} = useSelector((state) => state.category);
  const {groceryList} = useSelector((state) => state.grocery);

  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    if (item) {
      setName(item.name);
      setQuantity(item.quantity);
      setPrice(item.price);
    }
  }, []);

  const saveItem = () => {
    const newItem = {
      id: uuidv4(),
      name,
      price,
      quantity,
      isChecked: false,
    };
    const newList = cloneDeep(groceryList);
    const updatedList = addItem(newList, category, newItem);
    dispatch(informationGroceryAction(updatedList));
    navigation.goBack();
  };

  const saveEditedItem = () => {
    const newList = cloneDeep(groceryList);

    newList.map((currentCategory: AllProductProps) => {
      currentCategory.data.map((currentItem: ProductProps) => {
        if (currentItem.id === item.id) {
          currentItem.name = name;
          currentItem.quantity = quantity;
          currentItem.price = price;
          return null;
        }
        return null;
      });
      return null;
    });

    dispatch(informationGroceryAction(newList));
    navigation.goBack();
  };

  return (
    <Background>
      <HeaderNav
        onDone={item ? () => saveEditedItem() : () => saveItem()}
        title={item ? 'Edit Item' : 'Add Item'}
      />
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
      {!item && (
        <CategoryPicker
          categories={categoryList}
          itemSelect={category.name}
          setItem={setCategory}
        />
      )}
    </Background>
  );
}
