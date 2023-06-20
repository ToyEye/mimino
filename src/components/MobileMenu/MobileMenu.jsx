import PropTypes from "prop-types";
import classNames from "classnames";
import IconsList from "../reusable/IconsList";
import NavBar from "../NavBar/NavBar";

const MobileMenu = ({ style, onShow }) => {
  const onShowMenu = classNames({ "translate-x-[100%]": !onShow });

  return (
    <div
      className={`${style} ${onShowMenu} fixed w-full h-full top-[74px] left-0 pt-32 transition-transform z-10`}
    >
      <NavBar className="flex justify-center flex-col text-center gap-8 " />
      <IconsList className=" gap-[14px]" />
    </div>
  );
};

export default MobileMenu;

MobileMenu.propTypes = {
  style: PropTypes.string.isRequired,
  onShow: PropTypes.bool.isRequired,
};
