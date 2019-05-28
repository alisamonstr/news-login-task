import React from 'react'
import {connect} from 'react-redux'
import styled from "styled-components";
import {getNews, loading} from "../actions/news-actions"
import { PulseLoader} from 'react-spinners';
import {serverError} from "../actions/error-actions";

const StyledNews = styled.div`
background: linear-gradient(45deg, #FBE8DC, #DCEEF7);
width: 60%;
height: 700px;
margin-top: 60px;
margin-left: 300px;
margin-bottom: 60px;
box-shadow: 0 0 20px #B1AEAF;
padding: 30px;
text-align: center;
display: flex;
justify-content: center;
border-radius: 10px;
`
const OneNews = styled.div`
background: white;
opacity: 0.5;
margin: 20px;
width: 70%;
padding: 30px;
border-radius: 10px;
box-shadow: 0 0 20px white;
border: solid 2px white;
`

const mapStateToProps = state => {
 const news = state.news.news
  const loading = state.news.loading
  return { news, loading }
}

export class News extends React.Component {
    componentDidMount() {
      this.props.dispatch(loading())
        fetch('https://mysterious-reef-29460.herokuapp.com/api/v1/news')
            .then(res => res.json())
            .then(json => {
              this.props.dispatch(getNews(json))
            })
          .catch(e => this.props.dispatch(serverError()))
    }

    render() {
        return (
            <div>
              <StyledNews>
                <PulseLoader color="#a0bfbf" loading={this.props.loading}/>
                {this.props.news.data &&this.props.news.data.map( (x) => (
                    <OneNews>
                      <div><strong> {x.title} </strong></div>
                      <div>{x.text}</div>
                    </OneNews>
                  ))}
                </StyledNews>
            </div>
        )
    }
}

export default connect(mapStateToProps)(News)
