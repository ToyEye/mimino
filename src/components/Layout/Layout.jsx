import { useRouter } from "next/router";

import Header from "../Header/Header";
import Footer from "../Footer";

const Layout = ({ children }) => {
  const { route } = useRouter();

  const isMainPage = route === "/" ? true : false;

  return (
    <>
      <Header main={isMainPage} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
