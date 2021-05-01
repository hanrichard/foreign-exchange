import { getCurrencies } from './getCurrencies';

const exchangeTable = {
  USD: ['AUD', 'CAD', 'CNY', 'GBP', 'NZD', 'JPY'],
  EUR: ['CZK', 'DKK', 'NOK'],
};

describe('utlity getCurrencies', () => {
  it('should render correct numbers', () => {
    expect(getCurrencies(exchangeTable).length).toBe(11);
  });
});
