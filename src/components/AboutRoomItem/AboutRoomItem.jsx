import Image from "next/image";

import classNames from "classnames";

const AboutRoomItem = ({
  screen,
  description,

  side,
  mob,
  tab,
  desk,
}) => {
  const styles = classNames(
    {
      "first:w-[158px] first:h-[149px] first:order-2 w-[335px] h-[468px] order-1 last:w-[158px] last:h-[149px] last:order-3":
        mob,
    },
    {
      "first:w-[337px] first:h-[175px] first:order-3 w-[335px] h-[468px] order-1 last:w-[223px] last:h-[261px] last:order-2":
        side && tab,
    },
    {
      "first:w-[337px] first:h-[175px] first:order-2 w-[335px] h-[468px] order-3 last:w-[223px] last:h-[261px] last:order-1":
        !side && tab,
    },

    {
      "first:w-[368px] first:h-[395px]  w-[539px] h-[762px] last:w-[387px] last:h-[510px] ":
        desk,
    }
  );

  return (
    <li className={`relative ${styles}`}>
      <Image className={styles} fill src={screen} alt={description} />
    </li>
  );
};

export default AboutRoomItem;
