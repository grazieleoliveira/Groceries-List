// import 'react-native-get-random-values';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';
// const DATABASE_NAME = '@grocerieslist';
// const ALL_PRODUCTS = `${DATABASE_NAME}:allProducts`;

// export {ALL_PRODUCTS};

// const DATABASE_NAME = '@grocerieslist';
// const COLLECTION_ITEMS = `${DATABASE_NAME}:items`;
// const COLLECTION_CATEGORIES = `${DATABASE_NAME}:categories`

// export {

//   COLLECTION_ITEMS

// }
// export const PRODUCTS_KEY = 'products'

export const CATEGORIES = [
  {
    id: 0,
    category: 'Carnes',
    data: [
      {
        id: uuidv4(),
        name: 'Picanha',
        quantity: '3',
        price: '20',
        category: 'Carnes',
      },
      {
        id: uuidv4(),
        name: 'Maminha',
        quantity: '3',
        price: '20',
        category: 'Carnes',
      },
    ],
  },

  {
    id: 1,
    category: 'Frutas',
    data: [
      {
        id: uuidv4(),
        name: 'Maçã',
        quantity: '2',
        price: '5',
        category: 'Frutas',
      },
    ],
  },
];
