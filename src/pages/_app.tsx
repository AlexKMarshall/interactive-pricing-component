import 'src/styles/reset.css'
import 'src/styles/global.css'

import type { AppProps } from 'next/app'
import { SSRProvider } from '@react-aria/ssr'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SSRProvider>
      <Component {...pageProps} />
    </SSRProvider>
  )
}
export default MyApp
