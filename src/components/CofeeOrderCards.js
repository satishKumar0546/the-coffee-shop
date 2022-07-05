import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import cofee1 from '../assets/cofee1.jpg';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';

export default function CofeeOrderCards({currentOrder, orders}) {

  const [open, setOpen] = React.useState(false);
  const [selection, setSelection] = React.useState({});
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    cursor: 'pointer',
    color: theme.palette.text.secondary,
  }));

  const onClickSelection = (size, users) =>{
    setSelection({size, users});
    setOpen(true);
  }

  const closeDialog = () =>{
    setOpen(false);
  }

  const getOrderLabels = ()=>{
    return (
      <Grid key={currentOrder} container spacing={2}>
       {Object.keys(orders[currentOrder]).map((size, i)=>{
         const orderObj = orders[currentOrder][size];
         return size !== 'users' ? (<Grid item xs={6}>
           <Item key={size+i} data-testid={'coffee-orders-size-btn'} onClick={()=>onClickSelection(size, orderObj.users)}>{size}: {orderObj['number']}</Item>
       </Grid>) : undefined
       })}
      </Grid>)
  }

  return (
    <div className={'cofee-card'} style={{margin: '1rem', display: 'inline-block'}}>
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
            component="img"
            height="140"
            image={cofee1}
            alt="green iguana"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {currentOrder}
            </Typography>
              {getOrderLabels()}
        </CardContent>
        </Card>
        <Dialog data-testid="order-list-dialog" open={open} onClose={closeDialog}>
        <DialogTitle></DialogTitle>
        <DialogContent>
          <DialogContentText className={'order-text'}>
           <b>{`${currentOrder} - ${selection.size}`}</b>
          </DialogContentText>
          <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {(selection.users || []).map((value, idx) => {
              const labelId = `checkbox-list-secondary-label-${value}`;
              return (
                <ListItem
                  data-testid={'coffee-order-list'}
                  key={value+idx}
                  secondaryAction={
                    <Checkbox
                      edge="end"
                      inputProps={{ 'aria-labelledby': labelId }}
                    />
                  }
                  disablePadding
                >
                  <ListItemButton>
                    <ListItemText id={labelId} primary={`${value}`} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDialog}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
