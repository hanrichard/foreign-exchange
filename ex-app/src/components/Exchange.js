import './App.css';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { checkResult } from '../utility/calc';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 100px;
`;

const ResultWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ELementWrapper = styled.div`
  margin-right: 50px;
`;

const Exchange = ({ exchangeRate, via, currencies }) => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [result, setResult] = useState();
  const [input, setInput] = useState(1);

  const handleFromChange = (event) => {
    setFrom(event.target.value);
    setResult();
  };

  const handleToChange = (event) => {
    setTo(event.target.value);
    setResult();
  };

  const handleSubmit = () => {
    setResult(checkResult(from, to, via, exchangeRate, input));
  };

  const handleOnInputChange = (event) => {
    setInput(event.target.value);
    setResult();
  };

  return (
    <>
      <Wrapper>
        <ELementWrapper>
          <InputLabel id="demo-simple-select-label">From</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={from}
            onChange={handleFromChange}>
            {currencies.map(((currency) => (
              <MenuItem key={currency} value={currency}>
                {currency}
              </MenuItem>
            )))}
          </Select>
        </ELementWrapper>

        <ELementWrapper>
          <InputLabel id="demo-simple-select-label">To</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={to}
            onChange={handleToChange}>
            {currencies.map(((currency) => (
              <MenuItem key={currency} value={currency}>
                {currency}
              </MenuItem>
            )))}
          </Select>
        </ELementWrapper>

        <ELementWrapper>
          <TextField
            id="standard-password-input"
            label="amount"
            type="number"
            value={input}
            onChange={handleOnInputChange} />
        </ELementWrapper>

        <Button onClick={handleSubmit}>Submit</Button>
      </Wrapper>
      <ResultWrapper>
        {result && `${from} - ${to} = ${result}`}
      </ResultWrapper>
    </>
  );
};

Exchange.defaultProps = {
  exchangeRate: {},
  via: {},
  currencies: [],
};

Exchange.propTypes = {
  exchangeRate: PropTypes.object,
  via: PropTypes.object,
  currencies: PropTypes.array,
};
export default Exchange;
