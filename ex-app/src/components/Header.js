import './App.css';
import React from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 200px;
  margin-bottom: 200px;
`;

const Header = () => (
  <HeaderWrapper>
    <Typography variant="h3" component="h1" gutterBottom>
      FX Calculator
    </Typography>
  </HeaderWrapper>
);

export default Header;
