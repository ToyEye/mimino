import { useState } from "react";

export const useModalOpen = () => {
  const [showTableModal, setShowTableModal] = useState(false);
  const [showRoomModal, setShowRoomModal] = useState(false);

  const toggleModal = (evt) => {
    const { name } = evt.currentTarget;

    switch (name) {
      case "table":
        setShowTableModal(!showTableModal);
        break;

      case "room":
        setShowRoomModal(!showRoomModal);
        break;

      default:
        setShowTableModal(false);

        break;
    }
  };

  return { showTableModal, showRoomModal, toggleModal };
};
