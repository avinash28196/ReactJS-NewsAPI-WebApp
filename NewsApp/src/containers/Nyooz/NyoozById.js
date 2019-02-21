import React, { Component } from 'react';
import axios from 'axios';
import Post from '../../components/NewsCard';
import './Nyooz.css';
import { Row, Col} from 'reactstrap';
import {withRouter} from "react-router-dom";

// import querystring from 'query-string';



class NyoozById extends Component {

  constructor({match}) {
      super();

      this.state = {
        posts: [],
        sources: match.params.text,
        selectedPostId: null,
      };
      console.log(this.state.sources);
      console.log(window.location.search);

  }




  componentDidMount (props) {

      axios.get( `https://newsapi.org/v2/top-headlines?sources=${this.state.sources}&apiKey=f47dd464d0f64fe4b27bf0dd19919881` )
         // axios.get( `http://localhost:8000/api/v1/nyooz/` )
          .then( response => {
              console.log(response.data)
              const posts = response.data.articles.slice(0,9);
              const updatedPosts = posts.map(post => {


                  return {
                      ...post,
                      author: 'Max',
                      todate: '18th Augest 2018',
                      sentiment: Math.random() * (2 - (-1)) + (-1),
                      //sentiment: random_indicator(Math.random())
                  }
              });
              this.setState({posts: updatedPosts});
              console.log(updatedPosts);
          } );

  }





    postSelectedHandler = (title) => {
        this.setState({selectedPostId: title});
    }

    createRows = () => {
        /*
        * Creates bootstrap rows in terms of grid format
        * <Row>
        *   <Col /> <Col/> <Col/>
        * </Row>
        *  tutorial link : https://blog.cloudboost.io/for-loops-in-react-render-no-you-didnt-6c9f4aa73778
        * */

        const posts = this.state.posts.map(post => {
            return <Post
                //key={post.id}
                title={post.title}
                description={post.description}
                img={post.urlToImage}
                url={post.url}
                random_indicator={post.sentiment}
                clicked={() => this.postSelectedHandler(post.title)} />;
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

export default withRouter(NyoozById);
