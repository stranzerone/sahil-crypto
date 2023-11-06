import React, { useState } from 'react';
import './Register.css'; // Import the CSS file for the component
import axios from 'axios'
import { NavLink } from "react-router-dom";


const Register = () => {

  const[username,setusername] = useState("");
  const [password,setPassword] = useState("");
  const [email,setEmail] = useState("");
  const[name,setName]= useState("");
  const [Reg,setReg]= useState(Boolean);

  function handle1(e){
    setusername(e.target.value);

  }
  function handle2(e){
    setEmail(e.target.value);

  }
  function handle3(e){
    setPassword(e.target.value);

  }
  function handle4(e){
    setName(e.target.value);

  }

  const handlSub = async () => { 

    
    try {
      const response = await axios.post('https://back-fw8j.onrender.com/register', { username: username, password:password,email:email,name:name,wallet:10000000 },
      {
        
        headers: {
          'Content-Type': 'application/json',
          }}
      )

      console.log(response.status);
      if(response.status===200){
        setReg(true)
      }else{
        setReg(false)
      }

  
}catch (error) {

  console.error('Error sending data:', error);

}



};

  return (
   
    <div className="registerCointainer d-flex flex-column flex-md-row">
      <div className="registerBox">
        <h1 className='fs-1' style={{paddingLeft:"20%",color:"black" ,fontSize:"4rem"}}>REGISTER</h1>
            <label className='label' htmlFor="username">Name</label>
            <input  className='input' type="text" id="username" name="user" onChange={handle4} />
            <label className='label' htmlFor="username">Username</label>
            <input className='input' type="text" id="username" name="username" onChange={handle1} />
            <label className='label' htmlFor="email">Email</label>
            <input className='input' type="email" id="email" name="email" onChange={ handle2} />
            <label className='label' htmlFor="password">Password</label>
            <input className='input' type="password" id="password" name="password" onChange={handle3}/>
         
</div>
         <div className='d-flex  flex-column  align-items-center justify-content-center'>

        
          
      {Reg?(<div>
      <NavLink exact to={"/login"}>
      <button className='registerButton'>Login</button>
      </NavLink>
    
      <h2 style={{color:"wheat"}}>You Have Registered successfully !!</h2>
      </div>):(
        <div>
        <button  className="registerButton btn btn-primary text-black" type="submit" onClick={handlSub}>Register</button>


          <h2 style={{color:"black"}} className='fw-bold'>Username is Alredy registerd Or check The filed </h2>
        </div>
      )}
    

      
     </div>
 
    </div>
    

  );
};

export default Register;
