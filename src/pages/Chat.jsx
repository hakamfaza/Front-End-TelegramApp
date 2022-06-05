import React, { useState } from 'react';
import Card from '../components/card/Card';
import user from '../assets/users.png';
import Search from '../components/Search/Search';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { FiPlus } from 'react-icons/fi';
import Headers from '../components/main/Headers';
import Footer from '../components/main/Footer';
import Bubbles from '../components/bubbles/Bubbles';
import BubblesReceived from '../components/bubbles/BubblesReceived';

export default function Chat(params) {
  const [isMessage, setIsMessage] = useState(false);

  // const userClick = () => {};
  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="w-full col-span-1">
        <div className="fixed bg-white w-1/4 p-2">
          <div className="pl-5 pt-5 flex justify-between">
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
        </div>
        <div className="h-auto overflow-y-scroll fixed top-0 bottom-0 mt-[300px] left-0 bg-scroll">
          <Card onClick={() => setIsMessage(true)} />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <div className=" border-solid border-l-[1px] col-span-3 border-grey-color">
        {isMessage ? (
          <div className="relative overflow-hidden">
            <Headers />
            <div className="min-h-screen pt-28 pb-20 bg-primary">
              <Bubbles />
              <BubblesReceived />
              <Bubbles />
              <BubblesReceived />
              <Bubbles />
              <BubblesReceived />
            </div>
            <Footer />
          </div>
        ) : (
          <div className="flex justify-center items-center h-screen bg-primary">
            <p className="text-grey-color">Please select a chat to start messaging</p>
          </div>
        )}
      </div>
    </div>
  );
}
