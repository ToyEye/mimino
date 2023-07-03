import { useEffect, useState } from "react";
import Image from "next/image";

import Container from "../reusable/Container";
import Heading from "../reusable/Heading";
import { TextDescription } from "../reusable/TextDescription";

const AboutLuxary = () => {
  const [imgRoute, setImgRoute] = useState("mainLuxaryMob");

  useEffect(() => {
    window
      .matchMedia("(max-width: 767px)")
      .addEventListener("change", (evt) => {
        if (evt.matches) {
          setImgRoute("mainLuxaryMob");
        } else {
          setImgRoute("mainLuxary");
        }
      });
  }, []);

  return (
    <section className="py-20 ">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row-reverse lg:justify-end ">
          <div className="lg:flex lg:flex-col lg:justify-between">
            <Heading
              tag="h2"
              text="Welcome to the epitome of luxury and comfort"
              className="font-medium text-[32px] leading-9 uppercase -tracking-[0.02em] mb-8 md:w-[418px] md:mb-[50px] lg:m-0 lg:text-4xl"
            />

            <div className="text-sm leading-5 -tracking-[0.02em] flex flex-col gap-8 md:flex-row lg:flex-col lg:justify-between   ">
              <TextDescription
                className="md:w-[306px] lg:w-[437px]"
                text="Our hotel rooms are elegantly designed with an eye for detail, ensuring that you have everything you need for a relaxing and rejuvenating stay."
              />
              <TextDescription
                className="md:w-[366px] lg:w-[437px]"
                text="Each room is equipped with the latest amenities, including plush bedding, high-speed Wi-Fi, flat-screen TVs, and a coffee maker to help you start your day right. Our spacious bathrooms feature luxurious toiletries and towels, so you can pamper yourself in complete privacy."
              />
            </div>
          </div>
          <Image
            alt=""
            src={`/mainLuxary/${imgRoute}.jpg`}
            width={704}
            height={599}
            sizes="(min-width: 320px) 33vw, (min-width: 768px) 50vw,(min-width: 1440px) 100vw"
            className="h-[432px] md:h-[599px] lg:w-[672px]"
          />
        </div>
      </Container>
    </section>
  );
};

export default AboutLuxary;
