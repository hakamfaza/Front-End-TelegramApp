import React from 'react';
import { FiSettings } from 'react-icons/fi';
import { AiOutlineUser, AiOutlineUserAdd, AiOutlineQuestionCircle } from 'react-icons/ai';
import { BiBookmark } from 'react-icons/bi';
import { IoCallOutline } from 'react-icons/io5';

export default function Menu() {
  return (
    <div className="bg-secondary w-36 h-60 z-20 absolute rounded-3xl rounded-tr-xl ml-44">
      <ul className="p-5">
        <li className="flex text-white text-center text-lg cursor-pointer">
          <FiSettings className="mt-1 mr-2 text-lg" />
          Profile
        </li>
        <li className="flex text-white text-center text-lg mt-2 cursor-pointer">
          <AiOutlineUser className="mt-1 mr-2 text-lg" />
          Setting
        </li>
        <li className="flex text-white text-center text-lg mt-2 cursor-pointer">
          <IoCallOutline className="mt-1 mr-2 text-lg" />
          Call
        </li>
        <li className="flex text-white text-center text-lg mt-2 cursor-pointer">
          <BiBookmark className="mt-1 mr-2 text-lg" />
          Save
        </li>
        <li className="flex text-white text-center text-lg mt-2 cursor-pointer">
          <AiOutlineUserAdd className="mt-1 mr-2 text-lg" />
          Invite
        </li>
        <li className="flex text-white text-center text-lg mt-2 cursor-pointer">
          <AiOutlineQuestionCircle className="mt-1 mr-2 text-lg" />
          FAQ
        </li>
      </ul>
    </div>
  );
}
