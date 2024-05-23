"use client"
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
