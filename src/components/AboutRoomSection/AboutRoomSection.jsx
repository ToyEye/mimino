import React from "react";
import classNames from "classnames";

import Heading from "../reusable/Heading";
import { TextDescription } from "../reusable/TextDescription";
import AboutRoomList from "../AboutRoomList/AboutRoomList";
import Container from "../reusable/Container";

const AboutRoomSection = ({ data, textInfo, side }) => {
  const textside = classNames({ "flex-col-reverse": side });
  return (
    <section className="py-16 md:py-20 lg:py-[100px]">
      <Container>
        <AboutRoomList images={data} side={side} />
        <div className={`lg:flex lg:${textside}`}>
          <div className="lg:flex lg:flex-col ">
            <Heading
              text={textInfo.heading}
              tag="h2"
              className="font-bold text-[32px] leading-10 -tracking-[0.02em]  my-8 md:text-[40px] md:leading-[44px] md:my-10   "
            />
            <div className="text-sm leading-[18px] -tracking-[0.02em] md:text-lg md:leading-6 md:flex md:gap-8 ">
              <TextDescription
                text={textInfo.firstDesc}
                className="md:w-[369px] lg:w-[355px]"
              />
              <TextDescription
                text={textInfo.secondDesc}
                className="md:w-[299px]"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutRoomSection;
