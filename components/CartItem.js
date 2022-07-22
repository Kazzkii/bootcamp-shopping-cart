import React from 'react';
import { Card, CardContent, CardActions, Typography, Grid, Button, CardMedia } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 200,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  }
}));

function CartItem({ name, id, price, quantity, customer_id, onRemoveFromCart }) {
  

  const classes = useStyles();


  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography variant="h6">{name}</Typography>   
          <Typography variant="h5">{quantity} x ${price}</Typography>
        </CardContent>
        <CardActions>
          <Button onClick={onRemoveFromCart} color="primary">Remove from cart</Button>
        </CardActions>
      </div>
    </Card>
  );
}

export default CartItem