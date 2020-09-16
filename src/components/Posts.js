import React, { Component } from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';

export default class Posts extends Component {

    renderPosts() {
        const { posts } = this.props;
        const isAvailable = Object.keys(posts).length;
        if(isAvailable > 0) {
        return _.map(this.props.posts, post => {
            return(
                <li className="list-group-item" key={post.id}>
                   <Link to={`/posts/${post.id}`}> 
                     {post.id}. {post.title}
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
              <ul className="list-group">  
                {this.renderPosts()}
              </ul> 
            </>
        );
    }
}