import './App.css';
import React from 'react';
import Container from '@material-ui/core/Container';
import Exchange from './Exchange';
import Header from './Header';
import { getCurrencies } from '../utility/getCurrencies';

const App = () => {
  const exchangeRate = {
    AUDUSD: 0.8371,
    CADUSD: 0.8711,
    USDCNY: 6.1715,
    EURUSD: 1.2315,
    GBPUSD: 1.5683,
    NZDUSD: 0.7750,
    USDJPY: 119.95,
    EURCZK: 27.6028,
    EURDKK: 7.4405,
    EURNOK: 8.6651,
  };

  const exchangeTable = {
    USD: ['AUD', 'CAD', 'CNY', 'GBP', 'NZD', 'JPY'],
    EUR: ['CZK', 'DKK', 'NOK'],
  };

  return (
    <Container>
      <Header />
      <Exchange exchangeRate={exchangeRate} via={exchangeTable} currencies={getCurrencies(exchangeTable)} />
    </Container>
  );
};

export default App;
