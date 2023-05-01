import {
  createSlice,
  createAsyncThunk
} from '@reduxjs/toolkit'
import {
  getAllRecipeByFilter
} from '../../services/getRecipe'


export const getRecipeByFilter = createAsyncThunk('customizeFilter/getRecipeByFilter', (data) => {
  return getAllRecipeByFilter(data.filter, data.page)
})


export const customizeFilterSlice = createSlice({
  name: 'customizeFilter',
  initialState: {
    filter: "",
    loading: false,
    dataStep: [],
    cuisinesFilter: [],
    typesFilter: [],
    intolerancesFilter: [],
    dietsFilter: [],
    unwantedIngredientsFilter: [],
    results: [],
    resultPage: {},
    maxPages: 1,
    currentPage: 1,
    pagesView: [1, ],
  },
  reducers: {

    updateCuisinesFilter: (state, action) => {
      if (!state.cuisinesFilter.includes(action.payload))
        state.cuisinesFilter = [...state.cuisinesFilter, action.payload]
      else
        state.cuisinesFilter = state.cuisinesFilter.filter(c => c !== action.payload)
    },
    updateTypesFilter: (state, action) => {
      if (!state.typesFilter.includes(action.payload))
        state.typesFilter = [...state.typesFilter, action.payload]
      else
        state.typesFilter = state.typesFilter.filter(c => c !== action.payload)
    },
    updateIntolerancesFilter: (state, action) => {
      if (!state.intolerancesFilter.includes(action.payload))
        state.intolerancesFilter = [...state.intolerancesFilter, action.payload]
      else
        state.intolerancesFilter = state.intolerancesFilter.filter(c => c !== action.payload)
    },
    updateDietsFilter: (state, action) => {
      if (!state.dietsFilter.includes(action.payload))
        state.dietsFilter = [...state.dietsFilter, action.payload]
      else
        state.dietsFilter = state.dietsFilter.filter(c => c !== action.payload)
    },
    updateUnwantedIngredientsFilter: (state, action) => {
      if (!state.unwantedIngredientsFilter.includes(action.payload))
        state.unwantedIngredientsFilter = [...state.unwantedIngredientsFilter, action.payload]
      else
        state.unwantedIngredientsFilter = state.unwantedIngredientsFilter.filter(c => c !== action.payload)

    },
    setFilter: (state) => {

      let res = ""
      if (state.cuisinesFilter.length > 0)
        res += "cuisine=" + state.cuisinesFilter.join(',')
      if (state.typesFilter.length > 0)
        res += "&type=" + state.typesFilter.join(',')
      if (state.intolerancesFilter.length > 0)
        res += "&intolerances=" + state.intolerancesFilter.join(',')
      if (state.dietsFilter.length > 0)
        res += "&diet=" + state.dietsFilter.join('|')
      if (state.unwantedIngredientsFilter.length > 0)
        res += "&excludeIngredients=" + state.unwantedIngredientsFilter.join(',')

      res += `&number=24`
      state.filter = res
    },

    getDataStep: (state, action) => {

      if (action.payload === "cuisines")
        state.dataStep = state.cuisinesFilter
      else if (action.payload === "type")
        state.dataStep = state.typesFilter
      else if (action.payload === "intolerances")
        state.dataStep = state.intolerancesFilter
      else if (action.payload === "diets")
        state.dataStep = state.cuisinesFilter
      else if (action.payload === "unwantedIngredients")
        state.dataStep = state.cuisinesFilter
    },
    changePage: (state, action) => {
      state.currentPage = action.payload
      if (state.pagesView.includes(action.payload))
        state.resultPage = state.results.find((item) => item.id === action.payload)
      else
        state.pagesView = [...state.pagesView, action.payload]
    },


    reset: (state) => {
      state.results= []
      state.resultPage = {}
      state.maxPages =1
      state.currentPage = 1
      state.pagesView = [1, ]
    }

  },

  extraReducers: (builder) => {


    builder.addCase(getRecipeByFilter.pending, (state) => {
      state.loading = true
    })

    builder.addCase(getRecipeByFilter.fulfilled, (state, action) => {
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
      }
    })

  },

})

export const {
  updateCuisinesFilter,
  updateDietsFilter,
  updateIntolerancesFilter,
  updateTypesFilter,
  updateUnwantedIngredientsFilter,
  setFilter,
  getDataStep,
  changePage,
  reset
} = customizeFilterSlice.actions

export default customizeFilterSlice.reducer