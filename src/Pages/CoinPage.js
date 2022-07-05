import { makeStyles, Typography, LinearProgress } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { SingleCoin } from '../Config/api';
import { CryptoState } from '../CryptoContext';
import CoinInfo from '../Components/CoinInfo';
import{numberWithCommas} from '../Components/Banner/Carousel';

const CoinPage = () => {
  const {id} = useParams();
  const [coin, setCoin] = useState();
  const {currency, symbol}= CryptoState();
  const fetchCoin=async()=>{
    const {data} =await axios.get(SingleCoin(id));
    setCoin(data);
  };
  console.log(coin);
  useEffect(()=>{
    // eslint-disable-next-line react-hooks/exhaustive-deps
    fetchCoin();

  },[])
  const useStyles= makeStyles((theme)=>({
     container:{
      display: "flex",
      [theme.breakpoints.down("md")]:{
         flexDirection: "column",
         alignItems: "center",
      },
     },
     sidebar: {
      width: "30%",
      [theme.breakpoints.down("md")]: {
        width: "100%",
      },
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: 25,
      borderRight: "2px solid grey",
    },
    heading: {
      fontWeight: "bold",
      marginBottom: 20,
      fontFamily: "Montserrat",
    },
    marketData: {
      alignSelf: "start",
      padding: 25,
      paddingTop: 10,
      width: "100%",
      [theme.breakpoints.down("md")]: {
        display: "flex",
        justifyContent: "space-around",
      },
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        alignItems: "center",
      },
      [theme.breakpoints.down("xs")]: {
        alignItems: "start",
      },
    },
  }));
  const classes=useStyles();
  if (!coin) return <LinearProgress style={{ backgroundColor: "gold" }} />;
  return (
    <div className={classes.container}>
      <div className={classes.sidebar}>
      <img
          src={coin?.image.large}
          alt={coin?.name}
          height="200"
          style={{ marginBottom: 20 }}
        />
         <Typography variant="h3" className={classes.heading}>
          {coin?.name}
        </Typography>
        <div className={classes.makrketData}>
          <span style={{display: "flex"}}>
             <Typography variant="h5" className={classes.heading}>
              Rank:
             </Typography>
             &nbsp; &nbsp;
             <Typography
             variant="h5"
             style={{
              fontfamily: "Montserrat",
             }}
             >
              {coin?.market_cap_rank}

             </Typography>
          </span>
          <span style={{display: "flex"}}>
             <Typography variant="h5" className={classes.heading}>
              CurrentPrice:
             </Typography>
             &nbsp; &nbsp;
             <Typography
             variant="h5"
             style={{
              fontfamily: "Montserrat",
             }}
             >
              {symbol}{" "}
              {numberWithCommas(
                coin?.market_data.current_price[currency.toLowerCase()]
              )}

             </Typography>
          </span>
          <span style={{display: "flex"}}>
             <Typography variant="h5" className={classes.heading}>
              MarketCap:
             </Typography>
             &nbsp; &nbsp;
             <Typography
             variant="h5"
             style={{
              fontfamily: "Montserrat",
             }}
             >
                {symbol}{" "}
              {numberWithCommas(
                coin?.market_data.market_cap[currency.toLowerCase()]
                  .toString()
                  .slice(0, -6)
              )}
              M

             </Typography>
          </span>

        </div>
 
      </div>
       {/*char*/}
       <CoinInfo coin={coin}/>
    </div>
  )
}

export default CoinPage

