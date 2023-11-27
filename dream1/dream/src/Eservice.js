import React from 'react'
import { Box } from '@mui/material'
import {Link} from 'react-router-dom'
import './Eservice.css'

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
        <Box sx={{width:'30%',height:'80px',marginLeft:'5%',marginTop:'20px',borderRadius:3,textAlign:'center',color:'white',backgroundColor:'black',boxShadow:9}}><Link to='/Both6' className='Link'>USER DASHBOARD</Link></Box>
        <Box sx={{width:'30%',height:'80px',marginLeft:'30%',marginTop:'20px',borderRadius:3,textAlign:'center',color:'white',backgroundColor:'black',boxShadow:9}}><Link to='/Both5' className='Link'>PROVIDER DASHBOARD</Link></Box>
    </Box>
    </>
    
  )
}

export default Eservice;