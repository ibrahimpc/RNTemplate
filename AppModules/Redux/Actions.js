import {GET_SAMPLE_DATA, USER_LOGGED_IN} from './Types';

export const getSampleData = () => {
  return {
    type: GET_SAMPLE_DATA,
  };
};
export const isUserLoggedIn = loggedIn => {
  return {
    type: USER_LOGGED_IN,
    payload: loggedIn,
  };
};
