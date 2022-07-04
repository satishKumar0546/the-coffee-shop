import actionTypes from '../constants/ActionTypes';

export const addOrder = (custName, selection) =>{
  return dispatch => dispatch({
    type: actionTypes.ADD_ORDER,
    data: {userName: custName, drink: selection.name, price: selection.price, size: selection.size}
  });
}


export const getPrices = () => {
  return dispatch => {
    fetch('http://localhost:8080/prices')
      .then(response => {
        return response.json();
      })
      .then(json => {
        dispatch({data: {prices: json}, type: actionTypes.GET_DATA});
        
      });
  };
}

export const getOrders = () => {
  return dispatch => {
    fetch('http://localhost:8080/orders')
      .then(response => {
        return response.json();
      })
      .then(json => {
        dispatch({data: {orders: json}, type: actionTypes.GET_DATA});
      });
  };
}

export const getPayments = () => {
  return dispatch => {
    fetch('http://localhost:8080/payments')
      .then(response => {
        return response.json();
      })
      .then(json => {
        dispatch({data: {payments: json}, type: actionTypes.GET_DATA});
      });
  };
}

