import PropTypes from "prop-types";

const ButtonModal = ({ text, className = "", openModal }) => {
  return (
    <button
      type="button"
      className={`${className} transition uppercase leading-[18px] text-sm border py-2 px-[18px] rounded-[32px]`}
      onClick={openModal}
    >
      {text}
    </button>
  );
};

export default ButtonModal;

ButtonModal.propType = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};
