import axios from 'axios';
import * as actionTypes from './actionTypes';

export const setCurrencies = (payload) => ({
  type: actionTypes.FETCH_CURRENCIES_SUCCESS,
  payload,
});

export const setCurrenciesFail = () => ({
  type: actionTypes.FETCH_CURRENCIES_FAILED,
});

export const initCurrencies = () => (dispatch) => {
  axios.get('data.json')
    .then((response) => {
      console.log(response.data.data);
      dispatch(setCurrencies(response.data.data));
    })
    .catch((error) => {
      dispatch(setCurrenciesFail({ error }));
    });
};
