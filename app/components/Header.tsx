{/* "use client"
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { UserAuth } from "../context/AuthContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  const { user, googleSignIn, logOut } = UserAuth();
  const [loading, setLoading] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSignIn = async () => {
    try {
      await googleSignIn();
      toast.success("Successfully signed in.");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await logOut();
      toast.success("Successfully signed out.");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    };
    checkAuthentication();
  }, [user]);

  return (
    <>
      <ToastContainer />
      <div className="h-20 w-full border-b-2 flex items-center justify-between p-2">
        <ul className="flex">
          <li className="p-2 cursor-pointer">
            <Link href="/">Home</Link>
          </li>
          <li className="p-2 cursor-pointer">
            <Link href="/about">About</Link>
          </li>

          {!user ? null : (
            <li className="p-2 cursor-pointer">
              <img
                src={user.photoURL}
                alt="Profile Image"
                width={40}
                height={40}
                className="rounded-full cursor-pointer"
                onClick={() => setShowDropdown(!showDropdown)}
              />
            </li>
          )}
        </ul>

        {loading ? null : !user ? (
          <ul className="flex">
            <li onClick={handleSignIn} className="p-2 cursor-pointer">
              Login
            </li>
            <li onClick={handleSignIn} className="p-2 cursor-pointer">
              Sign up
            </li>
          </ul>
        ) : (
          <div>
            {showDropdown && (
              <div className="absolute right-0 mt-12 w-40 bg-white border rounded-lg shadow-lg z-10">
                <ul>
                  <li
                    onClick={handleSignOut}
                    className="py-2 px-4 cursor-pointer hover:bg-gray-200"
                  >
                    Sign Out
                  </li>
                  <li className="py-2 px-4 cursor-pointer hover:bg-gray-200">
                    <Link href="/profile">Profile</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
*/}

import Image from 'next/image'
import React from 'react'
import logolight from "../../app/assets/logos/ambient-logo-light.svg"
import logodark from "../../app/assets/logos/ambient-logo-dark.svg"
import navLinks from '../data/NavLinks'
import NavItems from './NavItem'

export const Navbar = () => {
  return (
    <div className=' w-full border-b border-b-gray-400/45 h-auto p-3 '>
      <div className=' w-full mx-auto max-w-[94%] '>
        <div className=' w-full flex items-center justify-between '>
            <div className='logo'>
            <Image src={logolight} alt='logo' className=' dark:hidden block  w-44'/>
            <Image src={logodark} alt='logo' className='hidden dark:block w-44'/>
            </div>
            <div className="">
              <NavItems links={navLinks}/>
            </div>
        </div>
      </div>
    </div>
  )
}
