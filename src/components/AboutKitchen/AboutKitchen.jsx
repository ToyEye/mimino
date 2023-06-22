import Media from "react-media";

import Container from "../reusable/Container";

import AboutKitcheMob from "./Parts/AboutKitcheMob";
import AboutKitcheTab from "./Parts/AboutKitcheTab";
import AboutKitcheDesk from "./Parts/AboutKitchenDesk";

import restaurant from "data/restauranData/restaurant.json";

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
                {matches.small && <AboutKitcheMob images={restaurant} />}
                {matches.medium && <AboutKitcheTab images={restaurant} />}
                {matches.large && <AboutKitcheDesk images={restaurant} />}
              </>
            )}
          </Media>
        </div>
      </Container>
    </section>
  );
};

export default AboutKitchen;
