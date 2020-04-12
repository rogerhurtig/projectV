import React from "react";
import ReactDOM from "react-dom";
// Application
import App from './app';

interface AppProps {
  todo: number
}

const obj: AppProps = {
  todo: 4
};

ReactDOM.render(
  <App {...obj} />,
  document.getElementById("projectV")
);
