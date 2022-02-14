import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import promise from 'redux-promise';

export const counterReducer = (state=1, {type, payload=10}) => {
  switch(type) {
    case 'ADD': 
      return state + payload;
    case 'MINUS': 
      return state - payload;
    default:
      return state;
  }
}

export const store = createStore(
  combineReducers({count: counterReducer}), 
  applyMiddleware(thunk, promise, logger)
);