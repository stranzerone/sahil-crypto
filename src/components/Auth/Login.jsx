import React, { useState } from 'react';
import './Login.css'; // Import the CSS file for the component
import axios from 'axios'
import { NavLink } from 'react-router-dom';

function Login() {
    const url = process.env.REACT_APP_API;

  const[username,setusername] = useState("");
  const [password,setPassword] = useState("");
  const[value,setValue] = useState(Boolean);
  //const url = process.env.REACT_APP_API;

  //console.log("this url is updated one ",url,"happy");
console.log(url,"port")
  function handle1(e){
    setusername(e.target.value);

  }
 
  function handle3(e){
    setPassword(e.target.value);
  }


  const handlSub = async ()=>{ 
try{

   const response =  await axios.post( "https://back-fw8j.onrender.com/login",{ username:username, password:password },{
        headers:{"Content-Type":"application/json"},
        withCredentials:true
      });

      if(response.status===200){
        setValue(true)
        localStorage.setItem('username',username)
      }else{
        setValue(false)
      }
    
    
    
    
    }catch(error){
        console.error("error while login")
      }
    
    
    }
  
    



return (
  <div className="Signcointainer">





 
    <div className="signbox">
    <div className='coins'>
    
     <h1  name="username">Username        <input type="username"  name='username'   onChange={handle1} autoComplete="false"  className="logininput" placeholder="USERNAME"  ></input>
 </h1>

    
      <h1>Password        <input type="password" name='password' id='password' className="logininput" placeholder="Password" onChange={handle3}></input>
</h1>

     <button className="loginButton" type="submit" onClick={handlSub}>LOGIN</button>
     {value?(<div><a href='/'><button className='loginButton1'>HOME</button></a> </div>):(<div> <NavLink to={"/register"}><button className='loginButton1'>REGISTER</button> </NavLink></div>)}
    </div>
    </div>

  
   
    
    
  </div>
);

}


  
  export default Login;