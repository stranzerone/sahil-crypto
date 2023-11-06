import React, { useEffect, useState } from 'react'
import './Style.css'
import { NavLink } from 'react-router-dom'
import Wallet from '../Wallet/Wallet'
export default function Navbar() {

  const [wallet,setWallet] =useState()
  const [user,setUser] =useState()
  const [on,setOn]=useState(true)
const money = Wallet();

useEffect(()=>{
const use = localStorage.getItem('username')
setUser(use)
},[])

function logout(){
  localStorage.removeItem('username')


}


function collapse(){
  setOn(!on)

}

  return (
    <nav className="navbar navy navbar-expand-lg navbar-light bg-light h-5 ">
  <a className="navbar-brand " href="#">
    <img src='https://th.bing.com/th/id/OIP.rEUG1dsUP3D6aYy1QsdDbQHaHi?pid=ImgDet&rs=1' alt='auto'  style={{width:'3rem',height:'3rem'}} className='mx-4' />
   <h2 style={{fontSize:'1rem',color:'gold', fontWeight:"700"}}>  Money : {money}</h2>
  </a>
  <button onClick={collapse} class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div style={{visibility:on?null:"hidden"}} className=" collapse navbar-collapse ms-5 d-flex  align-items-center justify-content-center Navv" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
      
    <NavLink className="text-decoration-none" to={"/"}>  <h1 class="nav-link " href="/">HOMEs </h1></NavLink>  
      </li>
      <li className="nav-item">
     <NavLink  className="text-decoration-none" to={"/table"}> <h1 class="nav-link ">MARKET</h1></NavLink>   
      </li>
      <li className="nav-item">
       <NavLink  className="text-decoration-none" to={"/portfolio"}> <h1 class="nav-link " href="">PORTFOLIO</h1></NavLink>
      </li>
      <li className="nav-item">
      {user?(<a href='/'><button onClick={logout} className='mx-5 btn btn-primary'>{user}</button></a>):(
     <NavLink to={'/login'}  className="text-decoration-none"> <button className="nav-link btn bt-primary  " >LOG IN</button></NavLink>   )}
      </li>
    </ul>
  </div>
 
</nav>
  )
}
