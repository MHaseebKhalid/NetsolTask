import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux'
import userReducer from './userSlice';
import postReducer from './postSlice';

let reducer= combineReducers({ 
  userReducer, 
  postReducer
  });


export const store = configureStore({
  reducer
})