import React from 'react';
import Header from './components/Header';
import ProductDetails from './components/ProductDetails';
import Footer from './components/Footer';
import CssBaseline from '@mui/material/CssBaseline';

const App = () => {
  return (
    <div>
      <CssBaseline />
      <Header />
      <ProductDetails />
      <Footer />
    </div>
  );
};

export default App;
