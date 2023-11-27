import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import'./MainContent.css';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

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
