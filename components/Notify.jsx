import React, { useState, useRef } from 'react';
import { FaCheck } from 'react-icons/fa';
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Notify = () => {
  const [email, setEmail] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isEmailNotified, setIsEmailNotified] = useState(false);
  const [isAlreadyNotified, setIsAlreadyNotified] = useState(false);


  const notifyListRef = useRef([]);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@gmail\.com$/;
    return re.test(email);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setIsEmailNotified(false);
    setIsAlreadyNotified(false);
    setIsButtonDisabled(false); 
    setIsEmailValid(true); 
  };

  const handleNotifyClick = () => {
    if (isButtonDisabled || isLoading) return;

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      if (notifyListRef.current.includes(email)) {
        setIsAlreadyNotified(true);
        setIsButtonDisabled(true);
      } else if (validateEmail(email)) {
        notifyListRef.current.push(email); 
        setIsEmailNotified(true);
        setIsButtonDisabled(true);
      } else {
        setIsEmailValid(false);
        setIsButtonDisabled(false); // Keep the button enabled after showing the error
      }
    }, 2000); 
  };

  return (
    <div className='pt-10 p-6 rounded-md'>

      {/* for large devices  */}
      <p className='hidden sm:block text-sm text-gray-700'>
        {isEmailNotified
          ? 'Thank you! We will notify you when it’s live.'
          : 'Be the first to know! Share your email and we\'ll notify you when it\'s live.'}
      </p>

      {/* for mobile devices */}
      <p className="notify block sm:hidden text-sm text-gray-700">
         {isEmailNotified ? (
           'Thank you! We will notify you when it’s live.'
          ) : (
          <>
           Be the first to know! Share your email and we&apos;ll notify
           <span className='ml-2'>you when it&apos;s live.</span>
           </>
           )}

          </p>

         {/* for larger devices  */}
      <div className='hidden sm:block mt-4 space-x-4'>
        <input
          type='email'
          className={`border rounded-md p-2 w-80 text-gray-700 ${!isEmailValid || isAlreadyNotified ? 'border-red-500' : 'border-gray-300'}`}
          placeholder='Please enter your email id'
          value={email}
          onChange={handleEmailChange}
          disabled={isLoading}
        />
        <button
          className={`py-1 px-6 rounded-md  ${isLoading || isButtonDisabled ? 'bg-black text-gray-500 font-semibold text-xl cursor-not-allowed' : 'bg-black text-white'}`}
          onClick={handleNotifyClick}
          disabled={isLoading}
        >
          {isLoading ? (
            <AiOutlineLoading3Quarters className='animate-spin text-white' />
          ) : isEmailNotified ? (
            <FaCheck />
          ) : (
            'Notify Me'
          )}
        </button>
      </div>

       {/* for small devices  */}
       <div className='block sm:hidden mt-4 flex flex-col space-y-4'>
  <input
    type='email'
    className={`border rounded-md px-4 py-2 relative -top-36 w-full text-gray-700 ${!isEmailValid || isAlreadyNotified ? 'border-red-500' : 'border-gray-300'}`}
    placeholder='Please enter your email id'
    value={email}
    onChange={handleEmailChange}
    disabled={isLoading}
  />
  <button
    className={`py-2 w-full relative -top-36 rounded-md  ${isLoading || isButtonDisabled ? 'bg-black text-gray-500 font-semibold text-xl cursor-not-allowed' : 'bg-black text-white'}`}
    onClick={handleNotifyClick}
    disabled={isLoading}
  >
    {isLoading ? (
      <AiOutlineLoading3Quarters className='animate-spin text-white ml-40' />
    ) : isEmailNotified ? (
      <FaCheck className='ml-40' />
    ) : (
      'Notify Me'
    )}
  </button>
</div>

      {/* for mobile devices */}
      {!isEmailValid && <p className='text-red-500 block sm:hidden relative -top-36 '>Invalid email.</p>}
      {isAlreadyNotified && <p className='text-red-500 block sm:hidden mt-2 relative -top-36'>Your email is already in our notify list. Try with another email.</p>}

      {/* for larger devices  */}
      {!isEmailValid && <p className='text-red-500 hidden sm:block '>Invalid email.</p>}
      {isAlreadyNotified && <p className='text-red-500 hidden sm:block mt-2'>Your email is already in our notify list. Try with another email.</p>}
    </div>
  );
};

export default Notify;
