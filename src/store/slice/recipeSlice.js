import {
  createSlice,
  createAsyncThunk
} from '@reduxjs/toolkit'
import {
  getRecipeById
} from '../../services/getRecipe'

export const getRecipe = createAsyncThunk('recipe/getRecipe', (id) => {
  return getRecipeById(id)
})



export const recipeSlice = createSlice({
  name: 'recipe',
  initialState: {
    recipe: {},
    choiceId: 0,
    loading: false,
    isOpen: false,
  },
  reducers: {

    openModal: (state, action) => {
      state.choiceId = action.payload
      state.isOpen = true
    },

    closeModal: (state) => {
      state.isOpen = false
    },

  },
  extraReducers: (builder) => {

    builder.addCase(getRecipe.pending, (state) => {
      state.loading = true
    })

    builder.addCase(getRecipe.fulfilled, (state, action) => {
      state.loading = false
      state.recipe = action.payload
    })

  },
})

export const { openModal,closeModal } = recipeSlice.actions

export default recipeSlice.reducer