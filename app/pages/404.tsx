// pages/404.tsx

import React from 'react';
import Link from 'next/link';

const Custom404 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100">404 - Page Not Found</h1>
      <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">Oops! The page you're looking for doesn't exist.</p>
      <Link href="/">
        <a className="mt-4 px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">
          Go back home
        </a>
      </Link>
    </div>
  );
};

export default Custom404;
