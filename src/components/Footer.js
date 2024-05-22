import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ padding: 2, marginTop: 4, backgroundColor: '#f5f5f5' }}>
      <Container>
        <Typography variant="body1" align="center">
          &copy; 2024 Your Shop Sapphire. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
