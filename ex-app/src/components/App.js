import React from 'react';
import { Provider } from 'react-redux';
import {
  createStore, applyMiddleware, compose, combineReducers,
} from 'redux';
import thunk from 'redux-thunk';

import currenciesReducer from '../store/reducers/currenciesReducer';
import Home from '../container/Home';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  currencies: currenciesReducer,
});

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk),
));

const App = () => (
  <Provider store={store}>
    <Home />
  </Provider>
);

export default App;
