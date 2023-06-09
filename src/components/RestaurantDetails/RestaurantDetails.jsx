import React, { useState, useEffect } from "react";
import Container from "../reusable/Container";
import Heading from "../reusable/Heading";
import { TextDescription } from "../reusable/TextDescription";

import images from "data/mainSliderImages.json";
import Slider from "../reusable/Swiper";
import useMediaRules from "helpers/useMediaRules";
import BtnList from "../reusable/BtnList";
import BookTableModal from "../Modals/BookTableModal";
import { useModalOpen } from "@/hooks/useModalOpen";

const RestaurantDetails = () => {
  const { showTableModal, toggleModal } = useModalOpen();

  const [sizes, setSizes] = useState({
    width: 157,
    height: 201,
  });
  const [slidesPerView, setSlidesPerView] = useState({
    mob: 2,
    tab: 2,
    desk: 4.8,
  });

  const media = useMediaRules();

  useEffect(() => {
    if (media === "mobile") {
      setSizes({ width: 157, height: 201 });
    }
    if (media === "tablet") {
      setSizes({ width: 366, height: 309 });
    }
    if (media === "desktop") {
      setSizes({ width: 266, height: 309 });
    }
  }, [media]);

  return (
    <section className="pt-11 lg:pb-[113px]  ">
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

          <BtnList
            textModal="book a table"
            textLink="View the menu"
            theme="dark"
            name="table"
            className="hidden lg:flex lg:ml-auto"
            path="/restaurant"
            openModal={toggleModal}
          />
        </div>
        <Slider
          images={images}
          className="h-[309px]"
          sizes={sizes}
          slidesPerView={slidesPerView}
          loop
        />

        <BtnList
          textModal="book a table"
          textLink="View the menu"
          theme="dark"
          className="mt-[82px] md:mt-[108px] justify-center lg:hidden"
          path="/restaurant"
          name="table"
          openModal={toggleModal}
        />
      </Container>
      {showTableModal && <BookTableModal onClose={toggleModal} />}
    </section>
  );
};

export default RestaurantDetails;
