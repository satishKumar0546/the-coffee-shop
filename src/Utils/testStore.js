import { applyMiddleware, createStore } from 'redux';
import CofeeShopReducer from '../reducers/CofeeShopReducer';
import { middlewares } from '../Store';

export const testStore = (initialState) => {
    const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
    return createStoreWithMiddleware(CofeeShopReducer, initialState);
};