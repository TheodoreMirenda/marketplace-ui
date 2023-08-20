import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import AuthProvider from '@src/shared/contexts/auth.provider'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import {theme} from '@src/shared/theme/theme'
import MainHeader from '@src/modules/components/layout/mainHeader'

export default function App({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    uri: 'http://localhost:8080/graphql',
    cache: new InMemoryCache(),
  });
  
  return (
    <ChakraProvider theme={theme}> 
      <ApolloProvider client={client}>
        <AuthProvider>
          <MainHeader />
          <Component {...pageProps} />
        </AuthProvider>
      </ApolloProvider>
    </ChakraProvider>
  )
}
