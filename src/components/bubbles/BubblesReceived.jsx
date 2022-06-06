import React from 'react';

export default function BubblesReceived(params) {
  return (
    <div className="flex relative p-3 w-9/12">
      <div className="relative w-20">
        <img src={params.img} alt="" className="w-16 h-16 rounded-xl ml-3 cursor-pointer absolute bottom-0 left-0" />
      </div>
      <div className="bg-secondary max-w-sm p-5 rounded-[35px] rounded-bl-xl ml-3">
        <p className="text-white">{params.message}</p>
      </div>
    </div>
  );
}
