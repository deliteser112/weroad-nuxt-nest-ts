// plugins/apollo-client.ts
import { defineNuxtPlugin } from '#app';
import { ApolloClient, InMemoryCache, HttpLink, from } from '@apollo/client/core';

export default defineNuxtPlugin(nuxtApp => {
  const httpLink = new HttpLink({
    uri: 'http://localhost:4000/graphql',
  });

  const cache = new InMemoryCache();

  const apolloClient = new ApolloClient({
    link: from([httpLink]),
    cache,
  });

  // Provide Apollo Client to the entire app
  nuxtApp.provide('apollo', apolloClient);
});
