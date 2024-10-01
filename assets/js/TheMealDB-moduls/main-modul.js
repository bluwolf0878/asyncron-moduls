// main.js

import { getRandomMeal, getMealById } from './TheMealDB.js'; // API-funktionerne
import { renderRecipes, renderRecipeDetails } from './UI-modul.js'; // UI funktioner

// Hent 10 tilfældige opskrifter
const loadRandomRecipes = async () => {
  const randomRecipes = [];

  // Loop for at hente 10 tilfældige opskrifter
  for (let i = 0; i < 10; i++) {
    try {
      const meal = await getRandomMeal();
      randomRecipes.push(meal.meals[0]); // Tilføj opskrift til listen
    } catch (error) {
      console.error('Error fetching random meal:', error);
    }
  }

  // Render opskrifter på siden
  renderRecipes(randomRecipes, showRecipeDetails);
};

// Hent og vis detaljer for den valgte opskrift
const showRecipeDetails = async (mealId) => {
  try {
    const mealDetails = await getMealById(mealId);
    renderRecipeDetails(mealDetails.meals[0]); // Render detaljer
  } catch (error) {
    console.error('Error fetching meal details:', error);
  }
};

// Når siden indlæses, vis de 10 tilfældige opskrifter
window.addEventListener('DOMContentLoaded', () => {
  loadRandomRecipes();
});
