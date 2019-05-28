import {GET_NEWS, LOADING} from '../actions/news-actions'

const initialState  = {news: {}, loading: false, serverError:false}

export default function(state = initialState, action){
  switch(action.type) {
    case LOADING: {
      return {...state, loading: true}
    }
    case GET_NEWS: {
      return {...state, news: action.payload, loading: false}
    }

    default:
      return state
  }
}
