import { useState } from "react";

export const useModalOpen = () => {
  const [showTableModal, setShowTableModal] = useState(false);
  const [showRoomModal, setShowRoomModal] = useState(false);
  const [showPriceModal, setShowPriceModal] = useState(false);

  const toggleModal = (evt) => {
    const { name } = evt.currentTarget;

    switch (name) {
      case "table":
        setShowTableModal(!showTableModal);
        break;

      case "room":
        setShowRoomModal(!showRoomModal);
        break;

      case "price":
        setShowPriceModal(!showPriceModal);
        break;

      default:
        break;
    }
  };

  return { showTableModal, showRoomModal, showPriceModal, toggleModal };
};
