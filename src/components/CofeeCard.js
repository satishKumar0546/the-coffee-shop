import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import cofee1 from '../assets/cofee1.jpg';

export default function MediaCard({details, onCofeeSelect}) {

  const [open, setOpen] = React.useState(false);
  const [selection, setSelection] = React.useState({});
  const [name, setName] = React.useState('');
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    cursor: 'pointer',
    color: theme.palette.text.secondary,
  }));

  const onCofeeCardSelect = (name, size, price) =>{
    setSelection({name,size,price});
    setOpen(true);
  }

  const basicDetails = (detail) =>{
    return (<div>
      <Grid container spacing={2}>
       {Object.keys(detail.prices).map(size=>{
         const price = detail.prices[size];
         return <Grid item xs={6}>
           <Item key={`${detail.drink_name}${size}`} onClick={()=>onCofeeCardSelect(detail.drink_name, size, price)}>{size}: ${price}</Item>
       </Grid>
       })}
      </Grid>
    </div>)
  }

  const closeDialog = () =>{
    setOpen(false);
  }

  const confirmOrder = () =>{
    closeDialog();
    onCofeeSelect(name, selection);
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
            {details.drink_name}
            </Typography>
              {basicDetails(details)}
        </CardContent>
        </Card>


        <Dialog open={open} onClose={closeDialog}>
        <DialogTitle>Confirmation</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You have selected <b>{`${selection.size} - ${selection.name}`}</b> cofee, that is <b>${`${selection.price}`}</b>
            <br/>Please help with your name.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Your name"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e)=>{setName(e.target.value)}}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={confirmOrder}>Confirm</Button>
          <Button onClick={closeDialog}>Cancel</Button>
        </DialogActions>
      </Dialog>

    </div>
  );
}