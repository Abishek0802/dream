import React, { useState } from 'react';
import {  Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import './Login.css';

const Login= () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your sign-up logic here, such as sending data to the server

    // For this example, let's just log the form data to the console
    console.log('Form Data:', formData);
  };

  return (
    <>
    <Box sx={{display:'flex'}}>
    <Box className='bg1'sx={{width:'500px',height:'450px',marginTop:'120px',marginLeft:'90px'}}> 
     </Box>
     <Box className='outer' sx={{transition:'transform 200ms',transitionTimingFunction:'cubic-bezier(.25,-3,5,4)', boxShadow:9,borderRadius:2,backgroundColor:'rgb(147, 208, 208)',textAlign:'center',height:'350px',width:'25%',marginLeft:'15%',marginTop:'10%',padding:'10px',"&:hover":{transform:'scale(1.1)'}}}>
      <Typography variant='h4' sx={{backgroundColor:'black',color:'white',borderRadius:2}}>WELCOME BACK</Typography>
      <form class='form'onSubmit={handleSubmit}>
      
          <TextField
           sx={{margin:'5px'}}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            id="standard-basic" label="E-mail" variant="standard" 
          />
        <br />
          <TextField
           sx={{margin:'5px'}}
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            id="standard-basic" label="Password" variant="standard" 
          />
        <br />
         
        <Button sx={{margin:'10px',backgroundColor:'black',color:'white',"&:hover":{backgroundColor:'black',scale:'1.1'}}} variant="outlined" type='submit'>LOGIN</Button>
      </form>
      <Typography>Don't have an account -<Link to='/Signup' className='link'>Sign up</Link></Typography>
    </Box>
    
    </Box>
    </>
   
  );
};

export default Login;









//   import { Box, Button, Typography } from '@mui/material';
// import TextField from '@mui/material/TextField';
// import { Link } from 'react-router-dom';
// import './Login.css';
// import BarLoader from 'react-spinners/BarLoader';





// function Login() {
//   return (
  
//     <Box marginTop='0px' spacing={0}>
//   <Box align='center' marginTop='100px'  item xs={8}>
//     <Box  borderRadius='10px'sx={{boxShadow:9,backgroundColor:' rgb(147, 208, 208)',height:'500px',width:'390px',marginTop:'0px'}}>
//         <Typography variant='h4'  color='white' sx={{padding:'10px',boxShadow:9, fontWeight:'bold',backgroundColor:'black',borderRadius:'10px',height:'40px'}}>
//              WELCOME BACK <BarLoader
//              color="rgb(147, 208, 208)"
//               width={370}
//              /> 
//              </Typography>
//              <Typography variant='h5' marginTop='10px'> 
//                 LOGIN
//             </Typography>
//             <Typography marginTop='60px'><TextField halfWidth label="E-MAIL" id="fullWidth" />
//             </Typography>
//              <Typography marginTop='30px'><TextField halfWidth label="PASSWORD" id="fullWidth" />
//             </Typography>
//             <Typography sx={{marginRight:'10px',paddingTop:'10px'}} >new to us <Link>Sign up</Link></Typography>
//             <Typography>or</Typography>
//             <Typography>  <Link> Forgot Password ? </Link></Typography>
//             <Button  sx={{marginTop:'50px',color:'white',backgroundColor:'black' ,"&:hover":{marginTop:'50px',color:'white',backgroundColor:'black'}}} variant="contained" disableElevation>
//                 LOGIN
//             </Button>
//              </Box>
//         </Box>
//   </Box>
  
//   );
// }

// export default Login;    