import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import tasksActions from "./tasksActions";

const items = createReducer([], {
  [tasksActions.createTaskSuccess]: (state, { payload }) => [payload, ...state],
  [tasksActions.deleteTaskSuccess]: (state, { payload }) => {
      const items = state.filter(item => item.id !== payload);
      return items;
  },
  [tasksActions.changeTaskNameSuccess]: (state, {payload}) => {
      const items = state.map(item => {
          if(item.id === payload.id){
              return payload;
          }
          return item;
      });

      return items;
  },
});

const search = createReducer([], {
    [tasksActions.searchTaskByNameSucces]: (_, {payload}) => [...payload],
});

const tasksRedux = combineReducers({ items, search });

export default tasksRedux;
