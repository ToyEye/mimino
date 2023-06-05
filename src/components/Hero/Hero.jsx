import Container from "../reusable/Container";
import Heading from "../reusable/Heading";
import { TextDescription } from "../reusable/TextDescription";

import BtnList from "../reusable/BtnList";
import {
  heroBtnData,
  mainHeroFirstTextDescr,
  mainHeroSecondTextDescr,
} from "./heroData";

const Hero = () => {
  return (
    <section className="bg-dark pt-[429px] pb-10 md:pt-[528px] md:pb-[38px] lg:pt-[196px] lg:pb-[48px]">
      <Container className="pr-[17px] md:pr-8">
        <Heading
          tag="h1"
          text="Mimino"
          className="text-[80px] text-center leading-[80px]  uppercase text-light -tracking-[0.02em] mb-6 md:text-[150px] md:leading-[150px] md:mb-8 lg:text-left lg:mb-[196px]"
        />

        <div className="flex flex-col gap-[66px] md:gap-[86px] lg:gap-[275px] lg:flex-row-reverse md:justify-end ">
          <BtnList data={heroBtnData} className="justify-center" />
          <div className="flex flex-col gap-8 text-sm text-light leading-[18px] tracking-[0.05em] md:flex-row md:justify-center ">
            <TextDescription
              className=" w-[338px]"
              text={mainHeroFirstTextDescr}
            />

            <TextDescription
              className=" w-[338px]"
              text={mainHeroSecondTextDescr}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
