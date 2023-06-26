import { useState } from "react";
import { RiCloseLine } from "react-icons/ri";

import Heading from "../reusable/Heading";
import Modal from "../reusable/Modal";

const BookTableModal = ({ onClose }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [tel, setTel] = useState("");
  const [date, setDate] = useState("");

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    switch (name) {
      case "name":
        setName(value);
        break;

      case "number":
        setNumber(value);
        break;

      case "tel":
        setTel(value);
        break;

      case "date":
        setDate(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    console.log({ name, number, date, tel });

    setName("");
    setDate("");
    setNumber("");
    setTel("");
  };

  return (
    <Modal>
      <div className="bg-[#121212] p-8 w-[335px] relative md:w-[628px]">
        <Heading
          text="BOOK A TABLE"
          className="font-medium text-[28px] leading-[38px] italic  -tracking-[0.02em] text-light mb-10 "
        />
        <button
          type="button"
          className="absolute right-3 top-3 text-light"
          name="table"
          onClick={onClose}
        >
          <RiCloseLine size={32} className=" text-light" />
        </button>

        <form
          className="flex flex-col gap-10 md:gap-20"
          onSubmit={handleSubmit}
          name="table"
        >
          <div className="flex flex-col gap-8 md:flex-row md:flex-wrap ">
            <label className="flex flex-col gap-2 md:basis-[45%] ">
              <input
                onChange={handleChange}
                type="text"
                value={name}
                name="name"
                placeholder="Your name"
                className="bg-transparent pb-[18px] placeholder:uppercase placeholder:text-light text-light outline-[0] border-b-[1px] border-white w-full"
              />
              <span className="uppercase text-light text-[8px] leading-3  tracking-[0.18em]  ">
                Who should book a table for?
              </span>
            </label>
            <label className="md:basis-[45%] ">
              <input
                onChange={handleChange}
                type="number"
                name="number"
                value={number}
                className="bg-transparent pb-[18px] placeholder:uppercase placeholder:text-light text-light outline-[0] border-b-[1px] border-white w-full"
                placeholder="number of people"
                minLength={1}
              />
            </label>
            <label className="flex flex-col gap-2 md:basis-[45%] ">
              <input
                name="tel"
                onChange={handleChange}
                type="tel"
                value={tel}
                className="bg-transparent pb-[18px] placeholder:uppercase placeholder:text-light text-light outline-[0] border-b-[1px] border-white w-full"
                placeholder="+ 38 () "
              />
              <span className="uppercase text-light text-[8px] leading-3  tracking-[0.18em]  ">
                Phone number
              </span>
            </label>
            <label className="flex flex-col gap-2 md:basis-[45%] ">
              <input
                type="text"
                onChange={handleChange}
                name="date"
                value={date}
                className="bg-transparent pb-[18px] placeholder:uppercase placeholder:text-light text-light outline-[0] border-b-[1px] border-white w-full"
                placeholder="Today"
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.type = "text")}
              />
              <span className="uppercase text-light text-[8px] leading-3  tracking-[0.18em]   ">
                What date to book?
              </span>
            </label>
          </div>

          <button
            type="submit"
            name="table"
            className="text-sm leading-[18px]-tracking-[0.02em] text-light border border-light w-[235px] py-[14px] rounded-full m-auto md:w-[399px] "
          >
            MAKE A RESERVATION
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default BookTableModal;
