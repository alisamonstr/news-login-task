import React from 'react'
import styled from 'styled-components'

const StyledError = styled.div`
background: linear-gradient(45deg, #FBE8DC, #DCEEF7);
width: 60%;
height: 500px;
margin-top: 60px;
margin-left: 300px;
margin-bottom: 60px;
box-shadow: 0 0 20px #B1AEAF;
padding: 30px;
text-align: left;
border-radius: 10px;
color: black;
`
const InfoBox = styled.div`
margin: 50px 0 100px 250px;
padding: 50px;
border: 5px solid #F9F5F2;
border-radius: 30px;
width: 300px;
`
const StyledImg = styled.img`
width: 300px;
margin-top: 20px;
`

export class Error extends React.Component {
  render() {
    return (
      <StyledError>
        <InfoBox>

          <strong>Сервер недоступен. Вернитесь позже</strong>
          <div> </div>
          <StyledImg src="http://pngimg.com/uploads/cat/cat_PNG50485.png"/>
        </InfoBox>
      </StyledError>
    )
  }
}
