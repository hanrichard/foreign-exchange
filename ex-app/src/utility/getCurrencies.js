/* eslint-disable import/prefer-default-export */

export const getCurrencies = (via) => {
  const currencies = [];

  Object.entries(via).forEach(
    ([key, value]) => {
      currencies.push(key);
      currencies.push(value);
    },
  );

  return currencies.flat();
};
