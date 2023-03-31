import { configureStore } from '@reduxjs/toolkit'
import datafetch from "../redux/createslice.js"

export default configureStore({
  reducer: {
    datagetting: datafetch
  }
})