import React, { useState } from 'react';
import Card from '../components/card/Card';
import user from '../assets/users.png';
import Search from '../components/Search/Search';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { FiPlus } from 'react-icons/fi';

export default function Chat(params) {
  const [isMessage, setIsMessage] = useState(false);

  const userClick = () => {};
  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="w-full">
        <div className="p-5 flex justify-between">
          <h3 className="text-secondary text-2xl font-medium">Telegram</h3>
          <HiOutlineMenuAlt1 className="text-secondary text-2xl mt-2 cursor-pointer" />
        </div>
        <div className="flex justify-center items-center p-5 flex-col">
          <img src={user} alt="" className="w-20 h-20 rounded-3xl ml-3" />
          <h5 className="mt-3 text-xl font-medium">Gloria Mckinney</h5>
          <p className="tex-base text-grey-color">@wdlam</p>
        </div>
        <div className="pl-5 flex">
          <Search />
          <FiPlus className="text-3xl text-secondary mt-3" />
        </div>
        <Card onClick={() => setIsMessage(true)} />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="bg-secondary col-span-3">
        {isMessage ? (
          <div>Hallo sosoo</div>
        ) : (
          <div>
            <div>Hallo</div>
          </div>
        )}
      </div>
    </div>
  );
}
