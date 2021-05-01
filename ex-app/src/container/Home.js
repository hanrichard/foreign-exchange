import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
import Exchange from '../components/Exchange';
import Header from '../components/Header';
import { getCurrencies } from '../utility/getCurrencies';
import * as actions from '../store/actions/index';

const App = ({ onInitCurrencies, currencies }) => {
  const exchangeTable = {
    USD: ['AUD', 'CAD', 'CNY', 'GBP', 'NZD', 'JPY'],
    EUR: ['CZK', 'DKK', 'NOK'],
  };

  useEffect(() => {
    onInitCurrencies();
  }, [onInitCurrencies]);

  return (
    <Container>
      <Header />
      <Exchange exchangeRate={currencies.currencies.exchangeRate} via={currencies.currencies.via} currencies={getCurrencies(exchangeTable)} />
    </Container>
  );
};

const mapStateToProps = (state) => ({
  currencies: state.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  onInitCurrencies: () => dispatch(actions.initCurrencies()),
});

App.propTypes = {
  currencies: PropTypes.object,
  onInitCurrencies: PropTypes.func,
};

App.defaultProps = {
  currencies: {},
  onInitCurrencies: (() => {}),
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
