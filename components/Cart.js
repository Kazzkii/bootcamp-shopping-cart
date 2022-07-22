
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@material-ui/core'
import { useRouter } from 'next/router'
import CartItem from "./CartItem"


class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cartItems: [] };
    this.cust_id
  }
  

  componentDidMount() {
    fetch('http://localhost:8000/v1/cartitems')
      .then(response => response.json())
      .then(data => this.setState({cartItems: data}))
    this.cust_id = parseInt(window.location.href.split("=")[1])
  }

  getTotal = () => {
    fetch(`http://localhost:8000/v1/cartitems`, { method: 'GET' })
      .then(response => {
        if (response.ok) {
          const totalPrice = this.state.cartItems.map(item => time.quantity * item.price)
            .reduce((a,b) => a + b, 0);
        } else {
          alert(`Failed to - ${response.status}`)
        }
      });
  }

  deleteItem = (id) => {
    fetch(`http://localhost:8000/v1/cartitems/${id}`, { method: 'DELETE' })
      .then(response => {
        if (response.ok) {
          const newItems = this.state.cartItems.filter(i => i.id != id);
          this.setState({
            cartItems: newItems
          })
        } else {
          alert(`Failed to delete ${id} - ${response.status}`)
        }
      });
  }

  render() {

    return (
      <div>
        <Grid container direction="column" spacing={3}>
          {(this.state.cartItems.filter(item => item.cart_id == this.cust_id)).map(item => 

              <Grid item xs={6}>
              <CartItem
                name={item.name}
                price={item.price}
                quantity={item.quantity}
                cart_id={item.cart_id}
                onRemoveFromCart={item.onRemoveFromCart}
                />
              </Grid>
            
            
          )}
        </Grid>
        <div style={{"padding-top": "20px"}}>
          <Typography variant="h3">Total: {Cart.getTotal}
          </Typography>
        </div>
      </div>
    );
  }
}

Cart.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
};

Cart.defaultProps = {
  title: 'cart-solution',
  description: 'A gasket cart app'
};

export default Cart;