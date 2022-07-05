import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import coffeeReducer from './reducers/CofeeShopReducer';

export const middlewares = [thunk];
export const store = createStore(coffeeReducer, applyMiddleware(thunk));