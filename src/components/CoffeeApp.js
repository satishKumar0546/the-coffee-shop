import React, {useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { addOrder, getOrders, getPayments, getPrices} from '../actions/CofeeShopActions';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import CofeeMenu from '../containers/CofeeMenu';
import CofeeOrders from '../containers/CofeeOrders';
import CofeePayments from '../containers/CofeePayments';
import Snackbar from '@mui/material/Snackbar';
import Button from '@mui/material/Button';
import { consoleSave } from '../Utils/downloadData';
import consolidatePayments from '../Utils/getPriceConsolidation';


const CoffeeApp = ({payments, orders, addOrder, getInitData, prices = []}) => {
  const [currentTab, setTab] = useState(0);
  const [snackbarShown, setSnackbarShwon] = useState(false);
  const [latestSelection, setLatestSelection] = useState('');

  useEffect(async ()=>{
    getInitData();
  },[])


  const handleChange = (event, newValue) => {
    setTab(newValue);
  };
  const onCofeeSelect = (customerName, cofeeSelection) => {
    addOrder(customerName, cofeeSelection);
    setLatestSelection(`${cofeeSelection.name}: ${cofeeSelection.size}`);
    setSnackbarShwon(true);
    
  }
  const downloadData = () =>{
    const { userData } = consolidatePayments(orders, prices);
    const output = {payments: userData, prices, orders};
    console.info(output);
    consoleSave(output, 'output.json');
    consoleSave(JSON.stringify(output), 'output.txt');
  }
  const tabColor= {color: 'white'}
  return (
    <>
      <Button 
        sx={{...tabColor, borderColor: 'white'}} 
        variant="outlined" 
        className='fixed-download-btn' onClick={downloadData}>Download data</Button>
      <Tabs className={'navigation-buttons'} value={currentTab} onChange={handleChange} centered>
        <Tab label="Cofee Menu" style={tabColor} currentTab={0}/>
        <Tab label="Orders" style={tabColor} currentTab={1}/>
        <Tab label="Payments" style={tabColor} currentTab={2} />
      </Tabs>
      {currentTab === 0 &&  <CofeeMenu prices={prices} onCofeeSelect={onCofeeSelect}/>}
      {currentTab === 1 && <CofeeOrders prices={prices} orders={orders} onCofeeSelect={onCofeeSelect} />}
      {currentTab === 2 && <CofeePayments prices={prices} payments={payments} orders={orders} />}
      <Snackbar
        open={snackbarShown}
        autoHideDuration={3000}
        onClose={()=>setSnackbarShwon(false)}
        message={`Coffee ordered ${latestSelection}`}
      />
    </>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    prices : state.cofeeState.prices, 
    payments: state.cofeeState.payments,
    orders: state.cofeeState.orders
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addOrder:(a,b) => dispatch(addOrder(a,b)),
    getInitData: () => {
      dispatch(getPrices());
      dispatch(getPayments());
      dispatch(getOrders());
    },
  }
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(CoffeeApp)

export default App;