import React from 'react';
// Components
import ExchangeRates from './components/ExchangeRate';

interface AppProps {
  todo: number;
}

const App = ({ todo }: AppProps) => {
  return (
    <div>
      {todo}
      {ExchangeRates()}
    </div>
  );
};

export default App;
