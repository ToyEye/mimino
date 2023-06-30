import PropTypes from "prop-types";

const Heading = ({ tag, className, text }) => {
  const Tag = tag || "h2";
  return <Tag className={`${className} uppercase`}>{text}</Tag>;
};

export default Heading;

Heading.propTypes = {
  tag: PropTypes.string,
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
};
