const Modal = ({ children }) => {
  return (
    <div className="bg-[#5e5e5e] fixed top-0 left-0 w-full h-full">
      {children}
    </div>
  );
};

export default Modal;
