import Image from "next/image";
import { TextDescription } from "components/reusable/TextDescription";

const AboutKitcheMob = () => {
  return (
    <ul className="flex flex-wrap gap-5 ">
      <li>
        <Image
          src="/restaurant/aboutKitchen/mobChef.jpg"
          alt=""
          width={500}
          height={650}
        />
      </li>
      <li>
        <Image
          src="/restaurant/aboutKitchen/mobMeat.jpg"
          alt=""
          width={158}
          height={149}
        />
        <TextDescription
          className="hidden lg:block"
          text="At Mimino, we are experts in meat preparation. Our chefs use only the finest and freshest ingredients to create delicious dishes that showcase the flavors of premium cuts of meat."
        />
      </li>
      <li>
        <Image
          src="/restaurant/aboutKitchen/mobCoctail.jpg"
          alt=""
          width={157}
          height={149}
        />
        <TextDescription
          className="hidden lg:block"
          text="Our slow-cooking process and expert seasoning bring out the best in each dish, making for an unforgettable dining experience. Come taste the magic of meat preparation at Mimino."
        />
      </li>
    </ul>
  );
};

export default AboutKitcheMob;
