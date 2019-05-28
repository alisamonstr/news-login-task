import React from 'react';
import './App.css';
import {Switch, Route, withRouter} from "react-router-dom";
import {connect} from 'react-redux'
import Header from "./header";
import Profile from "./components/profile.component";
import News from './components/news.component'
import Login from './components/login.component'
import {Error} from './components/server-error.component'

const mapStateToProps = state => {
  const user = state.login.id.id
  const error = state.error.serverError
  return {user, error}
}

function App(props) {
  if(props.error){
    return <Error/>
  }
  return (
    <div className="App">
      <Header/>
        <Switch>
          <Route path="/news" exact component={News}/>
          {props.user && <Route path="/profile" exact component={Profile}/>}
          {!props.user && <Route path="/login" exact component={Login}/>}
          <Route path="/" component={News}/>
        </Switch>
    </div>
  );
}


export default withRouter(connect(mapStateToProps)(App));
