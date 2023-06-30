import PropTypes from "prop-types";

const ButtonModal = ({ text, className = "", openModal, name }) => {
  return (
    <button
      type="button"
      className={`${className} -tracking-[0.02em] transition uppercase leading-[18px] text-sm border py-2 px-[18px] rounded-[32px] md:leading-[24px] lg:text-lg lg:leading-[24px]`}
      onClick={openModal}
      name={name}
      aria-label={`Button for open ${name} modal window `}
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
