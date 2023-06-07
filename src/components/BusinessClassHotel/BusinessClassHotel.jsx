import Image from "next/image";

import Container from "../reusable/Container";
import Heading from "../reusable/Heading";
import { TextDescription } from "../reusable/TextDescription";

import Review from "../Review";

const BusinessClassHotel = () => {
  return (
    <section>
      <Container>
        <div className="lg:flex lg:flex-row-reverse lg:items-center lg:gap-[82px]   ">
          <div className="relative mb-[54px] lg:m-0">
            <Image
              src="/businesHotelComplex/bar.jpg"
              alt="Bar"
              width={530}
              height={492}
              sizes="(min-width: 320px) 33vw, (min-width: 768px) 50vw,(min-width: 1440px) 100vw"
              className="md:ml-auto lg:m-0"
              loading="lazy"
              quality={75}
            />
            <Review
              name="Alexander"
              rating="5.5"
              src="alexander"
              className="absolute -bottom-[10%]  left-0 md:bottom-[25%] md:left-[10%] lg:-left-[20%]"
            />
          </div>
          <div className="flex gap-10 flex-col-reverse md:flex-row ">
            <Image
              src="/businesHotelComplex/restaurant.jpg"
              alt="Restaurant"
              width={335}
              height={309}
              sizes="(min-width: 320px) 33vw, (min-width: 768px) 50vw,(min-width: 1440px) 100vw"
              className="md:w-[266px] h-[309px]"
              loading="lazy"
              quality={75}
            />

            <div className="w-[280px]">
              <Heading
                tag="h2"
                text="business class hotel"
                className="text-xs leading-[14px] uppercase text-[#484848] tracking-[0.18em] mb-[18px]"
              />
              <TextDescription
                className="text-sm leading-[18px] w-[263px] -tracking-[0.02em] font-medium  md:text-lg md:leading-6 lg:w-[268px]"
                text="The Mimino hotel features spacious and stylish double luxury rooms with modern amenities for a comfortable stay."
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BusinessClassHotel;
