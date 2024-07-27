import "@/styles/globals.css";
import { Raleway } from "next/font/google";
const raleway = Raleway({ subsets: ["latin", "cyrillic"] });
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <main className={raleway.className}>
      <Head>
        <title>Indra Cyber Institute</title>
      </Head>
      <Component {...pageProps} />
    </main>
  );
}
