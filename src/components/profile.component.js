import React from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'
import {isEmpty, map} from 'lodash'
import {profile, loading} from "../actions/profile-actions";
import {PulseLoader} from "react-spinners";
import {serverError} from "../actions/error-actions";

const StyledProfile = styled.div`
background: linear-gradient(45deg, #FBE8DC, #DCEEF7);
width: 60%;
height: 700px;
margin-top: 60px;
margin-left: 300px;
margin-bottom: 60px;
box-shadow: 0 0 20px #B1AEAF;
padding: 30px;
text-align: left;
border-radius: 10px;
color: black;
`
const Language = styled.div`
margin-left: 10px;
`
const Icons = styled.a`
margin: 3px;
font-size: 20px;
color: rosybrown;
`
const InfoBox = styled.div`
background: white;
opacity: 0.5;
margin: 20px;
width: 70%;
padding: 30px;
border-radius: 10px;
box-shadow: 0 0 20px white;
border: solid 2px white;
`
const Message = styled.div`
background: white;
opacity: 0.5;
margin: 100px 150px 0 250px;
width: 300px;
height: 50px;
padding: 30px 30px 30px 85px;
border-radius: 10px;
box-shadow: 0 0 20px white;
border: solid 2px white;
`
const mapStateToProps = state => {
  const id = state.login.id.id
  const user = state.profile.user
  const loading = state.profile.loading
  return {id, user, loading}
}

export class Profile extends React.Component {
  componentDidMount() {
    this.props.dispatch(loading())
    fetch(`https://mysterious-reef-29460.herokuapp.com/api/v1/user-info/${this.props.id}`)
      .then(res => res.json())
      .then(json => this.props.dispatch(profile(json.data)))
      .catch(e => this.props.dispatch(serverError()))
  }

  icons = (social) => {
    return social.map(x => {
      if (x.label === "web") {
        return <Icons href={x.link} target="_blank" className="fas fa-globe-europe"> </Icons>
      }
      if (x.label === "vk") {
        return <Icons href={x.link} target="_blank" className="fab fa-vk"> </Icons>

      }
      if (x.label === "telegram") {
        return <Icons href={x.link} target="_blank" className="fab fa-telegram"> </Icons>

      }
      if (x.label === "youtube") {
        return <Icons href={x.link} target="_blank" className="fab fa-youtube-square"> </Icons>

      }
      if (x.label === "twitter") {
        return <Icons href={x.link} target="_blank" className="fab fa-twitter-square"> </Icons>

      }
      if (x.label === "twitch") {
        return <Icons href={x.link} target="_blank" className="fab fa-twitch"> </Icons>

      }
    })
  }

  render() {
    return (
      <div>
        <StyledProfile>
          <PulseLoader color="#a0bfbf" loading={this.props.loading}/>
          {!isEmpty(this.props.user) ?
            (
              <InfoBox>
                <div>{this.props.user.city}</div>
                <div>Знание языков:
                  {map(this.props.user.languages, (x =>
                      <Language> {x} </Language>
                  ))}

                </div>
                <div>
                  Ссылки:
                  {this.icons(this.props.user.social)}
                </div>

              </InfoBox>
            )
            : <Message>Пользователь не найден.</Message>}

        </StyledProfile>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Profile)
