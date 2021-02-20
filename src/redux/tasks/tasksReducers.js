import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

const byId = createReducer({}, {});
const allIds = createReducer([], {});

const tasks = combineReducers({ byId, allIds });

export default tasks;