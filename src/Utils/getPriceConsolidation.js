const consolidatePayments = (orders, prices) =>{
    const userData = {}
    const priceData = {};
    prices.forEach(p=>{
        let obj = {};
        Object.keys(p.prices).map(c=>{
          obj[c] = p.prices[c];
        });
        priceData[p.drink_name] = obj;
    })
    orders.forEach(o=>{
      const user = o.user;
      if(userData[user]){
        userData[user]['orders'].push(`${o.drink}: ${o.size}`);
        userData[user]['amount'] += priceData[o.drink][o.size];;
      }
      else{
        let obj = {}
        obj['orders']=[`${o.drink}: ${o.size}`];
        obj['amount'] = priceData[o.drink][o.size];
        userData[user] = obj;
      }
    });
    return {userData, priceData};
  }

  export default consolidatePayments;