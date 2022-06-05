import React from 'react';
import user from '../../assets/users.png';

export default function BubblesReceived() {
  return (
    <div className="p-3 w-full relative">
      <div className="flex justify-end">
        <div className="bg-white max-w-sm p-5 rounded-[35px] rounded-br-xl ml-3">
          <p className="text-dark-color">Lorem ipsum dolor sit amet consectetur,</p>
        </div>
        <div className="relative w-20">
          <img src={user} alt="" className="w-16 h-16 rounded-xl ml-3 cursor-pointer absolute bottom-0 left-0" />
        </div>
      </div>
    </div>
  );
}
