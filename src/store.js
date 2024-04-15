import { configureStore } from "@reduxjs/toolkit";
import userReducer from './features/user/userSlice';
import leaveReducer from './features/leave/leaveSlice';

export const store = configureStore({
  reducer: {
    leave: leaveReducer,
    user: userReducer,
  }
})