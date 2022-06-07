import React, { useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { AiFillEyeInvisible, AiFillEye, AiOutlineGoogle } from 'react-icons/ai';
import { register } from '../redux/actions/auth';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [visibel, setVisible] = useState(false);
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [getErorr, setErorr] = useState('');

  const onChange = (e, field) => {
    setForm({
      ...form,
      [field]: e.target.value
    });
  };

  const onClick = () => {
    const body = {
      username: form.username,
      email: form.email,
      password: form.password
    };

    if (form.username && form.email && form.password) {
      if (!form.username.match(/^[a-zA-Z ']*$/i)) {
        setErorr('name only alphabet!');
      } else if (
        !form.email.match(
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
      ) {
        setErorr('wrong email address!');
      } else if (
        !form.password.match(/[A-Z]/) ||
        !form.password.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/) ||
        form.password.length < 7
      ) {
        setErorr('password must contain uppercase letters, special characters and at least 8 letters.');
      } else if (form) {
        register(body)
          .then(response => {
            // console.log(response);
            navigate('/');
          })
          .catch(err => {
            setErorr(err.response.data.error.toLowerCase());
          });
      }
    } else {
      setErorr('all inputs must be filled!');
    }
  };

  const onNavigate = () => {
    navigate('/');
  };
  return (
    <div className="bg-theme-primary flex items-center justify-center h-screen">
      <div className="drop-shadow-lg w-96 p-9 rounded-3xl bg-primary">
        <div className="flex text-center">
          <IoIosArrowBack className="text-secondary text-xl ml-[-5px] cursor-pointer" onClick={() => onNavigate()} />
          <p className="text-secondary font-medium text-2xl text-center ml-24 mt-[-5px]">Register</p>
        </div>
        <p className="text-dark-color text-sm mt-6 mb-5">Let’s create your account!</p>
        <form action="">
          <div className="relative flex flex-col mb-6">
            <label className="text-grey-color text-sm" htmlFor="username">
              Name
            </label>
            <input
              type="text"
              className="bg-primary border-b-[1px] border-solid border-dark-color pt-1 pb-1 focus:outline-none"
              id="username"
              placeholder="Enter your name"
              onChange={e => onChange(e, 'username')}
              onClick={() => setErorr('')}
            />
          </div>
          <div className="relative flex flex-col mb-6">
            <label className="text-grey-color text-sm" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              className="bg-primary border-b-[1px] border-solid border-dark-color pt-1 pb-1 focus:outline-none"
              id="email"
              placeholder="Enter your email"
              onChange={e => onChange(e, 'email')}
              onClick={() => setErorr('')}
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
              onChange={e => onChange(e, 'password')}
              onClick={() => setErorr('')}
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
            {getErorr ? <p className="text-red-light text-[13px]">{getErorr.toLowerCase()}</p> : null}
          </div>
        </form>

        <button
          className="p-3 bg-secondary rounded-full w-full font-medium text-primary mt-5"
          onClick={() => onClick()}
        >
          Register
        </button>
        <div className="flex justify-between mt-5 mb-5 text-grey-color">
          <hr className="w-24 text-center mt-3 text-grey-color" />
          <p>Register with</p>
          <hr className="w-24 text-center mt-3 text-grey-color" />
        </div>
        <button className="p-3 bg-primary border-solid border-color-secondary border-2 rounded-full w-full font-medium text-secondary mt-4 flex justify-center">
          <AiOutlineGoogle className="mr-2 mt-[1px] font-bold text-xl" />
          Google
        </button>
      </div>
    </div>
  );
}
