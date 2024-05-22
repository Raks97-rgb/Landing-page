import React from 'react';
import { AppBar, Typography, Grid, Button } from '@mui/material';
import { Box } from '@mui/system';

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#000000',p:1 }}>
      <Grid container display={'flex'} flexDirection={'row'} spacing={2} justifyContent={'center'} alignItems={'center'} columnGap={2}>
        <Grid item display={'flex'} flexDirection={'column'} justifyItems={'flex-start'}>
        <Typography fontSize="18px" textAlign={'center'}>Special offer 30% OFF🔥</Typography>
        <Typography fontSize='18px'>Your Cupon: #SALECOUPON</Typography>
      </Grid>
      <Grid item display={'flex'} flexDirection={'row'} columnGap={1}>
        <Grid item display={'flex'} flexDirection={'column'}>
          <Box sx={{backgroundColor:'#ffca28',color:'black',textAlign:'center',borderRadius:'3px'}}>00</Box>
          <Typography>Days</Typography>
        </Grid>
        <Grid item display={'flex'} flexDirection={'column'}>
          <Box sx={{backgroundColor:'#ffca28',color:'black',textAlign:'center',borderRadius:'3px'}}>00</Box>
          <Typography>Hrs</Typography>
        </Grid>
        <Grid item display={'flex'} flexDirection={'column'}>
          <Box sx={{backgroundColor:'#ffca28',color:'black',textAlign:'center',borderRadius:'3px'}}>13</Box>
          <Typography>Mins</Typography>
        </Grid>
        <Grid item display={'flex'} flexDirection={'column'}>
          <Box sx={{backgroundColor:'#ffca28',color:'black',textAlign:'center',borderRadius:'3px'}}>47</Box>
          <Typography>Secs</Typography>
        </Grid>
      </Grid>
      <Grid item>
        <Button variant='contained' sx={{backgroundColor:'#f57c00'}}>Shop now</Button>
      </Grid>
      </Grid>
    </AppBar>
  );
};

export default Header;
