const initialState = {
  isLoading: false,
  isError: false,
  data: []
};

const getListUser = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_LIST_USERS_PENDING':
      return { ...state, isLoading: true };
    case 'GET_LIST_USERS_FULLFILLED':
      return { ...state, isLoading: false, data: action.payload.data };
    case 'GET_LIST_USERS_REJECTED':
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};

export default getListUser;
