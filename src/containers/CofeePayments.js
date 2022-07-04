import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const CofeePayments = ({orders, prices, payments = []}) => {
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
  })
  const displayRows = Object.keys(userData).map(k=>{
    let obj = {user: k};
    let user = userData[k];
    obj['orders'] = user.orders.join(',');
    obj['amount'] = user.amount;
    return obj;
  })
  /*TODO: To display the order placed by individual user */
  return (
    <Paper sx={{width: 500, margin: 'auto', background: 'transparent', overflow: 'hidden' }}>
    <TableContainer sx={{ maxHeight: 600 }} className={'payments-table'} style={{background: 'transparant'}}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>User</TableCell>
            <TableCell align="right">Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {displayRows.map((row) => (
            <TableRow
              key={row.user}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>{row.user}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Paper>
  );
}

export default CofeePayments;