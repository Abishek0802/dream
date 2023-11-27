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

  
function ProductService() {
  return (
 <>
<Grid  data-aos="flip-left" spacing={2}>
  <Grid align='center' marginTop='112px'  item xs={8}>
    <Box  borderRadius='10px'sx={{boxShadow:9,backgroundColor:' rgb(147, 208, 208)',height:'500px',width:'390px'}}>
        <Typography variant='h5'  color='white' sx={{padding:'10px',boxShadow:9, fontWeight:'bold',backgroundColor:'black',borderRadius:'10px',height:'40px'}}>
             PRODUCT/SERIVICE FOR USER
             </Typography>
             <Button sx={{marginTop:'20px', backgroundColor:'black',"&:hover":{marginTop:'20px', backgroundColor:'white',color:'black'}}} component="label" variant="contained" startIcon={<CloudUploadIcon />}>
             ADD IMAGE
               <VisuallyHiddenInput type="file" />
             </Button>
            <Typography marginTop='40px'><TextField halfWidth label="TITLE" id="fullWidth" />
            </Typography>
             <Typography marginTop='30px'><TextField halfWidth label="SOURCE" id="fullWidth" />
            </Typography>
             <Typography marginTop='30px'><TextField halfWidth label="SOURCE DETAILS" id="fullWidth" />
            </Typography>
            <Button  sx={{marginTop:'40px',color:'white',backgroundColor:'black' ,"&:hover":{marginTop:'40px',color:'white',backgroundColor:'black'}}} variant="contained" disableElevation>
                CONTACT SELLER
            </Button>
            
             </Box>
  </Grid>
</Grid>
</>
  );
}

export default ProductService;    