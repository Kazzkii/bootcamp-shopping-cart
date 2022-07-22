/* eslint-disable no-unused-vars */
import React,{ useEffect }  from 'react';
import Head from '../components/head';
import { Container, Typography, Button,TextField } from '@material-ui/core'




export const IndexPage = () => {
  const [customers, setCustomers] = React.useState([])
  const getCustomerUrl = "http://localhost:8000/v1/customers";

  useEffect(async () => {
    const response = await fetch(getCustomerUrl, { method: 'GET'});
    const json = await response.json();
    setCustomers(json)
  }, [])

  const [username_input, setUser] = React.useState();
  const [password_input, setPassword] = React.useState();
  const getUsername = event => {
    setUser(event.target.value)
  }

  const getPassword = event => {
    setPassword(event.target.value)
  }
  console.log("asdf")

  const checkLogin = () => {
    customers.map (customer => {
      if (customer.username == username_input && customer.password == password_input)
      {
        window.location = `/shop/?user=${customer.cart_id}`
      }
    })
      
  }
  
  
  return (<Container>
    <Head title='Home'/>
    <div>
      <Typography variant="h3">Welcome</Typography>   
    </div>

    <div>
      <TextField
          value={username_input}
          label="username"
          id="username"
          sx={{ m: 1, width: '25ch' }}
          variant="outlined"
          onChange={getUsername}
        />
    </div>
    <TextField value={password_input} onChange={getPassword} variant="outlined" label="password" type="password" />
    <div>
      <div>
          <Button onClick={checkLogin} color="primary">Sign in</Button>
        
        <Button color="primary">Sign up</Button>
      </div>
      
    </div>
  </Container>
)};

export default IndexPage;
