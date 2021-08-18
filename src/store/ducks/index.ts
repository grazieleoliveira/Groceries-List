import {combineReducers} from 'redux';

import user from './user';
import grocery from './grocery';

export default combineReducers({
  user,
  grocery,
});
