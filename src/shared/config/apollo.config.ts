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

export const client = new ApolloClient({
  uri: 'http://localhost:8080/graphql',
  cache: new InMemoryCache({
    addTypename: false
  })
});