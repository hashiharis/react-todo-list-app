import { createSlice } from "@reduxjs/toolkit";
import { TASK_STATUS, TODO_SLICE_NAME, VISIBILITY_STATUS } from "../../constants/todoConstants";

const initialState = {
  items: [
    {
      id: Math.floor(Math.random() * 10000),
      name: "buy milk",
      status: TASK_STATUS.TASK_PENDING,
    },
    {
      id: Math.floor(Math.random() * 10000),
      name: "go to gym",
      status: TASK_STATUS.TASK_COMPLETED,
    },
  ],
  currentVisibilityStatus:VISIBILITY_STATUS.SHOW_ALL,
};

export const todoSlice = createSlice({
  name: TODO_SLICE_NAME,
  initialState,
  reducers: {
    addTodoItem:(state,action)=>{
      let obj={
        id: Math.floor(Math.random() * 10000),
        name:action.payload,
        status:TASK_STATUS.TASK_PENDING,
      }
      state.items.push(obj)
    },
    showAllItems:(state)=>{
        state.currentVisibilityStatus=VISIBILITY_STATUS.SHOW_ALL
    },
    showPendingItems:(state)=>{
        state.currentVisibilityStatus=VISIBILITY_STATUS.PENDING
    },
    showCompletedItems:(state)=>{
        state.currentVisibilityStatus=VISIBILITY_STATUS.COMPLETED
    }
  },
});

export const {addTodoItem,showAllItems,showPendingItems,showCompletedItems}=todoSlice.actions

export default todoSlice.reducer