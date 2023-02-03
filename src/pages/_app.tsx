import Layout from '@src/components/Layout'
import GlobalStyle from '@src/styles/global-styles'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle/>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
  
}
