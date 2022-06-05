import React, { useState } from 'react';
import Card from '../components/card/Card';
import user from '../assets/users.png';
import Search from '../components/Search/Search';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { IoIosArrowBack, IoIosNotificationsOutline } from 'react-icons/io';
import { FiPlus } from 'react-icons/fi';
import { RiChatSettingsLine } from 'react-icons/ri';
import { MdOutlineLock, MdOutlineDevicesOther } from 'react-icons/md';
import { VscGraphLine } from 'react-icons/vsc';
import Headers from '../components/main/Headers';
import Footer from '../components/main/Footer';
import Menu from '../components/main/Menu';
import Bubbles from '../components/bubbles/Bubbles';
import BubblesReceived from '../components/bubbles/BubblesReceived';

export default function Chat(params) {
  const [isMessage, setIsMessage] = useState(false);
  const [isMenu, setIsMenu] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const onMenu = () => {
    if (isMenu) {
      setIsMenu(false);
    } else {
      setIsMenu(true);
    }
  };

  const onEditProfile = () => {
    if (isEdit) {
      setIsEdit(false);
    } else {
      setIsEdit(true);
    }
    setIsMenu(false);
  };

  // const userClick = () => {};
  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="w-full col-span-1">
        {isEdit ? (
          <>
            <div className="fixed bg-white w-1/4 p-5 pt-7">
              <div className="flex text-center">
                <IoIosArrowBack
                  onClick={() => onEditProfile()}
                  className="text-secondary text-xl ml-[-5px] cursor-pointer"
                />
                <p className="text-secondary text-xl text-center ml-24 mt-[-5px]">@wdlam</p>
              </div>
              <div className="flex justify-center items-center p-5 flex-col mt-3">
                <img src={user} alt="" className="w-20 h-20 rounded-3xl ml-3" />
                <h5 className="mt-3 text-xl font-medium">Gloria Mckinney</h5>
                <p className="tex-base text-grey-color">@wdlam</p>
              </div>
              <div className="overflow-y-scroll mt-60 fixed top-0 bottom-0 max-w-[325px] overflow-hidden">
                <p className="text-dark-color font-medium text-lg">Account</p>
                <input
                  id="phone"
                  type="text"
                  defaultValue={'+375(29)9638433'}
                  className="w-full mt-2 focus:outline-none"
                />
                <label htmlFor="phone" className="text-secondary text-sm mt-1 cursor-pointer">
                  Tap to change phone number
                </label>
                <div>
                  <hr className="text-grey-color mt-5" />
                  <input
                    id="username"
                    type="text"
                    defaultValue={'@wdlam'}
                    className="w-full focus:outline-none text-dark font-medium mt-5"
                  />
                  <label htmlFor="username" className="text-grey-color font-sm cursor-pointer">
                    Username
                  </label>
                  <hr className="text-grey-color mt-5" />
                </div>
                <div>
                  <textarea
                    id="bio"
                    type="text"
                    defaultValue={`I’m Senior Frontend Developer from Microsoft`}
                    className="w-full focus:outline-none text-dark font-medium mt-5 min-h-[20px] overflow-hidden max-h-20"
                  />
                  <label htmlFor="bio" className="text-grey-color font-sm cursor-pointer">
                    Bio
                  </label>
                </div>
                <div className="relative">
                  <p className="text-dark-color font-medium text-lg mt-5">Setting</p>
                  <ul className="mt-3">
                    <li className="flex text-dark text-center text-lg cursor-pointer">
                      <IoIosNotificationsOutline className="mt-1 mr-5 text-2xl" />
                      Notification and Sounds
                    </li>
                    <li className="flex text-dark text-center text-lg cursor-pointer mt-4">
                      <MdOutlineLock className="mt-1 mr-5 text-2xl" />
                      Privaty and Security
                    </li>
                    <li className="flex text-dark text-center text-lg cursor-pointer mt-4">
                      <VscGraphLine className="mt-1 mr-6 text-xl" />
                      Data and Stronge
                    </li>
                    <li className="flex text-dark text-center text-lg cursor-pointer mt-4">
                      <RiChatSettingsLine className="mt-1 mr-5 text-xl" />
                      Chat settings
                    </li>
                    <li className="flex text-dark text-center text-lg cursor-pointer mt-4">
                      <MdOutlineDevicesOther className="mt-1 mr-5 text-xl mb-10" />
                      Devices
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="fixed bg-white w-1/4 p-2">
              <div className="pl-5 pt-5 flex justify-between">
                <h3 className="text-secondary text-2xl font-medium">Telegram</h3>
                <HiOutlineMenuAlt1 className="text-secondary text-2xl mt-2 cursor-pointer" onClick={() => onMenu()} />
              </div>
              {isMenu ? <Menu onProfile={() => onEditProfile()} /> : <> </>}
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
            <div className="h-auto overflow-y-scroll fixed top-0 bottom-0 mt-[300px] left-0 bg-scroll z-10">
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
          </>
        )}
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
