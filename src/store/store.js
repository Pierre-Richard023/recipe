import { configureStore } from '@reduxjs/toolkit'
import recipeReducer from './slice/recipeSlice'
import customizeFilterReducer from './slice/customizeFilterSlice'
import searchReducer from './slice/searchSlice'
export default configureStore({
  reducer: {
    recipe : recipeReducer,
    search : searchReducer,
    customizeFilter : customizeFilterReducer
  },
})