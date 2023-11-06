import axios from "axios";
import React, { useEffect, useState } from "react";
import "./port.css"
import  { NavLink } from "react-router-dom";

function Box(props){
  const [data,setData] =useState("");
const Name =props.check;
const invest= parseFloat(props.price*props.quantity);
const currentINvest= parseFloat(props.quantity*data);
const profit = currentINvest-invest;

useEffect(() =>{
  console.log("check");
  axios.get("https://api.coingecko.com/api/v3/simple/price?ids="+[Name]+ "&vs_currencies=inr").then(
    (response)=>{
      if(response){

      
      setData(response.data[Name].inr);

 
      }else{
        console.log('error');
      }
 

    }
  )
setInterval(1000);
},[])



 
return(


   
<div className="card">     
      <h1> {props.symbol}</h1>
      <h1>NAME: {props.name}</h1>
  
      <h1>PRICE: {props.price}</h1>
      <h1>COINS:  {props.quantity} </h1>
      <h1>CURR INVES: {currentINvest} </h1>
    <h1 className="aa" style={{ fontSize:"110%",fontWeight:"400px",color: profit >= 0 ? "green" : "red" }} >{profit}</h1>
  <NavLink  to={"/auth/portfolio/sell"} state={{image:props.image, name:props.name , symbol:props.symbol , price:props.price , total:props.quantity ,current:currentINvest}}  > <button  className="sellButton">SELL </button></NavLink>
  </div>
  



);

}

export default Box;