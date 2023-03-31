import { createSlice } from '@reduxjs/toolkit'
import axios from "axios";

export const counterSlice = createSlice({
  name: 'datageting',
  initialState: {
    value: []
  },
  reducers: 
  {
    adddata: (state, action) => {
      console.log(action.payload,"payload")
      state.value = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { adddata } = counterSlice.actions

export default counterSlice.reducer



