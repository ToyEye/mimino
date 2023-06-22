import Image from "next/image";
import { TextDescription } from "components/reusable/TextDescription";

const AboutKitcheDesk = ({ images }) => {
  return (
    <>
      <ul className="flex gap-8 ">
        {images.map(
          ({ id, description, desk: { path, height, width, text } }) => {
            return (
              <li key={id} style={{ width: width }}>
                <Image
                  src={path}
                  alt={description}
                  width={width}
                  height={height}
                />
                {text && (
                  <>
                    <TextDescription text={text} />
                  </>
                )}
              </li>
            );
          }
        )}
      </ul>
    </>
  );
};

export default AboutKitcheDesk;
