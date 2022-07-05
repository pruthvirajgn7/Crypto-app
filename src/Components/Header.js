import React from 'react'
import {AppBar,Container,Toolbar,Typography,
  Select,MenuItem,
  createTheme}from '@material-ui/core'
import { makeStyles, ThemeProvider } from '@material-ui/styles';
import { useHistory } from 'react-router-dom';
import { CryptoState } from '../CryptoContext';
const useStyles=makeStyles(()=>({
  title:{
    flex:1,
    color:"gold",
    fontFamily:"Montserrat",
    fontWeight:"bold",
    cursor:"pointer",
  }
}))
const Header = () => {
  const classes=useStyles();
  const history=useHistory();
  const{currency, SetCurrency}  = CryptoState();
  console.log(currency);

  const darkTheme=createTheme({
    palette:{
      primary:{
        main:"#fff",
      },
      type:"dark",
    },
    
  });
  return (
    <ThemeProvider theme={darkTheme}>
   <AppBar color='transparent' position='static'>
    <Container>
      <Toolbar>
        <Typography onClick={()=>history.push("/")}
        className={classes.title}
        variant='h6'> Crypto Hunt</Typography>
        <Select variant="outlined" style={{
           width:100,
           height:40,
           marginRight:15,
        }}
        value={currency}
        onChange={(e)=> SetCurrency(e.target.value)}
        >
          <MenuItem value={"USD"}>USD</MenuItem>
          <MenuItem value={"INR"}>INR</MenuItem>
        </Select>
      </Toolbar>
    </Container>

   </AppBar>
   </ThemeProvider>
  )
};

export default Header
