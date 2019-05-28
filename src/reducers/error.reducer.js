import { ERROR} from "../actions/error-actions";

const initialState = {serverError:false}

export default function (state = initialState, action) {
  switch(action.type){
    case ERROR: {
      return {...state, serverError: true}
    }
    default: {
      return {...state}
    }
  }
}
