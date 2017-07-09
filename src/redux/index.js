import {createStore, combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form'
import visibility from './modules/visibilityState';
import steps from './modules/steps';

export default createStore(
  combineReducers({
    visibility,
    steps,
    form: formReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
