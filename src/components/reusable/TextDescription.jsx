export const HeroTextDescr = ({ text = "", className = "" }) => {
  return <p className={`${className} text-light`}>{text}</p>;
};
