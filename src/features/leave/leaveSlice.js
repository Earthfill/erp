import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  leaveOptions: ['all', 'annual leave', 'unpaid leave'],
  leaveTime: [
    'january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'
  ],
  stats: {
    pending: '1',
    approved: '6',
    requests: '8',
    declined: '1' 
  },
  sortOptions: ['Sort by', 'Ascending', 'Descending', 'Latest', 'Oldest'],
  intDate: {
    firstDate: '03', 
    secondDate: '06', 
    thirdDate: '07', 
    fourthDate: '09', 
    fifthDate: '11'
  },
  endDate: {
    firstDate: '04', 
    secondDate: '07', 
    thirdDate: '08', 
    fourthDate: '10', 
    fifthDate: '11'
  }
};

const leaveSlice = createSlice({
  name: 'leave',
  initialState, reducers: {
  }
});

export default leaveSlice.reducer;