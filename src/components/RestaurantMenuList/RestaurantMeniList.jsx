import classNames from "classnames";
import Heading from "../reusable/Heading";

const RestaurantMenuList = ({ title, menuList, little }) => {
  const width = classNames({ "w-[45%]": !little }, { "w-full": little });

  return (
    <div className={`w-full lg:${width}`}>
      <Heading
        tag="h3"
        text={title}
        className="text-light uppercase italic text-lg leading-6 -tracking-[0.02em] md:text-2xl mb-8"
      />
      <ul className="flex gap-2 flex-col ">
        {menuList.map(({ id, dish, ingredients, weight, price }) => {
          return (
            <li
              key={id}
              className="text-light -tracking-[0.02em] leading-[18px] font-medium text-sm md:text-lg md:leading-[24px]   flex justify-between  border-b border-[#FFFFFF80] pb-2 "
            >
              <div className="w-[233px]">
                <p className="mb-2">{dish}</p>
                {ingredients && (
                  <p className="text-[10px] text-[#D8D7D780] leading-[14px] tracking-[0.18em] md:text-xs md:leading-[18px]">
                    {ingredients}
                  </p>
                )}
              </div>
              <div>
                {weight && (
                  <p className="text-xs leading-[14px]  md:text-sm  md:leading-[18px] mb-[14px]">
                    {weight}
                  </p>
                )}
                <p className="uppercase font-bold ">{price}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenuList;
