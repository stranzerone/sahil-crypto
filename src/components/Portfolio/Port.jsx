import axios from "axios";
import React, { useEffect, useState } from "react";
import "./port.css"
import  { NavLink } from "react-router-dom";

function Port(props){
  const [data,setData] =useState("");
const Name =props.name;


const invest= parseFloat(props.price*props.stocks);
const currentINvest = data*props.stocks
const profit = parseFloat(currentINvest-invest).toFixed(2);

useEffect(() =>{
  console.log(Name);
  const coin = Name.toLowerCase();
  console.log(coin)
  
  axios.get("https://api.coingecko.com/api/v3/simple/price?ids="+[coin]+ "&vs_currencies=inr").then(
    (response)=>{
      if(response){

      
      setData(response.data[coin].inr);

 
      }else{
        console.log('error');
      }
 

    }
  )
setInterval(1000);
},[])



 
return(


   
<div className="card text-align-center d-flex justify-content-end" >  
<img className="  col-1" src={props.image}  alt="coin" />   
     
      <h1 className=" col-1 text-align-center"> {props.name}</h1>
  
      <h1 className=" col-1">{data}</h1>
      <h1 className="col-1">{props.stocks} </h1>
      <h1 className="col-2">{currentINvest} </h1>
    <h1 className="aa col-2 " style={{ fontSize:"110%",fontWeight:"400px",color: profit >= 0 ? "green" : "red" }} >{profit}</h1>
  <NavLink  to={"/sell"} state={{image:props.image, name:props.name , symbol:props.symbol , price:data , total:props.stocks ,current:currentINvest}}  > <button  className="sellButton col-1">SELL </button></NavLink>
  </div>
  



);

}

export default Port;