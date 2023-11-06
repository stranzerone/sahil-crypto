import React   from "react";
import { useState,useEffect } from "react";

import Items from "./Items";
import axios from "axios";
import Title from "./Title";
import Navbar from "../Home/Navbar";

const Box = () => {
  const [crypto, setCrypto] = useState([]);
  const [Log,setLog] =useState(Boolean);
  //setInterval(,10000000)


    // Make the API request

   useEffect(()=>{

    const response = axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr").then(
        
    (response)=>{
      setCrypto(response.data);
      console.log(response.data)

    }
    
);




   },[])
   
    

 




    
  
  return (
      
    <div>
 

<Title />
<div className="itemsCointainer">
  <div>
    
  </div>
      {crypto.map((crypto) => (
        <div> 
          <Items
            key={crypto.id}
            image={crypto.image}
            symbol={crypto.symbol}
            Name={crypto.name}
            price={crypto.current_price}
            changePercent={crypto.price_change_24h}
            high24={crypto.high_24h}
            low24={crypto.low_24h}
            check={crypto.id}
          />
        </div>
      ))}
      </div>


    
    </div>
  );
};

export default Box;
