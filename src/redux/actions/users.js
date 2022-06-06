import axios from 'axios';
import { GET_USER_FAILED, GET_USER_PENDING, GET_USER_SUCCESS } from './type';

export const getUser = () => async dispatch => {
  try {
    const token = localStorage.getItem('token');
    dispatch({
      type: GET_USER_PENDING
    });
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/users`, {
      headers: {
        token
      }
    });

    dispatch({
      type: GET_USER_SUCCESS,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: GET_USER_FAILED,
      payload: error.message
    });
  }
};
