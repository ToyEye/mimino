import classNames from "classnames";
import AboutRoomItem from "../AboutRoomItem";
import dynamic from "next/dynamic";
const MediaComponent = dynamic(() => import("react-media"), { ssr: false });

const AboutRoomList = ({ images, side }) => {
  const imageSide = classNames(
    { "md:items-start": side },
    { "md:items-end": !side }
  );

  return (
    <ul
      className={`flex flex-wrap justify-center gap-[19px] md:gap-8 md:justify-end md:h-[468px] md:flex-col  lg:h-auto lg:flex-row lg:items-center ${imageSide} `}
    >
      {images.map(({ id, mob, tab, desk, description }) => {
        return (
          <MediaComponent
            queries={{
              small: "(max-width: 767px)",
              medium: "(min-width: 768px) and (max-width: 1439px)",
              large: "(min-width: 1440px)",
            }}
            key={id}
          >
            {(matches) => (
              <>
                {matches.small && (
                  <AboutRoomItem
                    screen={mob}
                    description={description}
                    side={side}
                    mob
                  />
                )}
                {matches.medium && (
                  <AboutRoomItem
                    screen={tab}
                    description={description}
                    side={side}
                    tab
                  />
                )}
                {matches.large && (
                  <AboutRoomItem
                    screen={desk}
                    description={description}
                    desk
                    side={side}
                  />
                )}
              </>
            )}
          </MediaComponent>
        );
      })}
    </ul>
  );
};

export default AboutRoomList;
