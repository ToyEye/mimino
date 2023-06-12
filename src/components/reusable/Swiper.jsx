import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

import useMediaRules from "helpers/useMediaRules";

export const Slider = ({ images, className }) => {
  const media = useMediaRules();

  return (
    <div className="relative">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        className="mySwiper"
        loop={true}
        navigation={{
          nextEl: ".next-slider",
          prevEl: ".prev-slider",
        }}
        modules={[Navigation]}
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 32 },
          1440: { slidesPerView: 4.85, spaceBetween: 20 },
        }}
      >
        {images.map(({ id, pathToMob, pathToTab, pathToDesk, descr }) => {
          if (media === "mobile" && pathToMob) {
            return (
              <SwiperSlide key={id} className={className}>
                <Image src={pathToMob} alt={descr} width={157} height={201} />
              </SwiperSlide>
            );
          }

          if (media === "tablet" && pathToTab) {
            return (
              <SwiperSlide key={id} className={className}>
                <Image src={pathToTab} alt={descr} width={366} height={309} />
              </SwiperSlide>
            );
          }

          if (media === "desktop" && pathToDesk) {
            return (
              <SwiperSlide key={id} className={className}>
                <Image src={pathToDesk} alt={descr} width={266} height={309} />
              </SwiperSlide>
            );
          }
        })}
      </Swiper>
      <div className="prev-slider swiper-button-disabled " role={"button"}>
        <BsChevronLeft size={25} />
      </div>
      <div className="next-slider swiper-button-disabled " role={"button"}>
        <BsChevronRight size={25} />
      </div>
    </div>
  );
};

export default Slider;
