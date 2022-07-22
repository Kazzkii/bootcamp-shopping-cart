import React from 'react';
import Head from '../components/head';
import Cart from '../components/Cart'
import Link from 'next/link';

import { Container, Typography } from '@material-ui/core'
import { Title } from '@material-ui/icons';

export const CartPage = () =>  {
  
  
  return (<Container>
    <Head title='Home'/>
    <div>
      <Typography variant="h3">My Cart</Typography>   
    </div>
    <div>
      <Link href="/shop">
        <a>View Shop</a>
      </Link>
    </div>
      <Cart> </Cart>

    <div>



    </div>
  </Container>
)};

export default CartPage;