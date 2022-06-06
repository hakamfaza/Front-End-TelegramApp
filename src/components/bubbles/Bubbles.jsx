import React from 'react';

export default function Bubbles(params) {
  return (
    <div className="p-3 w-full relative">
      <div className="flex justify-end">
        <div className="bg-white max-w-sm p-5 rounded-[35px] rounded-br-xl ml-3">
          <p className="text-dark-color">{params.message}</p>
        </div>
        <div className="relative w-20">
          <img src={params.img} alt="" className="w-16 h-16 rounded-xl ml-3 cursor-pointer absolute bottom-0 left-0" />
        </div>
      </div>
    </div>
  );
}
