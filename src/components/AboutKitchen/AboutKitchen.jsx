import Container from "../reusable/Container";

import AboutKitcheMob from "./Parts/AboutKitcheMob";
import AboutKitcheTab from "./Parts/AboutKitcheTab";
import AboutKitcheDesk from "./Parts/AboutKitchenDesk";

import restaurant from "data/restauranData/restaurant.json";

import dynamic from "next/dynamic";

const MediaComponent = dynamic(() => import("react-media"), { ssr: false });

const AboutKitchen = () => {
  return (
    <section className="py-16 md:py-20 lg:py-[100px] ">
      <Container>
        <div>
          <MediaComponent
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
          </MediaComponent>
        </div>
      </Container>
    </section>
  );
};

export default AboutKitchen;
