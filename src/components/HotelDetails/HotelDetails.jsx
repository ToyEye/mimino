import { useEffect, useState } from "react";
import Image from "next/image";

import Container from "../reusable/Container";
import Heading from "../reusable/Heading";
import { TextDescription } from "../reusable/TextDescription";
import BtnList from "../reusable/BtnList";
import useMediaRules from "helpers/useMediaRules";

import { hotelDetailsData } from "./hotelDetailsData";

const initialState = {
  bathImg: "bathSq",
  washbasin: "washbasinSq",
};

const HotelDetails = () => {
  const [images, setImages] = useState(initialState);

  const media = useMediaRules();

  useEffect(() => {
    if (media !== "mobile") {
      setImages({ bathImg: "bathFull", washbasin: "washbasinFull" });
    } else {
      setImages({
        bathImg: "bathSq",
        washbasin: "washbasinSq",
      });
    }
  }, [media]);

  return (
    <section className="bg-[#121212] py-8 lg:pt-11 lg:pb-[60px]  ">
      <Container>
        <div className="lg:flex lg:items-start ">
          <div className="text-[#F6F6F6] uppercase font-medium -tracking-[0.02em] flex flex-col gap-[32px] md:flex-row md:items-center">
            <Heading
              text="Hotel"
              className=" text-[40px] leading-10  md:text-[68px] md:leading-[68px] "
            />
            <TextDescription
              className="text-sm leading-[18px] md:w-[362px]"
              text="Book your stay with us now and experience the epitome of comfort and luxury at our hotel. We guarantee you'll be thrilled with your decision."
            />
          </div>

          <BtnList
            data={hotelDetailsData}
            className="hidden justify-center   lg:flex ml-auto  "
          />
        </div>

        <div className="flex flex-col-reverse  gap-7 mt-8 md:flex-row md:gap-4 justify-center lg:gap-8 ">
          <div className="flex gap-[19px]  md:flex-col lg:gap-7">
            <Image
              src="/hotelDetails/soupSq.jpg"
              width={320}
              height={260}
              alt="Soup"
              className="w-[158px] h-[128px] md:w-[176px] md:h-[143px] lg:w-[320px] lg:h-[260px]"
            />
            <Image
              src={`/hotelDetails/${images.bathImg}.jpg`}
              width={320}
              height={260}
              alt="Bath"
              className="w-[158px] h-[128px] md:w-[176px] md:h-[258px] lg:w-[320px] lg:h-[260px]"
            />
          </div>

          <Image
            src="/hotelDetails/hotelDetailsMain.jpg"
            width={420}
            height={548}
            alt="Room"
            className="md:w-[320px] md:h-[417px] lg:w-[420px] lg:h-[548px]"
          />

          <div className="hidden md:flex md:flex-col md:gap-[19px] lg:gap-7 ">
            <Image
              src={`/hotelDetails/${images.washbasin}.jpg`}
              width={320}
              height={260}
              alt="Soup"
              className="w-[158px] h-[128px] md:w-[176px] md:h-[258px] lg:w-[320px] lg:h-[260px]"
            />
            <Image
              src="/hotelDetails/mirror.jpg"
              width={320}
              height={260}
              alt="Bath"
              className=" md:w-[176px] md:h-[143px] lg:w-[320px] lg:h-[260px]"
            />
          </div>
        </div>
        <BtnList
          data={hotelDetailsData}
          className="justify-center mt-20 md:mt-10 lg:hidden "
        />
      </Container>
    </section>
  );
};

export default HotelDetails;
