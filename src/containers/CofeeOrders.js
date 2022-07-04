import * as React from 'react';
import CofeeOrderCards from '../components/CofeeOrderCards';

const CofeeOrders = ({onCofeeSelect, orders = [], prices = []}) => {
  const finalOrders = {};
  const addOrder = (customerName, cofeeSelection) => {
    onCofeeSelect(customerName, cofeeSelection)
  }

  orders.map(order=>{
  if(finalOrders[order.drink]){
    finalOrders[order.drink]['users'].push(order.user);
    const sizeObj = finalOrders[order.drink][order.size] || {users: [], number: 0};
    finalOrders[order.drink][order.size] = {users: [...sizeObj.users, order.user]||[], number: (sizeObj.number || 0)+1}
  }
  else{
    finalOrders[order.drink]=[];
    finalOrders[order.drink]['users']=[order.user];
    finalOrders[order.drink][order.size]={
      users: [order.user],
      number: 1
    };
  }
})

return (
  <>
    {Object.keys(finalOrders).map(p=>{
      return  <CofeeOrderCards currentOrder={p} orders={finalOrders} onCofeeSelect={addOrder}/>
    })}
</>
);
}

export default CofeeOrders;