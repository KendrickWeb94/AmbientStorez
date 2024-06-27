import React from "react";
import { NavLinks } from "../data/navlinks";

const NavItems: React.FC<{ links: NavLinks[] }> = ({ links }) => {
  return (
    <div>
      <ul className=" flex md:items-center gap-5 text-sm ds:flex-col md:flex-row">
        {links.map((link) => (
          <li
            key={link.id}
            className=" relative after:hover:w-full smooth hover:text-default-red font-medium after:hover:smooth after:absolute after:bottom-0 after:left-0 after:w-0 first:after:w-6 after:h-1 after:border-default-red after:border-b smooth "
          >
            <a href={link.url}>{link.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavItems;
