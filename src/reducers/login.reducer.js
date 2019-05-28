import { LOGIN, LOGOUT, ERROR } from "../actions/login-actions";

const initialState = {id:{}, error: false, serverError:false}

export default function (state = initialState, action) {
  switch(action.type){
    case LOGIN: {
      return {...state, id: action.payload, error: false}
    }
    case LOGOUT: {
      return { ...state, id: {} }
    }
    case ERROR: {
      return {...state, error: true}
    }
    default: {
      return state
    }
  }
}
