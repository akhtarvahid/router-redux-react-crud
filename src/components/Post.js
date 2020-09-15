import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost, deletePost } from '../actions';

class Post extends Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchPost(id);
    }
    onDeleteClick(){
        const { id } = this.props.match.params;
        this.props.deletePost(id, () => {
            this.props.history.push('/');
        });
    }
    render() {
        const { post } = this.props;
        if(!post) {
            return <div className="listing list-group"><h2 className="listing list-group" data-text="Please wait...">Please wait...</h2></div>
        }
        return (
            <>
            <div className="post">
             <Link to="/">Back To Index</Link>   
             <button 
              className="btn btn-danger pull-xs-right"
              onClick={this.onDeleteClick.bind(this)}>
              Delete Post</button>  
            </div>
            <div className="post-body">
             <h2>Index Item: <span>{post.id}</span></h2>
             <h4>{post.title}</h4>
             <h6>Content: {post.body}</h6>
            </div>
            </>
        );
    }
}

function mapStateToProps({ posts }, ownProps){
  return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(Post);