import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import Home from '../Routes/Home/reducer';
import Boilerplate from '../Routes/Boilerplate/reducer';

export default combineReducers({
  router: routerReducer,
  Home,
  Boilerplate
});
