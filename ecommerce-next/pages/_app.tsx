import "@assets/main.css";
import "keen-slider/keen-slider.min.css";
import { UIProvider, useUI } from "@components/ui/context";
import { AppProps } from "next/app";
import { FC } from "react";

const Noop: FC = ({ children }) => <>{children}</>;

function MyApp({
  Component,
  pageProps,
}: AppProps & { Component: { Layout: FC } }) {
  // if Layout is undefined go with Noop
  const Layout = Component.Layout ?? Noop;

  const ui = useUI();
  // console.log(ui);

  return (
    <UIProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UIProvider>
  );
}

export default MyApp;
