import Image from "next/image";
import { TextDescription } from "components/reusable/TextDescription";

const AboutKitcheDesk = () => {
  return (
    <>
      <ul className="flex gap-8 ">
        <li>
          <Image
            src="/restaurant/aboutKitchen/deskChef.jpg"
            alt=""
            width={511}
            height={598}
          />
        </li>
        <li>
          <Image
            src="/restaurant/aboutKitchen/deskMeat.jpg"
            alt=""
            width={334}
            height={389}
          />
          <TextDescription
            className="hidden lg:block"
            text="At Mimino, we are experts in meat preparation. Our chefs use only the finest and freshest ingredients to create delicious dishes that showcase the flavors of premium cuts of meat."
          />
        </li>
        <li>
          <Image
            src="/restaurant/aboutKitchen/deskCoctail.jpg"
            alt=""
            width={467}
            height={389}
          />
          <TextDescription
            className="hidden lg:block lg:w-[]"
            text="Our slow-cooking process and expert seasoning bring out the best in each dish, making for an unforgettable dining experience. Come taste the magic of meat preparation at Mimino."
          />
        </li>
      </ul>
    </>
  );
};

export default AboutKitcheDesk;
