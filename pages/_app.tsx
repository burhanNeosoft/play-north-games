import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Error from "next/error";
import MainLayout from "../src/components/Layout/MainLayout";

function MyApp({ Component, pageProps }: AppProps) {
  if (pageProps.error) {
    return <Error statusCode={pageProps.error.statusCode} title={pageProps.error.message} />;
  }
  return (    
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  )
}

export default MyApp
