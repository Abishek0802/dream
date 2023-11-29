import React from 'react';
import { Link } from 'react-router-dom';
import './Selling.css'
import Grid from '@mui/material/Grid';  
import { Box, Button, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const Selling = () => {
  return (
    // This is NavBar
    <>
    <Box sx={{border:3,height:'20px',textAlign:'end',padding:'20px',color:'blue',backgroundColor:'black'}} >
            <Link className='userlogin'to='/'>BACK TO HOME</Link>
          <Link className='userlogin'to='./Login'>USER LOGIN</Link>
    </Box>
    {/* // This is main content */}
    <Grid  data-aos="flip-left" spacing={2}>
    <Grid align='center' marginTop='7%'  item xs={8}>
      <Box  borderRadius='10px'sx={{transition:'transform 200ms',transitionTimingFunction:'cubic-bezier(.25,-3,5,4)',boxShadow:9,backgroundColor:' rgb(147, 208, 208)',height:'500px',width:'390px',"&:hover":{transform:'scale(1.1)'}}}>
               <Button sx={{width:'390px',height:'60px',backgroundColor:'black',"&:hover":{width:'390px',height:'60px', backgroundColor:'blue',color:'black'}}} component="label" variant="contained" startIcon={<CloudUploadIcon />}>
               PRODUCT IMAGE
                 <VisuallyHiddenInput type="file" />
               </Button>
              <Typography marginTop='40px'><TextField halfWidth label="TITLE" id="fullWidth" />
              </Typography>
               <Typography marginTop='30px'><TextField halfWidth label="DISCRIPTION" id="fullWidth" />
              </Typography>
               <Typography marginTop='30px'><TextField halfWidth label="CONTACT" id="fullWidth" />
              </Typography>
               <Typography marginTop='30px'><TextField halfWidth label="PRICE" id="fullWidth" />
              </Typography>
              <Button  sx={{marginTop:'30px',color:'white',backgroundColor:'black' ,"&:hover":{marginTop:'30px',color:'white',backgroundColor:'black'}}} variant="contained" disableElevation>
                   POST
              </Button>
              
               </Box>
    </Grid>
  </Grid>
  </>
  )
}

export default Selling