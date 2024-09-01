"use client"

import React, { useState, useEffect } from "react";
import { BsRocketTakeoff } from "react-icons/bs";
import Notify from "./Notify";
import LiveNow from "./LiveNow";
import Banner from "./Banner";

const HomePage = () => {
  const [timeLeft, setTimeLeft] = useState(30);
  const [showModal, setShowModal] = useState(false);
  const [showTimer, setShowTimer] = useState(false);

  useEffect(() => {
    if (showTimer && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
    if (timeLeft === 0) {
      setShowModal(true);
    }
  }, [timeLeft, showTimer]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTimer(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {!showModal ? (
        <div className="blob-container">
          <div className="blob blob1"></div>
          <div className="blob blob2"></div>
          <div className="h-screen">
            <Banner />
            <div className="flex justify-center items-center mt-20">
              <div className="flex flex-col items-center space-y-2">

                {/* for big screens  */}
                <div className="hidden sm:flex items-center space-x-2">
                  <BsRocketTakeoff className="animate-rocket text-5xl" />
                  <h1 className="text-5xl font-semibold">Launching New Module Soon!</h1>
                  </div>



                {/* for small devices  */}
                <div className="block sm:hidden relative -top-16">
                  <h1 className="text-4xl font-semibold">Launching New Module</h1>
                <div className="flex justify-center items-center space-x-2 mt-2">
                  <h1 className="text-4xl font-semibold">Soon!</h1>
                <BsRocketTakeoff className="animate-rocket text-4xl" />
                </div>
                </div>

                {/* for big screens  */}
                <div className="hidden sm:block text-center mt-4">
                  Exciting things are in the works! We're currently{" "}
                  <span className="font-bold">Crafting a new feature</span> for you.
                  <br /> Keep an eye out for updates - We're working to make it
                  available soon!
                </div>

                {/*  for small devices  */}
                <div className="block sm:hidden text-center mt-4 relative -top-16">
                  We are{" "}
                  <span className="font-bold">Crafting a new features</span> for you.
                  <br /> Keep an eye out for updates - We're <br /> working to make it
                  available soon!
                </div>

                <div className="Reveal text-center pt-10 font-bold text-2xl tracking-widest pb-10">
                  GET READY FOR THE REVEAL!
                </div>
                {showTimer && (
                  <div className="timer bg-gradient-to-b from-pink-200 to-purple-200 py-6 px-8 rounded-lg shadow-lg">
                    <div className="flex space-x-8 text-center">
                      <div>
                        <p className="text-5xl font-bold">00</p>
                        <p className="text-lg">Hours</p>
                      </div>
                      <div className="text-5xl font-bold">:</div>
                      <div>
                        <p className="text-5xl font-bold">00</p>
                        <p className="text-lg">Minutes</p>
                      </div>
                      <div className="text-5xl font-bold">:</div>
                      <div>
                        <p className="text-5xl font-bold">{String(timeLeft).padStart(2, "0")}</p>
                        <p className="text-lg">Seconds</p>
                      </div>
                    </div>
                  </div>
                )}
                <Notify />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="blob-container">
          <div className="blob blob1"></div>
          <div className="blob blob2"></div>
          <LiveNow />
        </div>
      )}
    </>
  );
};

export default HomePage;
