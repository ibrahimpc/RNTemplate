import {RECEIVE_SAMPLE_DATA, USER_LOGGED_IN} from '../Types';

const initialState = {
  isUserLoggedIn: false,
  data: [],
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGGED_IN:
      return {...state, isUserLoggedIn: action.payload};
    case RECEIVE_SAMPLE_DATA:
      return {...state, data: action.payload};
    default:
      return state;
  }
};
export default appReducer;
