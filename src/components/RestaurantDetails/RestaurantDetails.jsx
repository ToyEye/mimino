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
        <Heading tag="h2" text="restaurant" />
        <TextDescription text="Relax and unwind with our delicious offerings, available any time of day." />
        <Slider images={images} className="h-[309px]" />
      </Container>
    </section>
  );
};

export default RestaurantDetails;
