import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Sell.css"
import axios from "axios";
function Sell() {
  const location = useLocation();
  const data = location.state
  const[total,setTotal] =useState();
  const[check,setCheck] =useState(Boolean);


  const Price = total*data.price;








function changed(e){
    e.preventDefault();
    setTotal(e.target.value);
    

}

function sell(){
    const TPrice = total*data.price;
  console.log(TPrice);
  
    if(total>data.total){
        setCheck(true);
    }else{
       
     console.log(Price);

        axios.post("https://back-fw8j.onrender.com/sell",{username:localStorage.getItem('username'),stocks:total,cost:Price,coin:data.name},{
            header:{
                "application-type":"application/json"
            },
            withCredentials:true
        })
        
    }

   
}

  return (



    <div className="sellcointainer">
    

    
          <div className="sellBoxs">
          <div style={{gridArea:"1/1/2/2"}}>
           <img
          src={data.image}
          alt="auto"
          style={{
            width: "60px",
         marginLeft:"35%"
          }} />
          </div>
          <div style={{gridArea:"2/1/3/2"}}>
           
          <h1 style={{marginLeft:"30%" ,marginBottom:"60px"}}>{data.name}</h1>
          <h1 >SELLING PRICE :{data.price}</h1>

          <h1 >Quantity:  <input  className="buyinput" autoComplete="false" id="quan" name="quantity" type="number"                style={{boxShadow:"2px 2px 4px wheat", backgroundColor:"black",height:"1.5rem" ,width:"5rem", marginLeft:"0",borderRadius:"1rem",color:"whitesmoke"}}
  onChange={changed}></input> </h1>
  
          <h1 >TOTOAL PRICE :  {Price}</h1>
          <h1  >AVAILABLE COINS : {data.total}</h1>
         
          <div><a href="/portfolio"><button onClick={sell} className="exchangeButton"  >SELL</button></a></div>
       
         
     
          <div  >{check?(<h1  style={{color:"black", fontSize:"1.3rem", marginLeft:"30vw"}}>you do not have enough coins</h1>):(<h1  style={{color:"wheat", fontSize:"3rem"}}>success</h1>)}</div>
  </div>

</div>
  

    </div>
    
   
  );
}

export default Sell;
