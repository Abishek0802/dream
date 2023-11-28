  import { Box, Button, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import './Login.css';
import BarLoader from 'react-spinners/BarLoader';


function Login() {
  return (
    <Box marginTop='0px' spacing={0}>
  <Box align='center' marginTop='100px'  item xs={8}>
    <Box  borderRadius='10px'sx={{boxShadow:9,backgroundColor:' rgb(147, 208, 208)',height:'500px',width:'390px',marginTop:'0px'}}>
        <Typography variant='h4'  color='white' sx={{padding:'10px',boxShadow:9, fontWeight:'bold',backgroundColor:'black',borderRadius:'10px',height:'40px'}}>
             WELCOME BACK <BarLoader
             color="rgb(147, 208, 208)"
              width={370}
             /> 
             </Typography>
             <Typography variant='h5' marginTop='10px'> 
                LOGIN
            </Typography>
            <Typography marginTop='60px'><TextField halfWidth label="E-MAIL" id="fullWidth" />
            </Typography>
             <Typography marginTop='30px'><TextField halfWidth label="PASSWORD" id="fullWidth" />
            </Typography>
            <Typography sx={{marginRight:'10px',paddingTop:'10px'}} >new to us <Link>Sign up</Link></Typography>
            <Typography>or</Typography>
            <Typography>  <Link> Forgot Password ? </Link></Typography>
            <Button  sx={{marginTop:'50px',color:'white',backgroundColor:'black' ,"&:hover":{marginTop:'50px',color:'white',backgroundColor:'black'}}} variant="contained" disableElevation>
                LOGIN
            </Button>
             </Box>
        </Box>
  </Box>
  
  );
}

export default Login;    