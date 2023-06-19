import PropTypes from "prop-types";

const ButtonModal = ({ text, className, openModal }) => {
  return (
    <button type="button" className={className} onClick={openModal}>
      {text}
    </button>
  );
};

export default ButtonModal;

ButtonModal.propTypese = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};
