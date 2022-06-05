import React from 'react';
import user from '../../assets/users.png';

export default function Bubbles() {
  return (
    <div className="flex relative p-3 w-9/12">
      <div className="relative w-20">
        <img src={user} alt="" className="w-16 h-16 rounded-xl ml-3 cursor-pointer absolute bottom-0 left-0" />
      </div>
      <div className="bg-secondary max-w-sm p-5 rounded-[35px] rounded-bl-xl ml-3">
        <p className="text-white">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos minus nihil error consequatur a amet nulla. Eius
          molestiae facere eos adipisci, atque nesciunt corrupti blanditiis quam, iste itaque, repellat libero.
        </p>
      </div>
    </div>
  );
}
