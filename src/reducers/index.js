import { combineReducers } from 'redux'
import news from './news.reduser'
import login from "./login.reducer"
import profile from "./profile.reducer"
import error from "./error.reducer"
import { reducer as formReducer } from 'redux-form';

export default combineReducers({news, login, profile, error, form: formReducer})
