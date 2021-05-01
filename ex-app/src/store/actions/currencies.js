import axios from 'axios';
import * as actionTypes from './actionTypes';

export const setCurrencies = (payload) => ({
  type: actionTypes.FETCH_PRODUCTS,
  payload,
});

export const setCurrenciesFail = () => ({
  type: actionTypes.TOKEN_ERROR,
});

export const initProducts = () => (dispatch) => {
  axios.get('/api/v1/resources/products?token')
    .then((response) => {
      dispatch(setCurrencies(response.data));
    })
    .catch((error) => {
      dispatch(setCurrenciesFail({ error }));
    });
};
