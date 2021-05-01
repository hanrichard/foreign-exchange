/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line import/no-extraneous-dependencies
import _ from 'lodash';

export const getCurrencies = (via) => {
  const currencies = [];

  Object.entries(via).forEach(
    ([key, value]) => {
      currencies.push(key);
      currencies.push(value);
    },
  );

  // eslint-disable-next-line no-undef
  return _.flatten(currencies);
};
