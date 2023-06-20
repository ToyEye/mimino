import React from "react";
import classNames from "classnames";

import Heading from "../reusable/Heading";
import { TextDescription } from "../reusable/TextDescription";
import AboutRoomList from "../AboutRoomList/AboutRoomList";
import Container from "../reusable/Container";
import BtnList from "../reusable/BtnList";

const AboutRoomSection = ({ data, textInfo, side }) => {
  const textside = classNames({ "flex-row-reverse": side });
  return (
    <section className="pt-16 md:pt-20 lg:pt-[100px]">
      <Container>
        <AboutRoomList images={data} side={side} />
        <div
          className={`lg:flex lg:${textside} lg:justify-between mt-8 md:mt-10`}
        >
          <div className="lg:flex lg:flex-col ">
            <Heading
              text={textInfo.heading}
              tag="h2"
              className="font-bold text-[32px] leading-10 -tracking-[0.02em]  mb-8 md:text-[40px] md:leading-[44px] md:mb-10   "
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
          <BtnList
            textModal="More details"
            textLink="View prices"
            theme="dark"
            path="/room"
            // openModal
          />
        </div>
      </Container>
    </section>
  );
};

export default AboutRoomSection;
