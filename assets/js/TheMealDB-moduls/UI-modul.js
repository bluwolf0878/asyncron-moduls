// ui.js

// Funktion til at oprette kortvisning af opskrifter
export const renderRecipes = (recipes, onClickHandler) => {
    const container = document.querySelector('body');
    container.innerHTML = ''; // Tøm container for tidligere indhold
  
    recipes.forEach((recipe) => {
      const recipeDiv = document.createElement('div');
      recipeDiv.classList.add('recipe');
      recipeDiv.innerHTML = `
        <h3>${recipe.strMeal}</h3>
        <img src="${recipe.strMealThumb}" alt="${recipe.strMeal}">
      `;
      recipeDiv.addEventListener('click', () => onClickHandler(recipe.idMeal)); // Klik hændelse på opskrift
      container.appendChild(recipeDiv);
    });
  };
  
  // Funktion til at vise detaljer om en enkelt opskrift
  export const renderRecipeDetails = (recipe) => {
    const container = document.querySelector('body');
    container.innerHTML = ''; // Tøm container for tidligere indhold
  
    const recipeDetailDiv = document.createElement('div');
    recipeDetailDiv.classList.add('recipe-detail');
    recipeDetailDiv.innerHTML = `
      <h2>${recipe.strMeal}</h2>
      <img src="${recipe.strMealThumb}" alt="${recipe.strMeal}">
      <p>${recipe.strInstructions}</p>
    `;
    
    container.appendChild(recipeDetailDiv);
  };
  