import { combineReducers } from 'redux';
import actionTypes from '../constants/ActionTypes';

let initialState = {prices : [], payments:[], orders:[]};

const addOrder = (state, orderObj) =>{
  const { orders, payments } = state;
  const order = {user: orderObj.userName, drink: orderObj.drink, size: orderObj.size};
  let consolidatePayment = payments;
  const paymentsLength = payments.length;
  const userObjIndex = payments.findIndex(p=>p.user === orderObj.userName);
  if(userObjIndex === -1){
    let user = {
      user: orderObj.userName,
      amount: orderObj.price
    }
    consolidatePayment = [...consolidatePayment, user]
  }
  else{
    consolidatePayment[userObjIndex].amount += orderObj.price;
  }
  return { payments: consolidatePayment, orders: [...orders, order]}
}

const cofeeState = (state=initialState, action = {}) => {
  switch (action.type) {
    case actionTypes.ADD_ORDER:
      return {...state, ...addOrder(state, action.data)}
    case actionTypes.GET_DATA:
    return {...state, ...action.data}
    default:
      return Object.assign({}, state)
  }
}

const coffeeReducer = combineReducers({
  cofeeState
})

export default coffeeReducer