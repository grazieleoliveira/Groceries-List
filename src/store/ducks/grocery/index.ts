import {PRODUCTS_BY_CATEGORY} from '../../../utils/categories';

export const Types = {
  SET_INFORMATION_GROCERY: 'SET_INFORMATION_GROCERY',
  RESET_INFORMATION_GROCERY: 'RESET_INFORMATION_GROCERY',
};

const INITIAL_STATE = {
  groceryList: PRODUCTS_BY_CATEGORY,
};

export default function reducer(state = INITIAL_STATE, {type, payload}) {
  switch (type) {
    case Types.SET_INFORMATION_GROCERY:
      return {
        ...state,
        groceryList: payload.groceryList,
      };
    case Types.RESET_INFORMATION_GROCERY:
      return {...INITIAL_STATE};

    default:
      return state;
  }
}

export const informationGroceryAction = (groceryList) => ({
  type: Types.SET_INFORMATION_GROCERY,
  payload: {groceryList},
});

export const resetInfoGroceryAction = (groceryList) => ({
  type: Types.RESET_INFORMATION_GROCERY,
  payload: {groceryList},
});
