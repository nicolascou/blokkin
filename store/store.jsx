import { createStore, compose } from 'redux';
import { searchReducer } from '../reducers/searchReducer'

let composeEnhancers = compose;
if (typeof window !== 'undefined') {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}
export const store = createStore( searchReducer, composeEnhancers());
