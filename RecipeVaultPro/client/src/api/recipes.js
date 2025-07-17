import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5001/api/recipes',
});

export const fetchRecipes = () => API.get('/');
export const createRecipe = (newRecipe) => API.post('/', newRecipe);
export const updateRecipe = (id, updatedRecipe) => API.put(`/${id}`, updatedRecipe);
export const deleteRecipe = (id) => API.delete(`/${id}`);
