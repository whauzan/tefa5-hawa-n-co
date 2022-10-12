import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

function Layout({ children }) {
  return (
    <div className="p-3">
      <Head>
        <title>Luxury Diamond Jewellery - HaWa & co.</title>
        <meta
          name="description"
          content="Luxury Diamond Jewellery, Accessories and Gifts - HaWa & co."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Header />
      </header>
      <main className="max-w-7xl m-auto w-full">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
