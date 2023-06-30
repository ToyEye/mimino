import PropTypes from "prop-types";

import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

const icons = [
  { id: "1", Icon: FiInstagram },
  { id: "2", Icon: FiFacebook },
  { id: "3", Icon: FiTwitter },
];

const IconsList = ({ className }) => {
  return (
    <ul className={`flex ${className}`}>
      {icons.map(({ id, Icon }) => {
        return (
          <li key={id}>
            <a href="">
              <Icon size={20} />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default IconsList;

IconsList.propTypes = {
  className: PropTypes.string.isRequired,
};
