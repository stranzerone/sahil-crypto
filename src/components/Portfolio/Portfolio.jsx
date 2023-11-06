import "./Portfolio.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Port from "./Port";
import Head from "./Head";

function Portfolio() {
  const [crypto, setCrypto] = useState([]);
  const [coin, setCoin] = useState('');
 const user = localStorage.getItem('username')
  useEffect(() => {
    // Make the initial API request to get the coin symbol
    axios
      .post("https://back-fw8j.onrender.com/portfolio", {username:user}, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((res) => {
        const  coinSymbol = res.data[0].coin.toLowerCase();
        setCoin(coinSymbol);
        console.log(res.data);
        setCrypto(res.data);

        // Make the second API request to CoinGecko with the retrieved coin symbol
        
      })
      .catch((error) => {
        console.error("Error fetching coin symbol:", error);
      });
  }, [coin]);

  return (
<div className="">

<Head />
    {crypto.map((New)=>(
        
        

      <div className="portcointaner">

      <Port 
        key={New._id}
     
        image={New.image}
        name={New.coin}
        price={New.price}
        stocks={New.stocks}
      
          />

        
</div>

      
  )


  )}
</div>
  );
}

export default Portfolio;
