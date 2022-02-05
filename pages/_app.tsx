import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  <script src="https://unpkg.com/topojson@3"></script>;
  return <Component {...pageProps} />
}

export default MyApp
