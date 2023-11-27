import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Error from "next/error";
import { Providers } from '../redux/provider';
import MainLayout from "../src/components/Layout/MainLayout";

function MyApp({ Component, pageProps }: AppProps) {
  if (pageProps.error) {
    return <Error statusCode={pageProps.error.statusCode} title={pageProps.error.message} />;
  }
  return (
    <Providers>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </Providers>
  )
}

export default MyApp
