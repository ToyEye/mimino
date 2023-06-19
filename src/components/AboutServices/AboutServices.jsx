import React, { useState, useEffect } from "react";

import Container from "../reusable/Container";
import Heading from "../reusable/Heading";
import { TextDescription } from "../reusable/TextDescription";
import Slider from "@/components/reusable/Swiper";
import useMediaRules from "helpers/useMediaRules";

const AboutServices = ({ images }) => {
  const [sizes, setSizes] = useState({
    width: 250,
    height: 429,
  });
  const media = useMediaRules();

  const [slidesPerView, setSlidesPerView] = useState({
    mob: 1.5,
    tab: 1.5,
    desk: 1.5,
  });

  useEffect(() => {
    if (media === "mobile") {
      setSizes({ width: 250, height: 429 });
    }
    if (media === "tablet") {
      setSizes({ width: 436, height: 548 });
    }
    if (media === "desktop") {
      setSizes({ width: 436, height: 580 });
    }
  }, [media]);

  return (
    <section>
      <Container>
        <div className="flex flex-col lg:flex-row">
          <div className="w-1/2">
            <Heading
              tag="h1"
              text="hotel"
              className="text-[40px] leading-10 md:text-[80px] md:leading-[80px]  lg:text-[90px] lg:leading-[90px] uppercase -tracking-[0.02em]"
            />
            <TextDescription
              text="Whether you're in the mood for a hearty breakfast, a light lunch, or a romantic dinner, our menu has something for everyone."
              className="text-sm leading-[18px] tracking-wider  w-[338px] "
            />
          </div>
          <Slider
            images={images}
            slidesPerView={slidesPerView}
            sizes={sizes}
            className="lg:w-1/2"
          />
        </div>
      </Container>
    </section>
  );
};

export default AboutServices;
