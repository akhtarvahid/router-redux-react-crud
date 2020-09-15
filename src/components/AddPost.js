import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class AddPost extends Component {

    renderField(field) {
        const { meta: { touched, error }} = field;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;
        return(
            <div className={className}>
              <label>{field.label}</label>
              <input 
               className="form-control"
               type="text"
               {...field.input}
              />  
              <div className="text-help">
              {touched ? error : ''}
             </div> 
            </div>
        )
    }

    onSubmit(values) {
     this.props.createPost(values, () => {
        this.props.history.push('/');
     });
    }
    
    render() {
        const { handleSubmit } = this.props;
        return (
           <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <h1>Add Post</h1>
            <hr />
            <Field
              label="Title For Post"
              name="title"
              component={this.renderField} 
            />  
            <Field
              label="Post content"
              name="body"
              component={this.renderField} 
            />    
            <button type="submit" className="btn btn-primary">Submit</button>
            <Link to="/" className="btn btn-danger">Cancel</Link>
           </form>
        );
    }
}

function validate(values) {
  const errors = {};
  if(!values.title){errors.title = "Enter a title";}
  if(!values.body){errors.body='Enter some content';}
  return errors;
}
export default reduxForm({
    validate,
    form: 'AddPostForm'
})(connect(null, { createPost })(AddPost));    