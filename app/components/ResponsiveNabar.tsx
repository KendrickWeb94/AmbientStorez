
import Image from "next/image";
import React from "react";
import logolight from "../../app/assets/logos/ambient-logo-light.svg";
import logodark from "../../app/assets/logos/ambient-logo-dark.svg";
import NavItems from "./NavItem";
import navLinks from "../data/navlinks";

const ResponsiveNabar = () => {
  return (
    <div className='h-screen fixed z-40 dark:bg-white  bg-zinc-950  w-[273] p-3'>
        <div className='w-full spacey-6 d-flex flex-col h-full '>
        <div className="logo">
              <Image
                src={logolight}
                alt="logo"
                className="hidden dark:block max-w-44 min-w-28"
              />
              <Image
                src={logodark}
                alt="logo"
               className="dark:hidden block max-w-44 min-w-28"
              />
            </div>
            <div className="text-gray-300 dark:text-black mt-5">
              <NavItems links={navLinks}/>
            </div>
        </div>
    </div>
  )
}

export default ResponsiveNabar
