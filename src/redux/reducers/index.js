import { combineReducers } from 'redux';
import getListUser from './listUser';

const rootReducers = combineReducers({
  user: getListUser
});

export default rootReducers;
