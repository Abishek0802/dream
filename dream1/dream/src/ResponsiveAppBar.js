import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import './ResponsiveAppBar.css'
import RingLoader from "react-spinners/RingLoader"

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1, }}>
      <AppBar sx={{backgroundColor:'black',height:'80px',border:3,borderRadius:1,borderColor:'blue'}} position="static">
        <Toolbar>
          <Box  sx={{ color:'blue',marginTop:'5px',flexGrow: 1,height:'40px' ,border:2,borderRadius:2,display:'flex',alignItems:'center', backgroundColor: 'rgb(147, 208, 208)',paddingLeft:'20px',textAlign:'end'}}>
          <Typography display='flex' alignItems='center'  variant="h6" component="div">
            Build Dream  <RingLoader
    className='Ring'
  color="blue"
  cssOverride={{}}
  loading
  size={20}
  speedMultiplier={1}
/> </Typography>
            <Typography sx={{width:'50%',marginLeft:'40%'}}><Link to='/NewHome' className='link' color='inherit'>CAREER /</Link>
             <Link  className='link' color='inherit'>ABOUT US /</Link>
             <Link  to='/ContactUs' className='link' color='inherit'>CONTACT US</Link>  
             </Typography>
             </Box>
        
          <Link to='/Login' className='link1' color='white'>LOGIN</Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}