import React, { useEffect, useState } from 'react';
import {
  fetchRecipes,
  createRecipe,
  updateRecipe,
  deleteRecipe,
} from './api/recipes';
import { toast } from 'react-toastify';

export default function App() {
  const [recipes, setRecipes] = useState([]);
  const [form, setForm] = useState({
    title: '',
    ingredients: '',
    instructions: '',
  });
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchRecipes()
      .then((res) => setRecipes(res.data))
      .catch((err) => {
        console.error(err);
        toast.error('Failed to fetch recipes');
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const ingredientsArray = form.ingredients.split(',').map((i) => i.trim());

    try {
      if (editId) {
        const res = await updateRecipe(editId, {
          ...form,
          ingredients: ingredientsArray,
        });
        setRecipes(recipes.map((r) => (r._id === editId ? res.data : r)));
        toast.success('Recipe updated!');
        setEditId(null);
      } else {
        const res = await createRecipe({ ...form, ingredients: ingredientsArray });
        setRecipes([...recipes, res.data]);
        toast.success('Recipe added!');
      }

      setForm({ title: '', ingredients: '', instructions: '' });
    } catch (err) {
      console.error(err);
      toast.error('Something went wrong');
    }
  };

  const handleEdit = (recipe) => {
    setEditId(recipe._id);
    setForm({
      title: recipe.title,
      ingredients: recipe.ingredients.join(', '),
      instructions: recipe.instructions,
    });
  };

  const handleDelete = async (id) => {
    try {
      await deleteRecipe(id);
      setRecipes(recipes.filter((r) => r._id !== id));
      toast.success('Recipe deleted!');
    } catch (err) {
      console.error(err);
      toast.error('Failed to delete recipe');
    }
  };

  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="p-6 max-w-4xl mx-auto dark:bg-gray-900 min-h-screen dark:text-white transition-colors duration-300">
      <h1 className="text-3xl font-bold text-center mb-6">🍽️ Recipe Vault Pro</h1>

      <div className="text-center mb-6">
        <button
          onClick={toggleTheme}
          className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
        >
          Toggle Dark Mode 🌗
        </button>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 shadow-md rounded p-4 mb-8 space-y-3"
      >
        <input
          type="text"
          placeholder="Title"
          className="w-full border dark:border-gray-600 p-2 rounded bg-white dark:bg-gray-900 text-black dark:text-white"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Ingredients (comma-separated)"
          className="w-full border dark:border-gray-600 p-2 rounded bg-white dark:bg-gray-900 text-black dark:text-white"
          value={form.ingredients}
          onChange={(e) => setForm({ ...form, ingredients: e.target.value })}
          required
        />
        <textarea
          placeholder="Instructions"
          className="w-full border dark:border-gray-600 p-2 rounded bg-white dark:bg-gray-900 text-black dark:text-white"
          value={form.instructions}
          onChange={(e) => setForm({ ...form, instructions: e.target.value })}
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          {editId ? 'Update Recipe' : 'Add Recipe'}
        </button>
      </form>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
        {recipes.map((recipe) => (
          <div
            key={recipe._id}
            className="bg-white dark:bg-gray-800 border dark:border-gray-700 shadow rounded p-4 relative transition duration-300"
          >
            <h2 className="text-xl font-semibold">{recipe.title}</h2>
            <p>
              <strong>Ingredients:</strong> {recipe.ingredients.join(', ')}
            </p>
            <p>
              <strong>Instructions:</strong> {recipe.instructions}
            </p>

            <div className="absolute top-2 right-2 flex gap-2">
              <button
                onClick={() => handleEdit(recipe)}
                className="bg-yellow-500 text-white px-3 py-1 text-sm rounded hover:bg-yellow-600"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(recipe._id)}
                className="bg-red-600 text-white px-3 py-1 text-sm rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

