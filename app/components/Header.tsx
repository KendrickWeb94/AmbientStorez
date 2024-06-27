"use client";
{
  /* "use client"
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { UserAuth } from "../context/AuthContext";


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
*/
}

import Image from "next/image";
import React from "react";
import logolight from "../../app/assets/logos/ambient-logo-light.svg";
import logodark from "../../app/assets/logos/ambient-logo-dark.svg";
import NavItems from "./NavItem";
import navLinks from "../data/navlinks";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useAuth } from "../context/AuthContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Navbar = () => {
  const { user, googleSignIn, emailSignIn, logOut } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSignIn = async () => {
    try {
      await googleSignIn();
      toast.success("Successfully signed in.");
    } catch (error) {
      console.log(error);
      toast.error("Sign-in failed.");
    }
  };

  const handleSignOut = async () => {
    try {
      await logOut();
      toast.success("Successfully signed out.");
    } catch (error) {
      console.log(error);
      toast.error("Sign-out failed.");
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="w-full border-b border-b-gray-400/45 h-auto p-3">
        <div className="w-full mx-auto max-w-[94%]">
          <div className="w-full flex items-center justify-between">
            <div className="logo">
              <Image
                src={logolight}
                alt="logo"
                className="dark:hidden block w-44"
              />
              <Image
                src={logodark}
                alt="logo"
                className="hidden dark:block w-44"
              />
            </div>
            <div>
              <NavItems links={navLinks} />
            </div>
            <div className="flex cursor-pointer items-center gap-6">
              <div className="w-auto rounded-sm p-1 px-2 bg-gray-400/45 flex items-center justify-between gap-3">
                <input
                  type="text"
                  placeholder="Search For anything"
                  className="outline-none hidden placeholder:text-gray-500 text-gray-600 text-xs font-medium bg-transparent"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </div>
              {!user ? (
                <div className=" flex items-center gap-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5"
                    onClick={handleSignIn}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                    />
                  </svg>
                </div>
              ) : (
                <div className="relative flex items-center gap-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    />
                  </svg>
                  <img
                    src={user.photoURL}
                    alt="Profile Image"
                    width={30}
                    height={30}
                    className="rounded-full bg-slate-500 cursor-pointer"
                    onClick={() => setShowDropdown(!showDropdown)}
                  />
                  {showDropdown && (
                    <div className="absolute translate-y-8 p-2 right-0 mt-12 w-40 bg-white border rounded-lg shadow-lg z-10">
                      <ul>
                        <li
                          onClick={handleSignOut}
                          className="py-2 px-2 cursor-pointer text-sm flex items-center gap-3 rounded hover:bg-gray-200"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
                            />
                          </svg>

                          <p>Sign Out</p>
                        </li>
                        <li className="py-2 px-2 cursor-pointer hover:bg-gray-200">
                          <Link href="#/profile">Profile</Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
