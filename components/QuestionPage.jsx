import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MdArrowUpward } from "react-icons/md";

const QuestionPage = () => {
  return (
    <div className='bg-black h-screen relative'>
      <div className="product text-xl font-semibold ml-20 pt-6">
        <h1 className='text-white'>
            <Link href="/">
          THE <span className="bg-white text-black px-1">PRODUCT</span> PLATFORM
          </Link>
        </h1>
      </div>
      <div className='absolute top-6 right-10'>
        <Image
          src="/profile-logo.png"
          alt='profile'
          width={24}
          height={24}
        />
      </div>
      <hr className='mt-5' />
      <div className='absolute bottom-16 right-6 bg-gray-800 p-3 rounded-full'>
        <MdArrowUpward className='text-white text-2xl' />
      </div>
    </div>
  );
};

export default QuestionPage;
