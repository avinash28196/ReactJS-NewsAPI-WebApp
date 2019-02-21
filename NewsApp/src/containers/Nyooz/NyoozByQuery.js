import React, { Component } from 'react';
import axios from 'axios';
import Post from '../../components/NewsCard';
import './Nyooz.css';
import { Row, Col} from 'reactstrap';
import {withRouter} from "react-router-dom";




class NyoozByQuery extends Component {

  constructor(props) {
      super();
      console.log('Hai'+ props.Query);
      this.state = {
        posts: [],
        query: window.location.search,
        selectedPostId: null,
      };
      console.log('Hai '+ this.state.query);
      // console.log(this.match.params.text);
      console.log(window.location.search);


  }




  componentDidMount (props) {

      console.log(this.props.query);

      axios.get( `https://newsapi.org/v2/everything${this.state.query}&from=2018-09-07&sortBy=publishedAt&apiKey=f47dd464d0f64fe4b27bf0dd19919881` )
          .then( response => {
              console.log(response.data)
              const posts = response.data.articles.slice(0,9);
              const updatedPosts = posts.map(post => {


                  return {
                      ...post,
                      author: 'Max',
                      todate: '18th Augest 2018',
                      // random_indicator: Math.random() * (2 - (-1)) + (-1),
                      // sentiment: random_indicator(math.random())
                  }
              });
              this.setState({posts: updatedPosts});
              console.log(updatedPosts);
          } );

  }


    createRows = () => {

        const posts = this.state.posts.map(post => {
            return <Post
                title={post.title}
                description={post.description}
                img={post.urlToImage}
                url={post.url}
                random_indicator={post.sentiment} />;
        });

        let rows = []
        for (let i = 0; i < posts.length; i+=3) {
        let children = []
            children.push(<Col  key={(i).toString()} sm="12" md={{ size: 4}}>{posts[i]} </Col>)
            children.push(<Col  key={(i+1).toString()} sm="12" md={{ size: 4}}> {posts[i+1]}</Col>)
            children.push(<Col  key={(i+2).toString()} sm="12" md={{ size: 4}}>  {posts[i+2]}  </Col>)
            rows.push(<Row key={"r"+ i.toString() }>{children} </Row>)

        }
        return rows
      }

      render () {
          return (

              <div className="row">
                <div className="col-sm">
                  {this.createRows()}
                </div>
              </div>
          );
      }


}

export default withRouter(NyoozByQuery);
