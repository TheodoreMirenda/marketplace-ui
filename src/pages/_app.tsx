import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import AuthProvider from '@src/shared/contexts/auth.provider'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import {theme} from '@src/shared/theme/theme'
import MainHeader from '@src/modules/components/layout/mainHeader'
import CartProvider from '@src/shared/contexts/cart.provider'
import {client} from '@src/shared/config/apollo.config'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  
  return (
    <>
    <Head>
        <link rel="shortcut icon" href="/img/fishStoreLogo.png" />
        <title>The Fish Store</title>
      </Head>
    <ChakraProvider theme={theme}> 
      <ApolloProvider client={client}>
        <AuthProvider>
          <CartProvider>
            <MainHeader />
            <Component {...pageProps} />
          </CartProvider>
        </AuthProvider>
      </ApolloProvider>
    </ChakraProvider>
    </>

  )
}
