import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {ReactElement, ReactNode, useEffect, useState} from "react";
import {NextPage} from "next";
import {useRouter} from "next/router";
import {log} from "util";

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component : NextPageWithLayout
}
function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [authorized, setAuthorized] = useState<boolean>(true);
  useEffect(() => {
    fetch('/api/hello').then(res => res.json()).then(data => console.log(data))
    // authCheck(router.asPath);
    // const hideContent = () => setAuthorized(false);
    // router.events.on('routeChangeStart', hideContent);
    // // run auth check on route change
    // router.events.on('routeChangeComplete', authCheck)
  }, [])

  const authCheck = (url: string) => {
    const publicPaths = ['/login'];
    const path = url.split('?')[0];
    if (!publicPaths.includes(path)) {
      setAuthorized(false);
      router.push({
        pathname: '/login',
        query: { returnUrl: router.asPath }
      });
    } else {
      setAuthorized(true);
    }
  }

  return (
    authorized && <Component {...pageProps} />
  )
}

export default App
