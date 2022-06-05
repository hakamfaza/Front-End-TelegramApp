import React from 'react';
import { FiSettings } from 'react-icons/fi';
import { AiOutlineUser, AiOutlineUserAdd, AiOutlineQuestionCircle } from 'react-icons/ai';
import { BiBookmark } from 'react-icons/bi';
import { IoCallOutline } from 'react-icons/io5';

export default function Menu(params) {
  return (
    <div className="bg-secondary w-36 h-60 z-20 absolute rounded-3xl rounded-tr-xl ml-44">
      <ul className="p-5">
        <li className="flex text-white text-center text-lg cursor-pointer" onClick={params.onProfile}>
          <AiOutlineUser className="mt-1 mr-2 text-lg" />
          Profile
        </li>
        <li className="flex text-white text-center text-lg mt-2 cursor-pointer" onClick={params.onSetting}>
          <FiSettings className="mt-1 mr-2 text-lg" />
          Setting
        </li>
        <li className="flex text-white text-center text-lg mt-2 cursor-pointer" onClick={params.onCall}>
          <IoCallOutline className="mt-1 mr-2 text-lg" />
          Call
        </li>
        <li className="flex text-white text-center text-lg mt-2 cursor-pointer" vonClick={params.Save}>
          <BiBookmark className="mt-1 mr-2 text-lg" />
          Save
        </li>
        <li className="flex text-white text-center text-lg mt-2 cursor-pointer" onClick={params.onInvite}>
          <AiOutlineUserAdd className="mt-1 mr-2 text-lg" />
          Invite
        </li>
        <li className="flex text-white text-center text-lg mt-2 cursor-pointer" onClick={params.onFaq}>
          <AiOutlineQuestionCircle className="mt-1 mr-2 text-lg" />
          FAQ
        </li>
      </ul>
    </div>
  );
}
