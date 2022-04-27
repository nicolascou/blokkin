import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { searchReducer } from '../reducer/searchReducer'

let composeEnhancers = compose;
if (typeof window !== 'undefined') {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}
export const store = createStore( searchReducer, composeEnhancers(applyMiddleware(thunk)));
