/* eslint-disable import/prefer-default-export */

export const checkResult = (from, to, via, exchangeRate) => {
  const onlyUnique = (value, index, self) => self.indexOf(value) === index;
  // eslint-disable-next-line no-shadow
  const calcRate = (from, to) => (exchangeRate[`${from}${to}`] ? exchangeRate[`${from}${to}`] : (1 / exchangeRate[`${to}${from}`]));

  const arrFrom = [];
  const arrTo = [];
  const newArry = [];
  Object.entries(via).forEach(
    ([key, value]) => {
      const findFrom = value.find((i) => i === from);
      const findTo = value.find((i) => i === to);

      if (findFrom) {
        arrFrom.push(from, key);
      } else if (from === 'EUR') {
        arrFrom.push(from, 'USD');
      }

      if (findTo) {
        arrTo.push(key, to);
      } else if (to === 'EUR') {
        arrFrom.push(to, 'USD');
      }
    },
  );

  const exchangePath = arrFrom.concat(arrTo).filter(onlyUnique);

  exchangePath.forEach((_, i) => {
    if (i < exchangePath.length - 1) {
      newArry.push(calcRate(exchangePath[i], exchangePath[i + 1]));
    }
  });

  return newArry.reduce((acc, current) => acc * current);
};
