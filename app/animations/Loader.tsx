
"use client"

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import Spinner from "../assets/spinner.gif"

const Loader = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []); 

  return (
    <>
      {visible && (
        <div>
          <div className="  flex fixed top-0 z-50 h-screen w-full bg-white dark:bg-black items-center justify-center">
            <Image src={Spinner} alt='' className=' w-[200px]'/>
          </div>
        </div>
      )}
    </>
  );
}

export default Loader;
