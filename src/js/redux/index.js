
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import post from './reducers/post.js';
import ui from './reducers/ui.js';

const reducers = combineReducers({
  post,
  ui
})

let store = createStore(reducers,
  window.devToolsExtension ? window.devToolsExtension() : f => f,
  applyMiddleware(thunkMiddleware)
)

export default store;
