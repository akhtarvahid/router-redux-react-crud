import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import Posts from './components/Posts';
import AddPost from './components/AddPost';
import reducers from './reducers';
import Post from './components/Post';
import './style.scss';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
   <BrowserRouter>
    <div className="listing">
      <Switch>
      <Route path="/posts/new" exact component={AddPost} />
      <Route path="/posts/:id" exact component={Post} />
      <Route path="/" exact component={Posts} />
      </Switch>
    </div>
   </BrowserRouter>
  </Provider>
  , document.querySelector('#root'));
