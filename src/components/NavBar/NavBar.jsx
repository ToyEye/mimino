import Link from "next/link";
import { useRouter } from "next/router";
import classNames from "classnames";
import PropTypes from "prop-types";

import { routes } from "data/routes";

const NavBar = ({ className }) => {
  const { route } = useRouter();
  return (
    <ul className={className}>
      {routes &&
        routes.map(({ path, name }) => {
          const mainPage = classNames(
            { "after:bg-white": path === "/" },
            { "after:bg-black": path !== "/" }
          );

          const current = classNames({
            "relative after:content-[''] after:block after:w-[5px] after:h-[5px] after:absolute  after:rounded after:inset-x-1/2 after:bottom-[0] ":
              path === route,
          });

          return (
            <li key={name}>
              <Link href={path} className={`${current} ${mainPage} py-2 `}>
                {name}
              </Link>
            </li>
          );
        })}
    </ul>
  );
};

export default NavBar;

NavBar.propTypes = {
  className: PropTypes.string.isRequired,
};
