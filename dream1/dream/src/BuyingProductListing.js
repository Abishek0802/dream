import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ProductListing() {
  return (
    <Box sx={{ flexGrow: 1,padding:'10px',marginTop:'60px' }}>
        <Typography variant='h5' sx={{  backgroundColor:'black',color:'white',textAlign:'center',width:'40%',height:'60px',borderRadius:2,boxShadow:9,border:3,borderColor:'blue',marginBottom:'20px'}}>LISTING OF PRODUCTS</Typography>
      <Grid container spacing={2}>
        <Grid  item xs={6}>
          <Item  sx={{height:'100px',width:'90%',backgroundColor:'rgb(147, 208, 208)',boxShadow:10,borderRadius:2,}}>Product 1</Item>
        </Grid>
        <Grid item xs={6}>
          <Item sx={{height:'100px',width:'95%',backgroundColor:'rgb(147, 208, 208)',boxShadow:10,borderRadius:2,}}>Product 2</Item>
        </Grid>
        <Grid item xs={6}>
          <Item sx={{height:'100px',width:'90%',backgroundColor:'rgb(147, 208, 208)',boxShadow:10,borderRadius:2,}}>Product 3</Item>
        </Grid>
        <Grid item xs={6}>
          <Item  sx={{height:'100px',width:'95%',backgroundColor:'rgb(147, 208, 208)',boxShadow:10,borderRadius:2,}}>Product 4</Item>
        </Grid>
        <Grid item xs={6}>
          <Item sx={{height:'100px',width:'90%',backgroundColor:'rgb(147, 208, 208)',boxShadow:10,borderRadius:2,}}>Product 5</Item>
        </Grid>
        <Grid item xs={6}>
          <Item  sx={{height:'100px',width:'95%',backgroundColor:'rgb(147, 208, 208)',boxShadow:10,borderRadius:2,}}>Product 6</Item>
        </Grid>
      </Grid>
    </Box>
  );
}