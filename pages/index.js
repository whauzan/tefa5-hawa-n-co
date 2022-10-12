import Head from "next/head";

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
      <h1 className="h-screen flex justify-center items-center font-semibold text-7xl text-red-400">
        HaWa & co.
      </h1>
    </div>
  );
}
