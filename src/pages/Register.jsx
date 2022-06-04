import React, { useState } from 'react';
import '../styles/auth.css';
import { IoIosArrowBack } from 'react-icons/io';
import { AiFillEyeInvisible, AiFillEye, AiOutlineGoogle } from 'react-icons/ai';

export default function Register() {
  const [visibel, setVisible] = useState(false);
  return (
    <div className="auth">
      <div className="container">
        <div className="card shadow">
          <div className="header">
            <IoIosArrowBack className="iconBack" />
            <p className="title">Register</p>
          </div>
          <p className="text">Let’s create your account!</p>
          <form action="">
            <div className="form">
              <label className="label" htmlFor="username">
                Name
              </label>
              <input type="text" className="input" id="username" placeholder="Enter your name" />
            </div>
            <div className="form">
              <label className="label" htmlFor="email">
                Email
              </label>
              <input type="email" className="input" id="email" placeholder="Enter your email" />
            </div>
            <div className="form">
              <label className="label" htmlFor="password">
                Name
              </label>
              <input
                type={visibel ? 'text' : 'password'}
                className="input"
                id="password"
                placeholder="Enter your password"
              />
              {visibel ? (
                <AiFillEye className="isShow" onClick={() => setVisible(false)} />
              ) : (
                <AiFillEyeInvisible className="isShow" onClick={() => setVisible(true)} />
              )}
            </div>
          </form>
          <button className="btn">Register</button>
          <div className="with">
            <hr className="hr" />
            <p>Register with</p>
            <hr className="hr" />
          </div>
          <button className="btnGoogle">
            <AiOutlineGoogle className="iconGoogle" />
            Google
          </button>
        </div>
      </div>
    </div>
  );
}
