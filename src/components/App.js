import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import Pagination from './Pagination';
import Posts from './Posts';
import './App.scss';

class App extends Component {
    state = {
      currentPage: 1,
      postsPerPage: 10
    }
    componentDidMount() {
        this.props.fetchPosts();
    }
    render() { 
    const { postItems } = this.props;
    let posts = _.values(postItems);
    const {currentPage, postsPerPage } = this.state;
    
    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginateClick = currentPage => {
        this.setState({currentPage})
    };
        return ( 
            <>
             <div className="listing_header"> 
               <h5>Posts</h5>
               <div className="text-xs-right">
                <Link className="btn btn-primary" to="/posts/new">
                  Add a Post
                </Link>   
               </div> 
              </div>
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={posts.length}
                currentPage={currentPage}
                paginateClick={paginateClick} 
             />
             <Posts posts={currentPosts} />
            </>
         );
    }
}
 
const mapStateToProps = (state) => ({postItems: state.posts})

export default connect(mapStateToProps, 
    { fetchPosts })(App);