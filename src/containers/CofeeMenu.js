import * as React from 'react';
import MediaCard from '../components/CofeeCard';

const CofeeMenu = ({onCofeeSelect, prices = []}) => {
  const addOrder = (customerName, cofeeSelection) => {
    onCofeeSelect(customerName, cofeeSelection)
  }
  return (
    <>
      {prices.map((p, i)=>{
        return  <MediaCard key={'cofee-item'+i} details={p} onCofeeSelect={addOrder}/>
      })}
  </>
  );
}

export default CofeeMenu;