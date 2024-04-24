// store.js
import { createStore, combineReducers } from 'redux';
import { listReducer } from './reducers';

const rootReducer = combineReducers({
  list: listReducer,
});

const store = createStore(rootReducer);

export default store;