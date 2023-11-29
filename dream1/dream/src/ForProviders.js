import Grid from '@mui/material/Grid';  
import { Box, Button, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import './ForProviders.css';

function Forproviders() {
  return (
 <>
<Grid  data-aos="flip-left" spacing={2}>
  <Grid align='center' marginTop='152px'  item xs={8}>
    <Box  borderRadius='10px'sx={{transition:'transform 200ms',transitionTimingFunction:'cubic-bezier(.25,-3,5,4)',boxShadow:9,backgroundColor:' rgb(147, 208, 208)',height:'460px',width:'390px',"&:hover":{transform:'scale(1.1)'}}}>
        <Typography variant='h4'  color='white' sx={{padding:'10px',boxShadow:9, fontWeight:'bold',backgroundColor:'black',borderRadius:'10px',height:'40px'}}>
             FOR PROVIDERS
             </Typography>
             <Typography variant='h5' marginTop='10px'> 
                Listing the Servics
            </Typography>
            <Typography marginTop='70px'><TextField halfWidth label="DETAILS" id="fullWidth" />
            </Typography>
             <Typography marginTop='30px'><TextField halfWidth label="PRICE" id="fullWidth" />
            </Typography>
            <Button  sx={{marginTop:'50px',color:'white',backgroundColor:'black' ,"&:hover":{marginTop:'50px',color:'white',backgroundColor:'black'}}} variant="contained" disableElevation>
                CONTACT SELLER
            </Button>
            
             </Box>
  </Grid>
</Grid>
</>
  );
}

export default Forproviders;    