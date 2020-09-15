import React, { Component } from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class Posts extends Component {
    componentDidMount(){
        this.props.fetchPosts();
    }

    renderPosts() {
        const { posts } = this.props;
        const isAvailable = Object.keys(posts).length;
        if(isAvailable > 0) {
        return _.map(this.props.posts, post => {
            return(
                <li className="list-group-item" key={post.id}>
                   <Link to={`/posts/${post.id}`}> 
                    {post.title}
                   </Link>  
                   <div>{post.body}</div>
                </li>
            )
        })
    } else {
        return <h2 data-text="Loading...">Loading...</h2>
    }
    }
    render() {
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
              <ul className="list-group">  
                {this.renderPosts()}
              </ul> 
            </>
        );
    }
}
const mapStateToProps = (state) => ({posts: state.posts})

export default connect(mapStateToProps, 
    { fetchPosts })(Posts);