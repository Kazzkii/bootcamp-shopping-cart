import React ,  {useState, useEffect }from 'react';
import Head from '../components/head';
import Link from 'next/link';
import ShoppingItemList from "../components/ShopItemList"

import { Container, Typography, Button } from '@material-ui/core'

export const ShopPage = () => {
  
  var user_cart
  useEffect (() => {
    user_cart = window.location.href.split("=")[1]
  })

  const checkCart = () => {
    window.location = `/cart/?user=${user_cart}`
  }

  
  


  return (<Container> 

    <div>
      <Head title='Home'/>
    </div>
    
    <div>
      <Typography variant="h3">My Shop</Typography>   
    </div>
    <div>
        <Button onClick={checkCart} color="primary">View Cart</Button>
    </div>
    <ShoppingItemList> </ShoppingItemList>
    
  </Container>
)};

export default ShopPage;