import Image from "next/image";
import { TextDescription } from "components/reusable/TextDescription";

const AboutKitcheTab = () => {
  return (
    <>
      <ul className="flex flex-wrap gap-5 ">
        <li>
          <Image
            src="/restaurant/aboutKitchen/tabChef.jpg"
            alt=""
            width={388}
            height={515}
          />
        </li>
        <li>
          <Image
            src="/restaurant/aboutKitchen/tabMeat.jpg"
            alt=""
            width={284}
            height={296}
          />
        </li>
        <li>
          <Image
            src="/restaurant/aboutKitchen/tabCoctail.jpg"
            alt=""
            width={284}
            height={203}
          />
        </li>
      </ul>
      <ul className="lg:hidden">
        <li>
          <TextDescription text="At Mimino, we are experts in meat preparation. Our chefs use only the finest and freshest ingredients to create delicious dishes that showcase the flavors of premium cuts of meat." />
        </li>
        <li>
          <TextDescription text="Our slow-cooking process and expert seasoning bring out the best in each dish, making for an unforgettable dining experience. Come taste the magic of meat preparation at Mimino." />
        </li>
      </ul>
    </>
  );
};

export default AboutKitcheTab;
