import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

import useMediaRules from "helpers/useMediaRules";

export const Slider = ({ images, className }) => {
  const media = useMediaRules();

  console.log(media);

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      className="mySwiper"
      loop={true}
      navigation={true}
      modules={[Navigation]}
      breakpoints={{
        320: { slidesPerView: 2, spaceBetween: 20 },
        768: { slidesPerView: 2, spaceBetween: 32 },
        1440: { slidesPerView: 4.85, spaceBetween: 20 },
      }}
    >
      {images.map(({ id, pathToMob, descr }) => {
        console.log(pathToMob);
        return (
          pathToMob && (
            <SwiperSlide key={id} className={className}>
              <Image src={pathToMob} alt={descr} width={266} height={309} />
            </SwiperSlide>
          )
        );
      })}
    </Swiper>
  );
};

export default Slider;
