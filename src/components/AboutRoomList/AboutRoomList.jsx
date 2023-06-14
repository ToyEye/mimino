import React from "react";
import classNames from "classnames";
import AboutRoomItem from "../AboutRoomItem";

const AboutRoomList = ({ images, side }) => {
  const imageSide = classNames(
    { "md:items-start": side },
    { "md:items-end": !side }
  );

  return (
    <ul
      className={`flex flex-wrap gap-[19px] md:gap-8 md:justify-end md:h-[468px] md:flex-col  lg:h-auto lg:flex-row lg:items-center ${imageSide} `}
    >
      {images.map(({ id, mob, tab, desk, description }, index) => {
        return (
          <AboutRoomItem
            key={id}
            mob={mob}
            tab={tab}
            desk={desk}
            description={description}
            index={index}
            side={side}
          />
        );
      })}
    </ul>
  );
};

export default AboutRoomList;
