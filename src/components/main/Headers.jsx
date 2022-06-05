import React from 'react';
import user from '../../assets/users.png';
import { CgMenuGridO } from 'react-icons/cg';

export default function Headers() {
  return (
    <div className="h-24 drop-shadow-sm bg-white p-4">
      <div className="flex">
        <img src={user} alt="" className="w-16 h-16 rounded-xl ml-3 cursor-pointer" />
        <div className="ml-5 p-2">
          <h5 className="font-medium font-base text-dark-color">Mother</h5>
          <p className="text-secondary text-sm">online</p>
        </div>
        <CgMenuGridO className=" cursor-pointer flex justify-end text-secondary text-3xl right-4 absolute top-9" />
      </div>
    </div>
  );
}
