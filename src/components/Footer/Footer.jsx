import Container from "../reusable/Container";
import NavBar from "../NavBar";
import Logo from "../Logo/Logo";
import IconsList from "../reusable/IconsList";

const Footer = () => {
  return (
    <footer className="pt-6 pb-8 ">
      <div className="pb-8 border-b-[0.5px] border-[#1212124D] ">
        <Container>
          <div className="flex items-center justify-between ">
            <NavBar className=" hidden lg:flex gap-8" />
            <Logo className="text-left lg:text-center" />
            <IconsList className="md:flex gap-[14px] lg:gap-4" />
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
