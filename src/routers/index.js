import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Chat from '../pages/Chat';
import Login from '../pages/Login';
import Register from '../pages/Register';

const router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
};

export default router;
