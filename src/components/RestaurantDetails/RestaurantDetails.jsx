import React from "react";
import Container from "../reusable/Container";
import Heading from "../reusable/Heading";
import { TextDescription } from "../reusable/TextDescription";

import images from "./images.json";
import Slider from "../reusable/Swiper";

const RestaurantDetails = () => {
  return (
    <section className="pt-11 pb-[113px] ">
      <Container>
        <div className="flex flex-col gap-6 mb-8 md:mb-10 md:flex-row md:gap-8 md:items-center lg:gap-0 lg:mb-[125px] ">
          <Heading
            tag="h2"
            text="restaurant"
            className="uppercase text-[40px] leading-10 -tracking-[0.02em] md:text-[68px] md:leading-[68px] lg:mr-8 "
          />
          <TextDescription
            text="Relax and unwind with our delicious offerings, available any time of day."
            className="font-medium text-sm leading-[18px] -tracking-[0.02em]  w-[221px] "
          />
        </div>
        <Slider images={images} className="h-[309px]" />
      </Container>
    </section>
  );
};

export default RestaurantDetails;
