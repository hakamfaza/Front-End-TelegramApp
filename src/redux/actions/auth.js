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
