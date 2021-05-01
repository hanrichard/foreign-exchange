import * as actionTypes from '../actions/actionTypes';

const initialState = {
  currencies: {},
};

const currenciesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CURRENCIES_SUCCESS:
      return {
        currencies: action.payload,
      };
    default:
      return state;
  }
};

export default currenciesReducer;
