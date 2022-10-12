import Head from "next/head";
import { Header } from "../components";
import Card from "../components/card";


export default function Home() {
  return (
    <div>
      <Head>
        <title>Luxury Diamond Jewellery - HaWa & co.</title>
        <meta
          name="description"
          content="Luxury Diamond Jewellery, Accessories and Gifts - HaWa & co."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <h1 className="h-screen flex justify-center items-center font-semibold text-7xl text-brown-dark font-Lora">
        HaWa & co.
        <Card
            image=""
            title="Ring-o"
            price="Rp 200.000"
          /> 
      </h1>
    </div>
  );
}
