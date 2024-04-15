import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  leaveOptions: ['all', 'annual leave', 'unpaid leave'],
  leaveTime: [
    'january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'
  ]
};

const leaveSlice = createSlice({
  name: 'leave',
  initialState, reducers: {
    
  }
});

export default leaveSlice.reducer;