import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { setModalCreateTask } from "./modalAction";

const createTask = createReducer(null, {
  [setModalCreateTask]: (state, { paylod }) => paylod,
});

const modal = combineReducers({ createTask });
export default modal;
