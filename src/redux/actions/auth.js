import axios from 'axios';

export const register = data => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/register`, data, {})
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const login = data => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/login`, data, {})
      .then(response => {
        resolve(response);
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('id', response.data.data.id);
      })
      .catch(error => {
        reject(error);
      });
  });
};
