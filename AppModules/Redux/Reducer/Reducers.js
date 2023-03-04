import {GET_SAMPLE_DATA, RECEIVE_SAMPLE_DATA} from '../Types';

const initialState = {
  data: [],
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    // case GET_SAMPLE_DATA:
    //   console.log(action.payload, '111111');
    //   return {...state, data: action.payload};
    case RECEIVE_SAMPLE_DATA:
      return {...state, data: action.payload};
    default:
      return state;
  }
};
export default appReducer;
