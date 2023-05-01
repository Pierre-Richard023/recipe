import {
  createSlice,
  createAsyncThunk
} from '@reduxjs/toolkit'
import {
  getRecipesBySearch
} from '../../services/getRecipe'


export const getRecipes = createAsyncThunk('search/getRecipe', (data) => {
  return getRecipesBySearch(data.search, data.page)
})


export const searchSlice = createSlice({
  name: 'search',
  initialState: {
    value: "",
    results: [],
    resultPage: {},
    maxPages: 1,
    currentPage: 1,
    pagesView: [1, ],
    loading: false,
    hasData: false
  },
  reducers: {
    setSearch: (state, action) => {
      state.value = action.payload
    },
    changePage: (state, action) => {
      state.currentPage = action.payload
      if (state.pagesView.includes(action.payload))
        state.resultPage = state.results.find((item) => item.id === action.payload)
      else
        state.pagesView = [...state.pagesView, action.payload]
    },
  },

  extraReducers: (builder) => {

    builder.addCase(getRecipes.pending, (state) => {
      state.loading = true
    })

    builder.addCase(getRecipes.fulfilled, (state, action) => {
      state.loading = false
      state.results = [...state.results, {
        ...action.payload,
        id: state.currentPage
      }]
      state.resultPage = action.payload

      if (!state.hasData) {
        let nbRst = action.payload.totalResults
        if (nbRst > 24) {
          if (nbRst % 24 !== 0)
            state.maxPages = Number.parseInt(nbRst / 24) + 1
          else
            state.maxPages = nbRst / 24
        }
        state.hasData = true
      }
    })
  },
})

export const {
  setSearch,
  changePage,
} = searchSlice.actions

export default searchSlice.reducer