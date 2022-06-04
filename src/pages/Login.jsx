import React, { useState } from 'react';
import { AiFillEyeInvisible, AiFillEye, AiOutlineGoogle } from 'react-icons/ai';

export default function Login() {
  const [visibel, setVisible] = useState(false);
  return (
    <div className="bg-theme-primary flex items-center justify-center h-screen">
      <div className="drop-shadow-lg w-96 p-9 rounded-3xl bg-primary">
        <p className="text-secondary font-medium text-2xl text-center">Login</p>
        <p className="text-dark-color text-sm mt-6 mb-5">Hi, Welcome back!</p>
        <form action="">
          <div className="relative flex flex-col mb-6">
            <label className="text-grey-color text-sm" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              className="bg-primary border-b-[1px] border-solid border-dark-color pt-1 pb-1 focus:outline-none"
              id="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="relative flex flex-col mb-6">
            <label className="text-grey-color text-sm" htmlFor="password">
              Password
            </label>
            <input
              type={visibel ? 'text' : 'password'}
              className="bg-primary border-b-[1px] border-solid border-dark-color pt-1 pb-1 focus:outline-none"
              id="password"
              placeholder="Enter your password"
            />
            {visibel ? (
              <AiFillEye
                className="absolute top-7 right-1.5 text-lg cursor-pointer"
                onClick={() => setVisible(false)}
              />
            ) : (
              <AiFillEyeInvisible
                className="absolute top-7 right-1.5 text-lg cursor-pointer"
                onClick={() => setVisible(true)}
              />
            )}
          </div>
        </form>
        <p className="text-sm text-secondary flex justify-end cursor-pointer">Forgot password?</p>
        <button className="p-3 bg-secondary rounded-full w-full font-medium text-primary mt-5">Login</button>
        <div className="flex justify-between mt-5 mb-5 text-grey-color">
          <hr className="w-24 text-center mt-3 text-grey-color" />
          <p>Login with</p>
          <hr className="w-24 text-center mt-3 text-grey-color" />
        </div>
        <button className="p-3 bg-primary border-solid border-color-secondary border-2 rounded-full w-full font-medium text-secondary mt-4 flex justify-center">
          <AiOutlineGoogle className="mr-2 mt-[1px] font-bold text-xl" />
          Google
        </button>
        <div className="flex mt-6 justify-center text-sm">
          <p>Don’t have an account?</p>
          <p className="ml-1 text-secondary cursor-pointer">Sign Up</p>
        </div>
      </div>
    </div>
  );
}
