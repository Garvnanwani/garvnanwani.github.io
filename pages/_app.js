import MDXComponents from '@/components/MDXComponents'
import { MDXProvider } from '@mdx-js/react'
import splitbee from '@splitbee/web'
import { ThemeProvider } from 'next-themes'
import { useEffect } from 'react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    splitbee.init({
      apiUrl: '/sb-api',
      scriptUrl: '/sb.js'
    })
  }, [])

  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <MDXProvider components={MDXComponents}>
        <Component {...pageProps} />
      </MDXProvider>
    </ThemeProvider>
  )
}

export default MyApp
