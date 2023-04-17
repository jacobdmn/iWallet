import Layout from "@/layout";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { Comfortaa } from "next/font/google";

const inter = Comfortaa({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
