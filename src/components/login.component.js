import React from 'react'
import styled from 'styled-components'
import {withRouter} from 'react-router-dom'
import {Field, reduxForm, reset} from 'redux-form'
import {connect} from 'react-redux'
import {login, error} from '../actions/login-actions'
import {serverError} from '../actions/error-actions'


const StyledLogin = styled.form`
margin: 100px;
height: 250px;
width: 300px;
display: flex;
background: linear-gradient(45deg, #FBE8DC, #DCEEF7);
flex-direction: column;
align-content: center;
padding-left: 30px;
padding-top: 30px;
box-shadow: 0 0 10px #B1AEAF;
border-radius: 10px;
`
const StyledInput = styled(Field)`
width: 200px;
height: 20px;
border: 0;
padding: 20px;
margin: 10px;
`
const StyledButton = styled.button`
height: 40px;
width: 75px;
border: 0;
margin: 20px;
background: #D9EFF5; 
box-shadow: 0 0 10px #B1AEAF;
border-radius: 5px;
`
const ErrorMessage = styled.div`
color: red;
margin-left: -30px;
`
const mapStateToProps = state => {
  const error = state.login.error
  return {error}
}
const submit = (values, dispatch, props) => {
  console.log(values)
  const {history} = props

  fetch("https://mysterious-reef-29460.herokuapp.com/api/v1/validate", {
    method: 'post',
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(values)
  })
    .then(res => res.json())
    .then(json =>
      json.data.id ? dispatch(login(json.data)) : dispatch(error()),
    dispatch(reset('postLogin')))
    .then(res => history.push("/profile"))
    .catch((e) => dispatch(serverError()))
}

export class Login extends React.Component {

  render() {
    const {handleSubmit} = this.props

    return (
      <div>
        <StyledLogin onSubmit={handleSubmit}>
          <StyledInput placeholder="email" component="input" name="email" type="text"/>
          <StyledInput placeholder="password" component="input" name="password" type="password"/>
          {this.props.error && <ErrorMessage>Неправильно введен логин или пароль</ErrorMessage>}
          <StyledButton type="submit">Войти</StyledButton>
        </StyledLogin>
      </div>
    )
  }
}

Login = connect(mapStateToProps)(Login)
export default reduxForm({
  form: 'postLogin',
  onSubmit: submit,
})(withRouter(Login))
