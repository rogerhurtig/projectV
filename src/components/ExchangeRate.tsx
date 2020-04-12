import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

interface Currency {
  currency: string;
  rate: string;
}

interface Rates {
  rates: Currency[];
}

interface ExchangeRatesVars {
  currency: string;
}

const EXCHANGE_RATES = gql`
  query getCurrencyRate($currency: String!) {
    rates(currency: $currency) {
      currency
      rate
    }
  }
`;

const ExchangeRates = () => {
  const displayCurrency = 'SEK';
  const { loading, error, data } = useQuery<Rates, ExchangeRatesVars>(EXCHANGE_RATES, {
    variables: { currency: displayCurrency }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data?.rates?.map(({ currency, rate }) => (
    <div key={currency}>
      <p>
        {currency}: {rate}
      </p>
    </div>
  ));
};

export default ExchangeRates;
