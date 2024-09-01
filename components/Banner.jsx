import Link from 'next/link';
import React from 'react';

const Banner = () => {
  return (
    <div className="banner text-xl font-semibold ml-20 pt-6">
      <h1>
        <Link href="/">
          THE <span className="bg-black text-white px-1">PRODUCT</span> PLATFORM
        </Link>
      </h1>
    </div>
  );
};

export default Banner;
