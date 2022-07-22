import React, {useEffect} from 'react';
import { Card, CardContent, CardActions, Typography, Grid, Button, CardMedia } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';



function ShopItem({ product_id, name, description, image_url, price, is_on_sale, sale_price, onAddToCart }) {
  var cart_id
  useEffect (() => {
    cart_id = parseInt(window.location.href.split("=")[1])
  })

  const addToCart = () => {

    onAddToCart({ product_id, name, price, cart_id, quantity: 1 })
  }

  return (
    <Card style={{height: "400px"}}>
      <CardMedia
        style={{ height: "140px"}}
        title="Contemplative Reptile"
      />
    <CardContent>
      <Typography variant="h6">{name}</Typography>   
      <Typography variant="subtitle2">{description}</Typography>
      <Typography variant="h5">${is_on_sale ? sale_price: price}</Typography>
    </CardContent>
      <CardActions>
        <Button onClick={addToCart} color="primary">Add To Cart</Button>
      </CardActions>
    </Card>
  );
}

export default ShopItem;