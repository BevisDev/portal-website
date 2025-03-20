import { combineReducers } from "@reduxjs/toolkit";

const dummyReducer = (state = {}) => state;

const rootReducer = combineReducers({
  dummy: dummyReducer,
});

export default rootReducer;
