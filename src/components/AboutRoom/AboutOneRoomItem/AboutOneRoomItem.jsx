const AboutOneRoomItem = ({ list }) => {
  return (
    <>
      {list.map((elem) => (
        <li key={elem.id}>
          <p className="text-sm leading-[18px] -tracking-[0.02em] md:text-lg  md:leading-[24px]  ">
            {elem.item}
          </p>
        </li>
      ))}
    </>
  );
};

export default AboutOneRoomItem;
