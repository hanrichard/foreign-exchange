import './App.css';
import React, { useState } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { checkResult } from '../utility/calc';

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

const via = {
  USD: ['AUD', 'CAD', 'CNY', 'GBP', 'NZD', 'JPY'],
  EUR: ['CZK', 'DKK', 'NOK'],
};

const Exchange = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [result, setResult] = useState(0);

  const handleFromChange = (event) => {
    setFrom(event.target.value);
  };
  const handleToChange = (event) => {
    setTo(event.target.value);
  };

  const handleSubmit = () => {
    setResult(checkResult(from, to, via, exchangeRate));
  };

  return (
    <div className="Exchange">
      <InputLabel id="demo-simple-select-label">From</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={from}
        onChange={handleFromChange}>
        <MenuItem value="USD">USD</MenuItem>
        <MenuItem value="AUD">AUD</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>

      <InputLabel id="demo-simple-select-label">To</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={to}
        onChange={handleToChange}>
        <MenuItem value="USD">USD</MenuItem>
        <MenuItem value="AUD">AUD</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>

      <Button onClick={handleSubmit}>Submit</Button>

      <div>
        {from}
        -
        {to}
        =
        {result}
      </div>
    </div>
  );
};

export default Exchange;
