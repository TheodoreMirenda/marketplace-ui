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

const link = createHttpLink({
  uri: 'https://api.theodoremirenda.com/graphql',
  credentials: 'same-origin'
});

export const client = new ApolloClient({
  cache: new InMemoryCache({
    addTypename: false
  }),
  link: link,
});