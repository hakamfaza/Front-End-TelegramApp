import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from '../pages/Register';

const router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default router;
