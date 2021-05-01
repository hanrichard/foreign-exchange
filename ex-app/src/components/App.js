import './App.css';
import React from 'react';
import Container from '@material-ui/core/Container';
import Exchange from './Exchange';
import Header from './Header';

const App = () => {
  console.log('test');

  return (
    <Container>
      <Header />
      <Exchange />
    </Container>
  );
};

export default App;
