import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';
// Components
import App from './app';

// https://www.apollographql.com/docs/react/migrating/boost-migration/
const client = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.forEach(({ message, locations, path }) =>
          console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
        );
      if (networkError) console.log(`[Network error]: ${networkError}`);
    }),
    new HttpLink({
      uri: 'https://48p1r2roz4.sse.codesandbox.io',
      credentials: 'same-origin'
    })
  ]),
  cache: new InMemoryCache()
});

interface AppProps {
  todo: number;
}

const obj: AppProps = {
  todo: 4
};

ReactDOM.render(
  <ApolloProvider client={client}>
    <App {...obj} />
  </ApolloProvider>,
  document.getElementById('projectV')
);
