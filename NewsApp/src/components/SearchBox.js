import React from 'react';
import axios from 'axios';
import Post from '../components/NewsCard';
import { Row, Col } from 'reactstrap';

class SearchBox extends React.Component {

  state = {
      posts: [],
      searchQuery: ''
    }

  handleSubmit = (event) => {
      event.preventDefault();
      let q = this.state.searchQuery

      console.log('Hello' + q);
    };

  componentDidMount () {
    axios.get(`https://newsapi.org/v2/top-headlines?sources=${this.state.sources}&apiKey=f47dd464d0f64fe4b27bf0dd19919881`)
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

    createRows = () => {
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




  render(){
    return (
      // <nav className="navbar navbar-expand-sm navbar-light bg-light mb-3">
      //   <div className="container">
      //     <div className="collapse navbar-collapse" id="navbarNav">
      //       <form className="form-inline ml-auto" onSubmit={this.handleSubmit} method="get" action="/news">
      //         <input type="text"
      //                 className="form-control mr-2"
      //                 id="q"
      //                 name="q"
      //                 value={this.state.searchQuery}
      //                 onChange= {(event) => this.setState({ searchQuery: event.target.value })}
      //                 placeholder="Search"/>
      //         // <NyoozByQuery query={this.searchQuery} />
      //         <button type="submit" className="btn btn-outline-info">Search</button>
      //       </form>
      //       </div>
      //     </div>
      //    </nav>


      <nav className="navbar navbar-expand-sm navbar-light bg-light mb-3">
        <div className="container">
        <a className="navbar-brand" href="/PageNotFound">Nyooz App</a>
        <button className="navbar-toggler" data-toggle="collapse" data-target="/PageNotFoundnavbarNav">
            <span className="navbar-toggler-icon"></span>
        </button>
          <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
              <li className="nav-item">
                  <a className="nav-link" href="/PageNotFound">Home</a>
              </li>
              <li className="nav-item">
                  <a className="nav-link" href="/PageNotFound">About</a>
              </li>
              <li className="nav-item">
                  <a className="nav-link" href="/PageNotFound">Services</a>
              </li>
              <li className="nav-item">
                  <a className="nav-link" href="/PageNotFound">Contact</a>
              </li>
            </ul>

            <form className="form-inline ml-auto" method="get" action="/news/searchQuery/query">
                <input type="text" className="form-control mr-2" id="q" name="q"
                placeholder="Search"
                value={this.state.searchQuery}
                onChange= {(event) => this.setState({ searchQuery: event.target.value })}
                />
                <button type="submit" className="btn btn-outline-info" >Search</button>
            </form>
            </div>
          </div>
        </nav>
    );
  }
}


export default SearchBox;
