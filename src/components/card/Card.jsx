import React from 'react';
import user from '../../assets/users.png';

export default function Card() {
  return (
    <div className="flex p-3">
      <img src={user} alt="user" className="w-16 h-16 rounded-xl ml-3" />
      <div className="p-2 ml-2">
        <p className="text-dark-color text-base font-medium max-w-sm">Thersa Weeb</p>
        <p className="text-secondary text-sm">Lorem ipsum dolor sit</p>
      </div>
      <div className="ml-4">
        <p className="text-grey-color text-sm mt-3">15:00</p>
        <p className="bg-secondary text-primary w-auto h-5 text-center text-sm rounded-full">1</p>
      </div>
    </div>
  );
}
