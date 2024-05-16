import { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import '../styles/globals.css'
import { ProviderLayout } from '@/layouts'
import { ThemeContext } from '@/providers/theme-context'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout =
    Component.getLayout ||
    ((page) => {
      return <ProviderLayout>{page}</ProviderLayout>
    })

  return (
    <>
      <ThemeContext.Provider value={'light'}>{getLayout(<Component {...pageProps} />)}</ThemeContext.Provider>
    </>
  )
}

export default MyApp
