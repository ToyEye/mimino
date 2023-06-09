const Modal = ({ children }) => {
  return (
    <div className="bg-[#5e5e5eab] fixed top-0 left-0 w-full h-full flex justify-center items-center transition-all z-40">
      <div className="bg-[#121212] p-8 w-[335px] relative md:w-[628px]">
        {children}
      </div>
    </div>
  );
};

export default Modal;
