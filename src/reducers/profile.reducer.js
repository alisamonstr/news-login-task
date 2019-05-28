import {PROFILE, LOADING } from "../actions/profile-actions";
import { LOGOUT } from "../actions/login-actions";

const initialState = {user: {}, loading: false, serverError:false}

export default function (state = initialState, action) {
switch(action.type){
  case PROFILE: {
    return {...state, user: action.payload, loading: false}
  }
  case LOADING: {
    return {...state, loading: true}
  }
  case LOGOUT: {
    return {...state, user: {}}
  }
  default: {
    return state
  }
}

}
