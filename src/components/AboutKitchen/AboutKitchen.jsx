import Image from "next/image";
import Media from "react-media";

import Container from "../reusable/Container";
import { TextDescription } from "../reusable/TextDescription";
import AboutKitcheMob from "./Parts/AboutKitcheMob";
import AboutKitcheTab from "./Parts/AboutKitcheTab";

const AboutKitchen = () => {
  return (
    <section className="py-16 md:py-20 lg:py-[100px] ">
      <Container>
        <div>
          <Media
            queries={{
              small: "(max-width: 767px)",
              medium: "(min-width: 768px) and (max-width: 1439px)",
              large: "(min-width: 1440px)",
            }}
          >
            {(matches) => (
              <>
                {matches.small && <AboutKitcheMob />}
                {matches.medium && <AboutKitcheTab />}
                {matches.large && <AboutKitcheMob />}
              </>
            )}
          </Media>

          <ul className="lg:hidden">
            <li>
              <TextDescription text="At Mimino, we are experts in meat preparation. Our chefs use only the finest and freshest ingredients to create delicious dishes that showcase the flavors of premium cuts of meat." />
            </li>
            <li>
              <TextDescription text="Our slow-cooking process and expert seasoning bring out the best in each dish, making for an unforgettable dining experience. Come taste the magic of meat preparation at Mimino." />
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default AboutKitchen;
