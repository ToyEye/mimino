import { RiCloseLine } from "react-icons/ri";

import Heading from "../reusable/Heading";
import Modal from "../reusable/Modal";

const BookTableModal = ({ onClose }) => {
  return (
    <Modal>
      <div className="bg-[#121212] p-8 w-[335px] relative">
        <Heading
          text="BOOK A TABLE"
          className="font-medium text-[28px] leading-[38px] italic  -tracking-[0.02em] text-light mb-10 "
        />
        <button
          type="button"
          className="absolute right-3 top-3 text-light"
          onClick={onClose}
        >
          <RiCloseLine size={32} className=" text-light" />
        </button>

        <form className="flex flex-col gap-8">
          <label className="flex flex-col gap-2">
            <input
              type="text"
              placeholder="Your name"
              className="bg-transparent pb-[18px] placeholder:uppercase placeholder:text-light text-light outline-[0] border-b-[1px] border-white w-full"
            />
            <span className="uppercase text-light text-[8px] leading-3  tracking-[0.18em]  ">
              Who should book a table for?
            </span>
          </label>
          <label>
            <input
              type="number"
              className="bg-transparent pb-[18px] placeholder:uppercase placeholder:text-light text-light outline-[0] border-b-[1px] border-white w-full"
              placeholder="number of people"
              minLength={1}
            />
          </label>
          <label className="flex flex-col gap-2">
            <input
              type="tel"
              className="bg-transparent pb-[18px] placeholder:uppercase placeholder:text-light text-light outline-[0] border-b-[1px] border-white w-full"
              placeholder="+ 38 () "
            />
            <span className="uppercase text-light text-[8px] leading-3  tracking-[0.18em]  ">
              Phone number
            </span>
          </label>
          <label className="flex flex-col gap-2">
            <input
              type="text"
              className="bg-transparent pb-[18px] placeholder:uppercase placeholder:text-light text-light outline-[0] border-b-[1px] border-white w-full"
              placeholder="Today"
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => (e.target.type = "text")}
            />
            <span className="uppercase text-light text-[8px] leading-3  tracking-[0.18em]   ">
              What date to book?
            </span>
          </label>

          <button
            type="submit"
            className="text-sm leading-[18px]-tracking-[0.02em] text-light border border-light w-[235px] py-[14px] rounded-full m-auto "
          >
            MAKE A RESERVATION
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default BookTableModal;
