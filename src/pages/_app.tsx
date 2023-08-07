import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import Navigation from '@/modules/navigation/navigation.component'
import AuthProvider from '@/shared/contexts/auth.provider'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'


export default function App({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    uri: 'http://localhost:8080/graphql',
    cache: new InMemoryCache(),
  });
  
  return (
    <ChakraProvider> 
          <ApolloProvider client={client}>
              <AuthProvider>
                <Navigation>
                  <Component {...pageProps} />
                </Navigation>
                </AuthProvider>
            </ApolloProvider>
          </ChakraProvider>
  )
}
