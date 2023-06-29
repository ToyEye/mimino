import { useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import toast from "react-hot-toast";

import Heading from "../reusable/Heading";
import Modal from "../reusable/Modal";

const BookRoomModal = ({ onClose }) => {
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [dateIn, setDateIn] = useState("");
  const [dateOut, setDateOut] = useState("");
  const [selectRoom, setSelectRoom] = useState("");

  const handleChange = (evt) => {
    const { name, value } = evt.target;

    switch (name) {
      case "name":
        setName(value);
        break;

      case "tel":
        setTel(value);
        break;

      case "dateIn":
        setDateIn(value);
        break;

      case "dateOut":
        setDateOut(value);
        break;

      case "select":
        setDateOut(setSelectRoom);
        break;

      default:
        break;
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    console.log({ name, tel, dateIn, dateOut, selectRoom });
    toast.success(`${name}, your data has been sent.`);
    setName("");
    setDateIn("");
    setDateOut("");
    setTel("");
    setSelectRoom("");
  };

  return (
    <Modal>
      <Heading
        text="BOOK A room"
        className="uppercase  font-medium text-[28px] leading-[38px] italic  -tracking-[0.02em] text-light mb-10 "
      />
      <button
        type="button"
        className="absolute right-3 top-3 text-light"
        name="room"
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
              name="dateIn"
              value={dateIn}
              className="bg-transparent pb-[18px] placeholder:uppercase placeholder:text-light text-light outline-[0] border-b-[1px] border-white w-full"
              placeholder="Today"
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => (e.target.type = "text")}
            />
            <span className="uppercase text-light text-[8px] leading-3  tracking-[0.18em]   ">
              Check-in date
            </span>
          </label>
          <label className="flex flex-col gap-2 md:basis-[45%] ">
            <input
              onChange={handleChange}
              type="date"
              name="dateOut"
              value={dateOut}
              className="bg-transparent pb-[18px] placeholder:uppercase placeholder:text-light text-light outline-[0] border-b-[1px] border-white w-full"
              placeholder="number of people"
              minLength={1}
            />
            <span className="uppercase text-light text-[8px] leading-3  tracking-[0.18em]   ">
              Check-out date
            </span>
          </label>

          <div className="flex flex-col gap-2 md:basis-[45%] ">
            <select
              name="select"
              id=""
              onChange={handleChange}
              className="bg-transparent pb-[18px] placeholder:uppercase placeholder:text-light text-light outline-[0] border-b-[1px] border-white w-full"
            >
              <option
                disabled
                value="double"
                className="bg-[#121212]   pb-[18px] placeholder:uppercase placeholder:text-light text-light outline-[0] border-b-[1px] border-white w-full"
              >
                Сhoose a room
              </option>

              <option
                value="double"
                className="bg-[#121212] hover:scale-1 pb-[18px] placeholder:uppercase placeholder:text-light text-light outline-[0] border-b-[1px] border-white w-full"
              >
                Double luxury room
              </option>
              <option
                value="triple"
                className="bg-[#121212] hover:scale-1 pb-[18px] placeholder:uppercase placeholder:text-light text-light outline-[0] border-b-[1px] border-white w-full"
              >
                Triple Room
              </option>
              <option
                value="four"
                className="bg-[#121212] hover:scale-1 pb-[18px] placeholder:uppercase placeholder:text-light text-light outline-[0] border-b-[1px] border-white w-full"
              >
                Four-seater room
              </option>
            </select>
            <span className="uppercase text-light text-[8px] leading-3  tracking-[0.18em]   ">
              Number category
            </span>
          </div>
        </div>

        <button
          type="submit"
          name="table"
          className="text-sm leading-[18px]-tracking-[0.02em] text-light border border-light w-[235px] py-[14px] rounded-full m-auto md:w-[399px] "
        >
          MAKE A RESERVATION
        </button>
      </form>
    </Modal>
  );
};

export default BookRoomModal;
