import { useState, useEffect } from "react";
import { RiCloseLine } from "react-icons/ri";

import Modal from "../reusable/Modal";
import Heading from "../reusable/Heading";

import React from "react";

const PricePerRoomModal = ({ room, onClose }) => {
  const [nightCounter, setNightCounter] = useState(1);
  const [price, setPrice] = useState(1000);

  useEffect(() => {
    if (room === "double luxury room") {
      setPrice(nightCounter * 1000);
    }

    if (room === "triple room") {
      setPrice(nightCounter * 1500);
    }

    if (room === "four-seater room") {
      setPrice(nightCounter * 2500);
    }
  }, [nightCounter, room]);

  const handleChange = (evt) => {
    const { value } = evt.target;

    setNightCounter(value);
  };

  return (
    <Modal>
      <Heading
        text="prices per room"
        className=" uppercase font-medium text-[28px] leading-[38px] italic  -tracking-[0.02em] text-light mb-10 "
      />
      <button
        type="button"
        className="absolute right-3 top-3 text-light"
        name="price"
        onClick={onClose}
      >
        <RiCloseLine size={32} className=" text-light" />
      </button>

      <Heading
        text={room}
        tag="h3"
        className="uppercase font-medium text-light mb-8"
      />

      <form>
        <div className="flex flex-col gap-8 md:flex-row md:flex-wrap ">
          <div className="flex flex-col gap-2 md:basis-[45%] ">
            <select
              name="select"
              id=""
              onChange={handleChange}
              className="bg-transparent pb-[18px] placeholder:uppercase placeholder:text-light text-light outline-[0] border-b-[1px] border-white w-full"
            >
              <option
                disabed
                value="1"
                className="bg-[#121212]   pb-[18px] placeholder:uppercase placeholder:text-light text-light outline-[0] border-b-[1px] border-white w-full"
              >
                1
              </option>

              <option
                value="2"
                className="bg-[#121212] hover:scale-1 pb-[18px] placeholder:uppercase placeholder:text-light text-light outline-[0] border-b-[1px] border-white w-full"
              >
                2
              </option>
              <option
                value="3"
                className="bg-[#121212] hover:scale-1 pb-[18px] placeholder:uppercase placeholder:text-light text-light outline-[0] border-b-[1px] border-white w-full"
              >
                3
              </option>
              <option
                value="4"
                className="bg-[#121212] hover:scale-1 pb-[18px] placeholder:uppercase placeholder:text-light text-light outline-[0] border-b-[1px] border-white w-full"
              >
                4
              </option>
            </select>
            <span className="uppercase text-light text-[8px] leading-3  tracking-[0.18em]   ">
              Number of nights
            </span>
          </div>

          <label className="flex flex-col gap-2 md:basis-[45%] ">
            <input
              onChange={handleChange}
              type="text"
              name="price"
              value={price}
              className="bg-transparent pb-[18px] placeholder:uppercase placeholder:text-light text-light outline-[0] border-b-[1px] border-white w-full"
              disabled
            />
            <span className="uppercase text-light text-[8px] leading-3  tracking-[0.18em]   ">
              UAH
            </span>
          </label>
        </div>
      </form>
    </Modal>
  );
};

export default PricePerRoomModal;
