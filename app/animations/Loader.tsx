
"use client"

import React, { useState, useEffect } from 'react';


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
              <div className="loader"></div>
          </div>
        </div>
      )}
    </>
  );
}

export default Loader;
