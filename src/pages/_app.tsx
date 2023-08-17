import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import AuthProvider from '/src/shared/contexts/auth.provider'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import {theme} from '@chakra-ui/theme'
import { extendTheme } from "@chakra-ui/react";
const customTheme = extendTheme({
  theme,
});

export default function App({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    uri: 'http://localhost:8080/graphql',
    cache: new InMemoryCache(),
  });
  
  return (
    <ChakraProvider> 
      <ApolloProvider client={client}>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </ApolloProvider>
    </ChakraProvider>
  )
}
