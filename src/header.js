import React from 'react'
import {Link} from "react-router-dom";
import { connect } from 'react-redux'
import styled from 'styled-components'
import { logout } from './actions/login-actions'


const StyledHeader = styled.div`
background: linear-gradient(45deg, #FBE8DC, #DCEEF7);
width: 100%;
height: 100px;
display: flex;
justify-content: center;
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
const StyledLink = styled(Link)`
text-decoration: none;
color: inherit;
`
const mapStateToProps = state => {
  const user = state.login.id.id
  return { user }
}
export class Header extends React.Component {
    logOut = () => {
this.props.dispatch(logout())
    }
    render() {
        return (
            <StyledHeader>
                <StyledButton><StyledLink to="/news">Новости</StyledLink></StyledButton>
              { this.props.user && <StyledButton><StyledLink to="/profile">Профиль</StyledLink></StyledButton> }
              { !this.props.user &&   <StyledButton><StyledLink to="/login">Вход</StyledLink></StyledButton> }
              {this.props.user && <StyledButton onClick={this.logOut}>Выход</StyledButton>}
            </StyledHeader>
        )
    }
}

export default connect(mapStateToProps)(Header)
