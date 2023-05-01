import axios from "axios"
import {
    API_KEY
} from "../config/config"


export const getAllRecipeByFilter = async (filter, page) => {

    return await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&${filter}&offset=${24* (page -1 )}`)
        .then(response => response.data)
}

export const getRecipesBySearch = async (search, page) => {

    return await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=24&offset=${24* (page -1 )}&query=${search}`)
        .then(response => response.data)
}

export const getRecipeById = async (id) => {

    return await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`)
        .then(response => response.data)
}