import {combineReducers} from 'redux';
import {reducer as form} from 'redux-form';
import home from '../modules/home/reducer';

export const makeRootReducer = (asyncReducers) => combineReducers({
  home,
  form,
  ...asyncReducers,
});

export default makeRootReducer;
