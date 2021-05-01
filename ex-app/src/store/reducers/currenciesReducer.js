import * as actionTypes from '../actions/actionTypes';

const initialState = {
  currencies: [],
};

const currenciesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CURRENCIES_SUCCESS:
      return {
        currencies: true,
      };
    default:
      return state;
  }
};

export default currenciesReducer;
