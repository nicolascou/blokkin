import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { searchReducer } from '../reducer/searchReducer'
import { menuReducer } from '../reducer/menuReducer'

const reducers = combineReducers({
    search: searchReducer,
    menu: menuReducer
})

let composeEnhancers = compose;
if (typeof window !== 'undefined') {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}
export const store = createStore( reducers, composeEnhancers(applyMiddleware(thunk)));
