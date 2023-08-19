import { ColorModeScript } from '@chakra-ui/react'
import { Html, Head, Main, NextScript } from 'next/document'
// import theme from '../shared/theme/theme'
import MainHeader from '../modules/components/mainHeader'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* <MainHeader /> */}
        <link rel="shortcut icon" href="/img/fishStoreLogo.png" />
        <title>The Fish Store</title>
      </Head>
      <body>
        <ColorModeScript/> {/* initialColorMode={theme.config.initialColorMode}/> */}
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
