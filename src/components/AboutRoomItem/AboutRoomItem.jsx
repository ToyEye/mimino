import React, { useState, useEffect } from "react";
import Image from "next/image";
import useMediaRules from "helpers/useMediaRules";

const AboutRoomItem = ({ mob, tab, desk, description, index, side }) => {
  const [mobSize, setMobSize] = useState([
    "w-[158px] h-[149px] order-2",
    "w-[335px] h-[468px] order-1",
    "w-[158px] h-[149px] order-3",
  ]);

  const [tabSize, setTabSize] = useState([
    "md:w-[337px] md:h-[175px] md:order-2",
    "md:w-[335px] md:h-[468px] md:order-3",
    " md:w-[223px] md:h-[261px] md:order-1",
  ]);

  const [deskSize, setDeskSize] = useState([
    "lg:w-[368px] lg:h-[395px]",
    "lg:w-[539px] lg:h-[762px]",
    "lg:w-[387px] lg:h-[510px]",
  ]);

  useEffect(() => {
    if (side) {
      setTabSize([
        "md:w-[337px] md:h-[175px] md:order-3",
        "md:w-[335px] md:h-[468px] md:order-1",
        " md:w-[223px] md:h-[261px] md:order-2",
      ]);
    }
  }, [side]);

  const media = useMediaRules();

  if (media === "mobile") {
    return (
      <li className={`relative ${mobSize[index]}`}>
        <Image className={mobSize[index]} fill src={mob} alt={description} />
      </li>
    );
  }

  if (media === "tablet") {
    return (
      <li className={`relative ${tabSize[index]}`}>
        <Image
          width={335}
          height={468}
          className={tabSize[index]}
          src={tab}
          alt={description}
        />
      </li>
    );
  }

  if (media === "desktop") {
    return (
      <li className={`relative ${deskSize[index]}`}>
        <Image fill src={desk} alt={description} />
      </li>
    );
  }
};

export default AboutRoomItem;
