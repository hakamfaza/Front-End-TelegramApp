import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { BsFillEmojiLaughingFill, BsFillRecordCircleFill } from 'react-icons/bs';

export default function Footer() {
  return (
    <div className="h-20 drop-shadow-lg bg-white p-4 fixed bottom-0 w-9/12">
      <div className="flex p-2">
        <input
          type="text"
          placeholder="Type your message..."
          className="bg-primary w-full p-2 pl-4 focus:outline-none pr-32 rounded-xl"
        />
        <div className="flex  w-28 justify-between items-center absolute right-9 top-8">
          <FiPlus className="text-secondary text-2xl cursor-pointer" />
          <BsFillEmojiLaughingFill className="text-secondary text-xl cursor-pointer" />
          <BsFillRecordCircleFill className="text-secondary text-xl cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
