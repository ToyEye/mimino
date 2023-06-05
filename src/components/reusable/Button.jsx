import PropTypes from "prop-types";
import classNames from "classnames";

const Button = ({ text, className = "", theme = "light" }) => {
  const btnTheme = classNames(
    {
      "text-light  border-light hover:text-dark hover:bg-light ":
        theme === "light",
    },
    { "text-dark border-dark hover:text-light hover:bg-dark": theme === "dark" }
  );

  return (
    <button
      type="button"
      className={`${className} ${btnTheme} transition uppercase leading-[18px] text-sm border py-2 px-[18px] rounded-[32px]`}
    >
      {text}
    </button>
  );
};

export default Button;

Button.propType = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  theme: PropTypes.string.isRequired,
};
