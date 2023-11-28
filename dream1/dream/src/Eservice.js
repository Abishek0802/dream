import React from 'react'
import { Box } from '@mui/material'
import {Link} from 'react-router-dom'
import './Eservice.css'
import BarLoader from "react-spinners/BarLoader";


const Eservice = () => {
  return (
    <>
    <Box sx={{border:3,height:'20px',textAlign:'end',padding:'20px',color:'blue',backgroundColor:'black'}} >
        <Box><Link className='userlogin'to='./Login'>USER SIGNUP</Link>
    <Link className='userlogin'to='./Login'>USER LOGIN</Link>
    <Link className='userlogin'to='./Login'>PROVIDER SIGNUP</Link>
    <Link className='userlogin'to='./Login'>PROVIDER LOGIN</Link></Box>
    </Box>
    <Box sx={{height:'327px',marginTop:'200px',padding:'10px',display:'flex'}}>
        <Box sx={{width:'30%',height:'80px',marginLeft:'5%',marginTop:'20px',borderRadius:3,textAlign:'center',color:'white',backgroundColor:'black',boxShadow:9}}><Link to='/Page6' className='Link'>USER DASHBOARD</Link><BarLoader
  className='Bar'
  color="#36d7b7"
  height={4}
  width={135}
/></Box>
        <Box sx={{width:'30%',height:'80px',marginLeft:'30%',marginTop:'20px',borderRadius:3,textAlign:'center',color:'white',backgroundColor:'black',boxShadow:9}}><Link to='/Page5' className='Link'>PROVIDER DASHBOARD</Link><BarLoader
  className='Bar1'
  color="#36d7b7"
  height={4}
  width={160}
  
/></Box>
    </Box>
    </>
    
  )
}

export default Eservice;