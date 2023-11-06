import React, {  useState } from 'react'
import {Box, Button, Grid, Typography,List,ListItem, IconButton,Drawer} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import styled from '@emotion/styled'
import { NavLink, useNavigate } from 'react-router-dom'
import './Home.css'

const GridS =styled(Grid)`
display:flex;
justify-content:center;
font-size:.9rem;
margin:0 6rem;

font-weight:700;
column-gap:4rem ;


`
const Navbar = styled(Box)`
display:flex;
@media(max-width:426px){
display:none;
color:black;

}

`

const Text1=styled(Typography)`
display:flex;
margin-top:1rem;
color:red;
font-weight:600;



@media(max-width:426px){
  color:black;
}
@media(max-width:1025px){
    font-size:.6rem;
}
@media(max-width:769px){
    font-size:.4rem;
    gap:.3rem;
    display:flex;
}
`
const MenuButton=styled(IconButton)`
display:none;
@media(max-width:426px){
  display:block;
margin-left:60vw;
height:2rem;
width:2rem;
 
 
}

`
const StyledDrawer= styled(Drawer)`
height:60vh;
width:20vw;
background-color:wheat;

`

export default    function   Navbar2() {
  const user = localStorage.getItem('username');
  const [open,setOpen] =useState(false)

 const navigate =useNavigate()
  const logout =()=>{
    localStorage.removeItem('username');
    navigate('/')

  }



  const list =()=>(
    <Box style={{display:"flex",flexDirection:'column',gap:'4rem'  ,width:"40vw",height:"50vh"}}>
        <List>
          <ListItem >
         <NavLink style={{textDecoration:'none'}} to={'/'}> <Text1 style={{fontSize:'2rem'}}>Home</Text1> </NavLink>
        </ListItem>
       <ListItem>
    <NavLink  to={"/table"}  style={{textDecoration:'none', fontSize:'1rem'}}>  <Text1 style={{fontSize:'2rem'}}>MARKET</Text1></NavLink>
    </ListItem>
    <ListItem>
    <NavLink to={'/portfolio'}  style={{textDecoration:'none',fontSize:"1rem"}}> <Text1 style={{fontSize:'2rem'}}>Portfolio</Text1> </NavLink>
    </ListItem>
    <ListItem>
    <NavLink to={'/'} style={{textDecoration:'none',fontSize:"1rem"}}> <Text1 style={{fontSize:'2rem'}}>ABOUT US</Text1> </NavLink>
    </ListItem>
    <ListItem>
 
    <NavLink   to={'/'}  style={{textDecoration:'none',fontSize:"1rem"}}> <Text1 style={{fontSize:'2rem'}}>Contact US</Text1> </NavLink>
    </ListItem>

 
 
<ListItem>
  {user?<Button onClick={logout} style={{fontSize:'auto',display:'flex',justifyContent:'right',marginTop:'1rem'}} variant='outlined'>{user}</Button>: <NavLink to={"/login"}><Button style={{fontSize:'1.5rem',marginTop:'2rem'}} variant='outlined' color='primary' >Sign In</Button> </NavLink>}
</ListItem>
   
   

           
        </List>
    </Box>

)

  return (
    <Box display={'flex'} className="bg-dark text-align-center">
     <Box style={{display:'flex',justifyContent:"start",marginLeft:'1rem'}}>
     <img src='https://th.bing.com/th/id/OIP.rEUG1dsUP3D6aYy1QsdDbQHaHi?pid=ImgDet&rs=1' alt='auto'  style={{width:'3rem',height:'3rem'}} className='mx-4' />

    <Typography style={{color:'white',fontWeight:'700',marginTop:'1rem'}}  >S-Crypto</Typography>
    
    <MenuButton  aria-label='sahil' onClick={()=>{setOpen(true)}}>
   
    <MenuIcon variant='contained' color='error' style={{fontSize:'2rem'}} />


    </MenuButton>
    <StyledDrawer    aria-label='sahil' open={open} onClose={()=>{setOpen(false)}}>
                        {list()}
           </StyledDrawer>
    </Box>
    <Navbar>
   
  <GridS  className='nav' >
   
  
   <NavLink style={{textDecoration:'none'}} to={'/'}> <Text1>Home</Text1> </NavLink>
   <NavLink  to={"/table"}  style={{textDecoration:'none'}}>  <Text1>MARKET</Text1></NavLink>

   <NavLink to={'/portfolio'}  style={{textDecoration:'none'}}> <Text1>PORTFOLIO</Text1> </NavLink>



   <NavLink  to={'/'}  style={{textDecoration:'none'}}> <Text1>ABOUT US</Text1> </NavLink>



  </GridS>
  <Box>
 {user?<Button onClick={logout} style={{fontSize:'auto',display:'flex',justifyContent:'right'}} variant='outlined'>{user}</Button>: <NavLink to={"/login"}><Button variant='outlined' color='primary' >Sign In</Button> </NavLink>}

  </Box>
  
  </Navbar>
  </Box>
  )
}
