import React, { useEffect, useState } from "react";
import "./Buy.css";
import axios from "axios";

import { NavLink, useParams } from "react-router-dom";




function Buy() {
    const {coin} =useParams();
    const[image,setImage] =useState();
  
  const [value, newValue] = useState();
 const [inr,setInr]  =useState()


useEffect(() =>{
  const name = coin.toLowerCase()
    axios.get("https://api.coingecko.com/api/v3/coins/"+[name]).then(
      (response)=>{
        if(response){
  
     
      const inrs = response.data.market_data.current_price.inr
      setImage(response.data.image.thumb)
      console.log(inrs)
    setInr(inrs)
  
   
        }else{
          console.log('error');
        }
   
  
      }
    )
  setInterval(1000);
  },[])

  function handleChange(event) {
    newValue(event.target.value);
  }

  const handleClick = async() =>{ 

 const username = localStorage.getItem('username');
 const response= axios.post('https://back-fw8j.onrender.com/buy', { coin:coin, stocks:value,price:inr,username:username,image:image },

      {
        
        headers: {
          'Content-Type': 'application/json',
         
          },
          withCredentials:true
        }
      )

      if(response){
        console.log(response)
      }else{
        console.log('no response')
      }
  
  };



 


  return (

    <div className="buyCointainer">
      
      
        <div className="buyBox">
        
          
            <h1   style={{color:"white", paddingLeft:"40px", fontSize:"50px"}}>{coin}</h1>
       
            <h1>COIN : {coin}</h1>
         
            <h1>PRICE : {inr}</h1>
         
            <h1>
             <label> Quantity</label> 
              <input 
              style={{boxShadow:"2px 2px 4px wheat", backgroundColor:"black",height:"25px" ,width:"70px", marginLeft:"25vw",borderRadius:"20px",color:"whitesmoke"}}
                onChange={handleChange}
                className="buyinput"
                number="Number"
                type="Number"
                minLength="1"
                placeholder="INPUT"
              ></input>
            </h1>
         
        
            <h1>TOTAL AMOUNT :{inr*value} INR </h1>
          
          

       
        
        </div>
      
      
          
       <a href="/portfolio" >    <button  className="buyButton2" type="submit"  onClick={handleClick}>   BUY</button> </a>
          
        
          
   <NavLink to={"/"}> <button className="buyButton1">CANCEL</button> </NavLink>
       
        


        </div>
  );
}

export default Buy;
