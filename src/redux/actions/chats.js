import axios from 'axios';

export const deleteMessage = id => {
  return new Promise((resolve, reject) => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/chats/${id}`, {})
      .then(response => {
        resolve(response);
      })
      .catch(err => {
        reject(err);
      });
  });
};
