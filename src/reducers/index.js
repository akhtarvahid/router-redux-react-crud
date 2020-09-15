import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import PostsReducers from './postsReducers';

const rootReducer = combineReducers({
  posts: PostsReducers,
  form: formReducer
});

export default rootReducer;
