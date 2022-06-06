import axios from 'axios';

export const getUser = () => {
  const token = localStorage.getItem('token');
  return {
    type: 'GET_LIST_USERS',
    payload: axios({
      url: `${process.env.REACT_APP_API_URL}/users`,
      headers: {
        token
      },
      method: 'GET'
    })
  };
};
