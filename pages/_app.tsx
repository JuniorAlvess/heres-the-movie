import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import "react-multi-carousel/lib/styles.css";
import Router from "next/router";
import NProgress from "nprogress";
import Header from './components/Header';
import GlobalContext from './contexts';

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalContext>
      <Header />
      <Component {...pageProps} />
      <footer className="footer">
        <p>Developed by <a href='https://junior-alves.vercel.app' rel="noreferrer" target="_blank">Junior Alves</a></p>
      </footer>
    </GlobalContext>
  )
}

export default MyApp
