"use client";

import React, { useEffect } from 'react';
import Banner from './Banner';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const LiveNow = () => {
    const router = useRouter();

    useEffect(() => {
        const redirectTimer = setTimeout(() => {
            router.push('/QuestionPage');
        }, 3000);

        return () => {
            clearTimeout(redirectTimer);
        };
    }, [router]);

    return (
        <>
            <Banner />
            <div className='flex justify-center items-center mt-40'>
                <div className='Live card bg-gradient-to-b from-pink-200 to-purple-200 py-10 px-10 rounded-lg shadow-lg text-center'>
                    <h1 className='text-3xl font-bold mb-4'>We are Live Now</h1>
                    <div className="text-lg">
                        Our new feature is now{' '}
                        <span className="font-bold">Live and ready</span> for you.
                        <br /> to explore. Go ahead and give it a try.
                    </div>
                    <button className='bg-black text-white text-xl px-6 py-2 mt-8 rounded-lg'>
                        <Link href="/QuestionPage">
                            Get Started
                        </Link>
                    </button>
                </div>
            </div>
        </>
    );
};

export default LiveNow;
