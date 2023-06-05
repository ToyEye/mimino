import PropTypes from "prop-types";

import Button from "./Button";

const BtnList = ({ data = [], className = "" }) => {
  return (
    <ul className={`${className} flex gap-[14px]`}>
      {data &&
        data.map(({ id, text }) => {
          return (
            <li key={id}>
              <Button text={text} />
            </li>
          );
        })}
    </ul>
  );
};

export default BtnList;

BtnList.propTypes = {
  data: PropTypes.array.isRequired,
  className: PropTypes.string.isRequired,
};
