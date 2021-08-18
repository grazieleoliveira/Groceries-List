import {CATEGORIES} from '../../../utils/categories';

export const Types = {};

const INITIAL_STATE = {
  groceryList: CATEGORIES,
};

export default function reducer(state = INITIAL_STATE, {type, payload}) {
  switch (type) {
    default:
      return state;
  }
}
