import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { io } from 'socket.io-client';

import Card from '../components/card/Card';
import Search from '../components/Search/Search';
import Headers from '../components/main/Headers';
import Footer from '../components/main/Footer';
import Menu from '../components/main/Menu';
import Bubbles from '../components/bubbles/Bubbles';
import BubblesReceived from '../components/bubbles/BubblesReceived';

import { useDispatch, useSelector } from 'react-redux';
import { getDetailUser, getUser, updatePhoto, updateUser } from '../redux/actions/users';

import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { IoIosArrowBack, IoIosNotificationsOutline } from 'react-icons/io';
import { FiPlus } from 'react-icons/fi';
import { RiChatSettingsLine } from 'react-icons/ri';
import { MdOutlineLock, MdOutlineDevicesOther } from 'react-icons/md';
import { VscGraphLine } from 'react-icons/vsc';
import { RiImageEditLine } from 'react-icons/ri';
import { deleteMessage } from '../redux/actions/chats';

export default function Chat(params) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const profile = JSON.parse(localStorage.getItem('user'));
  const receiver = JSON.parse(localStorage.getItem('receiver'));

  const [socketio, setSocketio] = useState(null);
  const [isMessage, setIsMessage] = useState(false);
  const [isMenu, setIsMenu] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [getPhoto, setPhoto] = useState('');
  const [getActiveReceiver, setActiveReceiver] = useState({});
  const [getQuery, setQuery] = useState('');
  const [listChat, setListChat] = useState([]);

  const [idMessage, setIdMessage] = useState('');
  console.log(idMessage);

  useEffect(() => {
    dispatch(getDetailUser());
  }, []);
  const detail = useSelector(state => {
    return state.detail.data;
  });
  console.log(detail);

  const [form, setForm] = useState({
    username: detail.username,
    phone: detail.phone,
    shortName: detail.short_name,
    bio: detail.bio,
    email: detail.email
  });

  const onChangePhoto = (e, field) => {
    setPhoto({
      photo: e.target.files
    });
  };

  const onChange = (e, field) => {
    e.preventDefault();
    setForm({
      ...form,
      [field]: e.target.value
    });
  };

  const onSave = () => {
    const body = {
      ...form
    };

    console.log(getPhoto.photo);
    if (getPhoto) {
      const changePhoto = new FormData();
      changePhoto.append('photo', getPhoto.photo[0]);

      updatePhoto(changePhoto)
        .then(response => {
          console.log(response);
        })
        .catch(err => {
          console.log(err);
        });
      return;
    }
    updateUser(body)
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    dispatch(getUser(getQuery));
  }, [dispatch, getQuery]);

  const users = useSelector(state => {
    return state.user;
  });

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
  useEffect(() => {
    const socket = io(process.env.REACT_APP_API_URL);
    socket.on('send-message-response', response => {
      const receiver = JSON.parse(localStorage.getItem('receiver'));
      if (receiver.username === response[0].sender || receiver.username === response[0].receiver) {
        console.log(response);
        setListChat(response);
      }
    });
    setSocketio(socket);
  }, []);

  // Delete Message
  const onDelete = e => {
    setIdMessage(e);
    deleteMessage(idMessage)
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const [message, setMessage] = useState('');
  const onSubmitMessage = e => {
    e.preventDefault();
    const receiver = JSON.parse(localStorage.getItem('receiver'));

    const payload = {
      sender: profile.username,
      senderId: profile.id,
      receiver: receiver.username,
      receiverId: receiver.id,
      message
    };
    setListChat([...listChat, payload]);

    const data = {
      sender: profile.id,
      receiver: receiver.id,
      isRead: false,
      date: new Date(),
      chatType: 'text',
      message
    };
    socketio.emit('send-message', data);
    setMessage('');
  };

  const selectReceiver = item => {
    setListChat([]);
    setActiveReceiver(item);
    setIsMessage(true);
    localStorage.setItem('receiver', JSON.stringify(item));
    socketio.emit('join-room', profile);
    const data = {
      sender: profile.id,
      receiver: item.id
    };
    socketio.emit('chat-history', data);
  };
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
                <p className="text-secondary text-xl text-center ml-24 mt-[-5px]">{detail.short_name}</p>
              </div>
              <div className="flex justify-center items-center p-5 flex-col mt-3">
                <img
                  src={
                    detail.photo
                      ? `${process.env.REACT_APP_API_URL}/${detail.photo}`
                      : `${process.env.REACT_APP_API_URL}/profile.jpg`
                  }
                  alt=""
                  className="w-20 h-20 rounded-3xl ml-3"
                />
                <label htmlFor="photo" className="text-xl cursor-pointer">
                  <RiImageEditLine />
                </label>
                <input type="file" id="photo" hidden onChange={e => onChangePhoto(e, 'photo')} />
                <input
                  className="mt-3 text-xl font-medium text-center border-b-[1px] border-solid border-dark-color pb-1 focus:outline-none"
                  defaultValue={detail.username}
                  onChange={e => onChange(e, 'username')}
                />
                {/* <p className="tex-base text-grey-color mt-2">{detail.short_name}</p> */}
              </div>
              <div className="flex justify-center mt-[-10px]">
                <button
                  className="bg-secondary rounded-sm text-white font-medium p-2 pl-8 pr-8 flex items-center justify-end"
                  onClick={e => onSave(e)}
                >
                  Save
                </button>
              </div>
              <div className="overflow-y-scroll mt-80 fixed top-0 bottom-0 max-w-[325px] overflow-hidden">
                <p className="text-dark-color font-medium text-lg">Account</p>
                <input
                  id="phone"
                  type="text"
                  defaultValue={detail.phone}
                  onChange={e => onChange(e, 'phone')}
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
                    defaultValue={detail.short_name}
                    onChange={e => onChange(e, 'shortName')}
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
                    defaultValue={detail.bio}
                    onChange={e => onChange(e, 'bio')}
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
                <img
                  src={
                    detail.photo
                      ? `${process.env.REACT_APP_API_URL}/${detail.photo}`
                      : `${process.env.REACT_APP_API_URL}/profile.jpg`
                  }
                  alt=""
                  className="w-20 h-20 rounded-3xl ml-3"
                />
                <h5 className="mt-3 text-xl font-medium">{detail.username}</h5>
                <p className="tex-base text-grey-color">{detail.short_name}</p>
              </div>
              <div className="pl-5 flex">
                <Search onChange={e => setQuery(e.target.value)} />
                <FiPlus className="text-3xl text-secondary mt-3" />
              </div>
            </div>
            <div className="h-auto overflow-y-scroll fixed top-0 bottom-0 mt-[300px] left-0 bg-scroll z-10">
              {users.isLoading ? (
                <div>Loading</div>
              ) : users.data.data ? (
                users.data.data.map((item, index) => {
                  return item.id !== profile.id ? (
                    <div key={index}>
                      <Card
                        onClick={() => selectReceiver(item)}
                        username={item.username}
                        img={
                          item.photo
                            ? `${process.env.REACT_APP_API_URL}/${item.photo}`
                            : `${process.env.REACT_APP_API_URL}/profile.jpg`
                        }
                      />
                    </div>
                  ) : null;
                })
              ) : null}
            </div>
          </>
        )}
      </div>
      <div className=" border-solid border-l-[1px] col-span-3 border-grey-color">
        {isMessage ? (
          <div className="relative overflow-hidden">
            <Headers
              img={
                receiver.photo
                  ? `${process.env.REACT_APP_API_URL}/${receiver.photo}`
                  : `${process.env.REACT_APP_API_URL}/profile.jpg`
              }
              user={receiver.username}
            />
            <div className="min-h-screen pt-28 pb-20 bg-primary">
              {listChat.map((item, index) => (
                <div key={index}>
                  {item.sender === profile.username ? (
                    <Bubbles
                      message={item.message}
                      img={
                        item.sender_photo
                          ? `${process.env.REACT_APP_API_URL}/${item.sender_photo}`
                          : `${process.env.REACT_APP_API_URL}/profile.jpg`
                      }
                      delete={() => onDelete(item.id)}
                    />
                  ) : (
                    <BubblesReceived
                      message={item.message}
                      img={
                        item.receiver_photo
                          ? `${process.env.REACT_APP_API_URL}/${item.receiver_photo}`
                          : `${process.env.REACT_APP_API_URL}/profile.jpg`
                      }
                    />
                  )}
                </div>
              ))}
            </div>
            <Footer onSubmit={onSubmitMessage} onChange={e => setMessage(e.target.value)} value={message} />
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
