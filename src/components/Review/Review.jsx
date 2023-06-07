import Image from "next/image";

const Review = ({ rating, name, src, className }) => {
  return (
    <div
      className={`flex gap-3 bg-[#121212] rounded-md shadow-[1px 7px 22px rgba(0, 0, 0, 0.1)] w-[212px] px-[14px] py-[10px] ${className}`}
    >
      <Image
        alt={name}
        src={`/review/${src}.jpg`}
        width={41}
        height={41}
        className="rounded-full "
      />
      <div>
        <p className="text-[#F6F6F6] text-sm leading-[14px] font-medium mb-[7px]">
          {name}
        </p>
        <p className="text-xs text-[#484848E5]">
          give rating {""}
          <span className="font-medium text-[#F6F6F6]">{rating}</span>
        </p>
      </div>
    </div>
  );
};

export default Review;
