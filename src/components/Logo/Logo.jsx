import Link from "next/link";

const Logo = ({ className = "" }) => {
  return (
    <div className={` pt-5 pb-5 uppercase tracking-[0.18em] ${className}`}>
      <Link
        href="/"
        className={`flex gap-1 flex-col  font-medium text-sm leading-[22px] md:text-xl md:leading-[24px] `}
      >
        Mimino
        <span
          className={`text-[6px] leading-[8px] md:text-[8px] md:leading-[10px]`}
        >
          restaurant-hotel complex
        </span>
      </Link>
    </div>
  );
};

export default Logo;
