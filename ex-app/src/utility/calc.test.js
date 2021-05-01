import { checkResult } from './calc';

const via = {
  USD: ['AUD', 'CAD', 'CNY', 'GBP', 'NZD', 'JPY'],
  EUR: ['CZK', 'DKK', 'NOK'],
};

const exchangeRate = {
  AUDUSD: 0.8371,
  CADUSD: 0.8711,
  USDCNY: 6.1715,
  EURUSD: 1.2315,
  GBPUSD: 1.5683,
  NZDUSD: 0.7750,
  USDJPY: 119.95,
  EURCZK: 27.6028,
  EURDKK: 7.4405,
  EURNOK: 8.6651,
};

describe('utlity calc', () => {
  it('should render correct numbers', () => {
    expect(checkResult('AUD', 'USD', via, exchangeRate, 1)).toBe(0.84);
    expect(checkResult('AUD', 'AUD', via, exchangeRate, 1)).toBe(1);
    expect(checkResult('NOK', 'AUD', via, exchangeRate, 1)).toBe(0.17);
    expect(checkResult('AUD', 'DKK', via, exchangeRate, 1)).toBe(5.06);
  });
});
