import { useRouter } from "next/navigation";
import PropTypes from "prop-types";

const ButtonLink = ({ text, className, path }) => {
  const router = useRouter();
  return (
    <button
      type="button"
      className={`${className} -tracking-[0.02em] transition uppercase leading-[18px] text-sm border py-2 px-[18px] rounded-[32px] md:leading-[24px] lg:text-lg lg:leading-[24px]`}
      onClick={() => router.push(`${path}`)}
      aria-label={`Link to go to ${path}`}
    >
      {text}
    </button>
  );
};

export default ButtonLink;

ButtonLink.propTypese = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};
