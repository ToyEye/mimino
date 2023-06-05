import Image from "next/image";

import Container from "../reusable/Container";
import Heading from "../reusable/Heading";
import { TextDescription } from "../reusable/TextDescription";
import Review from "../Review";

const RestaurantHotelComplex = () => {
  return (
    <section className="pt-16 pb-16 md:pt-20 md:pb-20 lg:pt-[100px] lg:pb-[100px]">
      <Container>
        <div className="flex gap-8 flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="relative ">
            <Image
              src="/restaurantHotelComplex/room.jpg"
              alt="Room"
              width={482}
              height={636}
              sizes="(min-width: 320px) 33vw, (min-width: 768px) 50vw,(min-width: 1440px) 100vw"
              className="mb-5"
              loading="lazy"
              quality={75}
            />
            <Image
              src="/restaurantHotelComplex/bath.jpg"
              alt="Bath"
              width={439}
              height={219}
              sizes="(min-width: 320px) 33vw, (min-width: 768px) 50vw,(min-width: 1440px) 100vw"
              className="w-[282px] md:absolute md:top-1/2 md:translate-x-[70%] md:-translate-y-2/4 md:w-[404px] lg:w-[439px]"
              loading="lazy"
              quality={75}
            />
            <Review
              name="Anna"
              rating="4.5"
              src="maria"
              className="absolute top-[70%] right-0 md:top-[30%] md:right-[15%]  lg:-right-[20%] "
            />
          </div>
          <div className="md:w-[472px]">
            <Heading
              tag="h2"
              text="restaurant-hotel complex"
              className="text-xs leading-[14px] uppercase text-[#484848] tracking-[0.18em] mb-[18px]  "
            />
            <TextDescription
              className="text-sm leading-[18px] -tracking-[0.02em] font-medium mb-[14px] md:text-lg md:leading-6"
              text="Indulge in a taste of luxury with every bite at Hotel Mimino. From the freshest seafood to the most succulent steaks, every dish is crafted with care to ensure that you enjoy a truly memorable dining experience."
            />
            <TextDescription
              className="text-sm leading-[18px] -tracking-[0.02em] font-medium md:text-lg md:leading-6"
              text="Treat yourself to a taste of the good life and come dine with us today!"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default RestaurantHotelComplex;
