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
  {id: 1, name: 'Carnes'},
  {id: 2, name: 'Frutas'},
  {id: 3, name: 'Legumes'},
  {id: 4, name: 'Frios'},
  {id: 5, name: 'Guloseimas'},
  {id: 6, name: 'Outros'},
];

export const PRODUCTS_BY_CATEGORY = [
  {
    id: 1,
    name: 'Carnes',
    data: [],
  },
  {
    id: 2,
    name: 'Frutas',
    data: [],
  },
  {
    id: 3,
    name: 'Legumes',
    data: [],
  },
  {
    id: 4,
    name: 'Frios',
    data: [],
  },
  {
    id: 5,
    name: 'Guloseimas',
    data: [],
  },
  {
    id: 6,
    name: 'Outros',
    data: [],
  },
];
