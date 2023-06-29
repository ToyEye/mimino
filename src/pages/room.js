import Head from "next/head";

import AboutServices from "@/components/AboutServices";

import roomSliderImages from "data/roomData/roomSliderImages.json";

const Room = () => {
  return (
    <>
      <Head>
        <title>MIMINO || Restaurant</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className=" bg-[#F6F6F6]">
        <AboutServices title="DOUBLE LUXURY ROOM" images={roomSliderImages} />
      </div>
    </>
  );
};

export default Room;
