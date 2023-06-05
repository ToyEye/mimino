import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import classNames from "classnames";
import PropTypes from "prop-types";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import Container from "../reusable/Container";
import NavBar from "../NavBar";
import Logo from "../Logo/Logo";
import IconsList from "../reusable/IconsList";
import MobileMenu from "../MobileMenu";

const Header = ({ main }) => {
  const [showMenu, setShowMenu] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const showMenu = () => {
      setShowMenu(!showMenu);
    };

    router.events.on("routeChangeStart", showMenu);

    return () => {
      router.events.off("routeChangeStart", showMenu);
    };
  }, [router.events]);

  const colorStyles = classNames(
    { "text-light bg-dark border-headerBorderLight": main },
    { "text-dark bg-light border-headerBorderDark": !main }
  );

  const onShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className={`${colorStyles}  border-b-[0.5px] `}>
      <Container>
        <div className="flex items-center md:justify-between ">
          <button
            className={`cursor-pointer mr-[83px] lg:hidden `}
            onClick={onShowMenu}
          >
            {showMenu ? (
              <AiOutlineClose size={29} />
            ) : (
              <HiOutlineMenuAlt2 size={29} />
            )}
          </button>

          <NavBar className=" hidden lg:flex gap-8" />
          <Logo className="text-center" />
          <IconsList className="hidden md:flex gap-[14px] lg:gap-4" />
        </div>

        <MobileMenu style={colorStyles} onShow={showMenu} />
      </Container>
    </header>
  );
};

export default Header;

Header.propTypes = {
  main: PropTypes.bool.isRequired,
};
