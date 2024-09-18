import { createSlice } from "@reduxjs/toolkit";
import {
  TASK_STATUS,
  TODO_SLICE_NAME,
  VISIBILITY_STATUS,
} from "../../constants/todoConstants";

const {TASK_COMPLETED,TASK_PENDING}=TASK_STATUS;
const {SHOW_ALL,PENDING,COMPLETED}=VISIBILITY_STATUS;
const initialState = {
  items: [
    {
      id: Math.floor(Math.random() * 10000),
      name: "buy milk",
      status: TASK_PENDING,
    },
    {
      id: Math.floor(Math.random() * 10000),
      name: "go to gym",
      status: TASK_COMPLETED,
    },
  ],
  currentVisibilityStatus: SHOW_ALL,
};

export const todoSlice = createSlice({
  name: TODO_SLICE_NAME,
  initialState,
  reducers: {
    addTodoItem: (state, action) => {
      let obj = {
        id: Math.floor(Math.random() * 10000),
        name: action.payload,
        status: TASK_PENDING,
      };
      state.items.push(obj);
    },
    showAllItems: (state) => {
      state.currentVisibilityStatus = SHOW_ALL;
    },
    showPendingItems: (state) => {
      state.currentVisibilityStatus = PENDING;
    },
    showCompletedItems: (state) => {
      state.currentVisibilityStatus = COMPLETED;
    },
    handleStatusChange: (state, action) => {
      const id=action.payload
      console.log("Before updated Items:", state.items);
      const item = state.items.find((item) => item.id === id);
      if (item) {
        item.status = item.status===TASK_COMPLETED?TASK_PENDING:TASK_COMPLETED
      }
      console.log("After Updated Items:", state.items);
    },
  },
});

export const {
  addTodoItem,
  showAllItems,
  showPendingItems,
  showCompletedItems,
  handleStatusChange,
} = todoSlice.actions;

export default todoSlice.reducer;
