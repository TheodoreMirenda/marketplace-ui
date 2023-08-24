import { ApolloClient, ApolloLink, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// import { ConfigService, StorageService } from '/src/shared/config/config.service';

// const httpLink = createHttpLink({ uri: ConfigService.apiUrl + '/graphql' });

// const withToken = setContext(async () => {
//   const token = await StorageService.getIdToken();
  
//   return { token };
// });

const authMiddleware = new ApolloLink((operation, forward) => {
  const { token } = operation.getContext();

  operation.setContext(() => ({
    headers: {
      Authorization: token ? `Bearer ${token}` : ''
    }
  }));

  return forward(operation);
});

// const link = ApolloLink.from([withToken, authMiddleware.concat(httpLink)]);

// export const client = new ApolloClient({
//   link,
//   cache: new InMemoryCache({
//     addTypename: false
//   })
// });
// import { HttpLink, from } from "@apollo/client";
// import { onError } from "@apollo/client/link/error";

// const errorLink = onError(({ graphQLErrors, networkError }) => {
//   if (graphQLErrors)
//     graphQLErrors.forEach(({ message, locations, path }) =>
//       console.log(
//         `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
//       )
//     );
//   if (networkError) console.log(`[Network error]: ${networkError}`);
// });

// const httpLink = new HttpLink({ uri: 'http://localhost:3000/graphql' })

export const client = new ApolloClient({
  uri: 'http://localhost:8080/graphql',
  cache: new InMemoryCache({
    addTypename: false
  }),
  // link: from([errorLink, authMiddleware])
});