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
                    <div className="absolute translate-y-16 p-2 right-0 mt-12 w-36 bg-white dark:bg-black  border-gray-400/45 border rounded-lg shadow-lg z-10">
                      <ul className=" flex-col-reverse flex">
                        <li
                          onClick={handleSignOut}
                          className="p-2 cursor-pointer text-sm flex items-center gap-3 rounded hover:bg-gray-300 dark:hover:bg-zinc-800"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
                            />
                          </svg>

                          <p>Sign Out</p>
                        </li>
                        <hr></hr>
                        <li className="p-2 flex rounded items-center gap-3 cursor-pointer hover:bg-gray-300 dark:hover:bg-zinc-800">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                            />
                          </svg>

                          <Link className="text-sm" href="#/profile">
                            Profile
                          </Link>
                        </li>
                        <li className="p-2 flex rounded items-center gap-3 cursor-pointer hover:bg-gray-300 dark:hover:bg-zinc-800">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"
                            />
                          </svg>

                          <Link className="text-sm" href="./Vendor">
                            vendor
                          </Link>
                        </li>
                        <li className="p-2 flex rounded items-center gap-3 cursor-pointer hover:bg-gray-300 dark:hover:bg-zinc-800">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                            />
                          </svg>

                          <Link className="text-sm" href="./Customer">
                            Customer
                          </Link>
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
