import * as React from 'react';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import'./MainContent.css';


export default function MainContent() {
  return (
    <>
    <Box sx={{height:'482px'}} className='no1' >
        <Link to="/Both2" className='no  '>BUYING</Link>
        <Link to="/Both3"className='no  '>SELLING</Link>
        <Link  to="/Both4" className='no  '>ELECTRONIC SERVICE</Link>
    </Box>
  </>
  );
}
