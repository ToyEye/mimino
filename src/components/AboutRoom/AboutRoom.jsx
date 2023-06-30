import Container from "../reusable/Container";
import AboutOneRoomItem from "./AboutOneRoomItem";
import Heading from "../reusable/Heading";
import BookRoomModal from "../Modals/BookRoomModal";
import ButtonModal from "../reusable/ButtonModal";

import { useModalOpen } from "@/hooks/useModalOpen";

const AboutOneRoom = ({ data }) => {
  const { showRoomModal, toggleModal } = useModalOpen();
  return (
    <section className="bg-dark text-light uppercase pt-10 pb-16 md:py-20 lg:pt-[94px] lg:pb-[100px]">
      <Container>
        <div className="flex flex-col gap-10 lg:flex-row lg:flex-wrap lg:gap-x-[70px] lg:gap-y-[100px] ">
          {data.map(({ title, list }) => {
            return (
              <div key={title} className="w-[45%]">
                <Heading
                  text={title}
                  tag="h3"
                  className="text-[28px] leading-8 -tracking-[0.02em] mb-7 md:text-[40px] md:leading-[44px]  "
                />
                <ul className="flex flex-col gap-1 ">
                  <AboutOneRoomItem list={list} />
                </ul>
              </div>
            );
          })}
        </div>
        <ButtonModal
          text="book a room"
          name="room"
          openModal={toggleModal}
          className="mt-10"
        />
        {showRoomModal && <BookRoomModal onClose={toggleModal} />}
      </Container>
    </section>
  );
};

export default AboutOneRoom;
