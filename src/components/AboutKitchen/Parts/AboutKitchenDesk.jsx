import Image from "next/image";
import { TextDescription } from "components/reusable/TextDescription";

const AboutKitcheDesk = ({ images }) => {
  return (
    <>
      <ul className="flex gap-8 ">
        {images.map(({ id, description, path, desk: { height, width } }) => {
          console.log(path);
          return (
            <li key={id}>
              <Image
                src={path}
                alt={description}
                width={width}
                height={height}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default AboutKitcheDesk;
