import React, { useState,useEffect } from 'react'
import axios from 'axios'

export default function Wallet() {

  const [wallet,setWallet] = useState()
useEffect(()=>{
    axios.post("https://back-fw8j.onrender.com/wallet",{username:localStorage.getItem('username')},
   {
     
     headers: {
       'Content-Type': 'application/json',
      
       },
       withCredentials:true
     }).then((response)=>{
     if(response.data){
      console.log(response.data)
      setWallet(response.data.wall)
     }else{
      console.log('no response')
     }
     })
  
    
  },[])
  return wallet;
}
