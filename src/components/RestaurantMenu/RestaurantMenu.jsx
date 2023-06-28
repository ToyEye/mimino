import Container from "../reusable/Container";
import Heading from "../reusable/Heading";
import RestaurantMenuList from "../RestaurantMenuList/RestaurantMeniList";

import hotMeals from "data/restaurantMenu/hotMeals.json";
import sideDishes from "data/restaurantMenu/sideDishes.json";
import salads from "data/restaurantMenu/salads.json";
import desserts from "data/restaurantMenu/desserts.json";
import drinks from "data/restaurantMenu/drinks.json";

const RestaurantMenu = () => {
  return (
    <section className="bg-dark pt-10 pb-[64px] md:py-20  lg:py-[100px]">
      <Container>
        <Heading
          text="RESTAURANT MENU"
          className="text-light text-center -tracking-[0.02em] text-[32px] leading-[40px]  md:text-[40px] md:leading-[44px] mb-9 lg:mb-[100px]  "
        />
        <div className="flex flex-wrap gap-8 lg:justify-between">
          <RestaurantMenuList
            title={hotMeals.title}
            menuList={hotMeals.menuList}
          />
          <RestaurantMenuList
            title={sideDishes.title}
            menuList={sideDishes.menuList}
          />
          <RestaurantMenuList title={salads.title} menuList={salads.menuList} />
          <div className="w-full lg:w-[45%] flex flex-col justify-between gap-8 lg:gap-0">
            <RestaurantMenuList
              title={desserts.title}
              menuList={desserts.menuList}
              little
            />
            <RestaurantMenuList
              title={drinks.title}
              menuList={drinks.menuList}
              little
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default RestaurantMenu;
