import PropTypes from "prop-types";
import classNames from "classnames";

import ButtonModal from "./ButtonModal";
import ButtonLink from "./ButtonLink";

const BtnList = ({
  textModal = "",
  textLink = "",
  theme = "light",
  className,
  path,
  openModal,
}) => {
  const btnTheme = classNames(
    {
      "text-light  border-light hover:text-dark hover:bg-light ":
        theme === "light",
    },
    { "text-dark border-dark hover:text-light hover:bg-dark": theme === "dark" }
  );

  return (
    <div className={`${className} flex gap-[14px]`}>
      <ButtonModal text={textModal} className={btnTheme} />
      <ButtonLink
        text={textLink}
        className={btnTheme}
        path={path}
        openModal={openModal}
      />
    </div>
  );
};

export default BtnList;

BtnList.propTypes = {
  textModal: PropTypes.string.isRequired,
  textLink: PropTypes.string.isRequired,
  theme: PropTypes.string,
  className: PropTypes.string,
  path: PropTypes.string,
  openModal: PropTypes.func,
};
