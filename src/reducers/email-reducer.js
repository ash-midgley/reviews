import { SEND_RESET_TOKEN, EMAIL_ERROR, CLEAR_ERROR } from '../actions/types';

const initialState = {
  resetTokenSent: null,
  error: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SEND_RESET_TOKEN:
      return {
        ...state,
        resetTokenSent: true
      };
    case EMAIL_ERROR:
      return {
        ...state,
        error: action.error
      };
    case CLEAR_ERROR:
      return {
        ...state,
        error: null
      };
    default:
      return state;
  }
}