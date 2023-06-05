import Head from "next/head";

import Hero from "@/components/Hero/Hero";
import RestaurantHotelComplex from "@/components/RestaurantHotelComplex/RestaurantHotelComplex";

export default function Home() {
  return (
    <>
      <Head>
        <title>MIMINO || Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <RestaurantHotelComplex />
    </>
  );
}
