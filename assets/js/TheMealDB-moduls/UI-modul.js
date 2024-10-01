// ui.js
import { loadRandomRecipes } from "./main-modul.js";

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
  export function renderRecipeDetails(recipe) {

    const container = document.querySelector('body');

    container.innerHTML = ''; // Tøm container for tidligere indhold
  
    const recipeDetailDiv = document.createElement('div');
    recipeDetailDiv.classList.add('recipe-detail');

    let back = document.createElement('button');
    console.log('button')
    back.innerText = "tilbage til opskrifter"

    
    back.addEventListener('click', ()=>{
      loadRandomRecipes()
    })
    
 recipeDetailDiv.innerHTML += `
 <h2>${recipe.strMeal}</h2>
 <img src="${recipe.strMealThumb}" alt="${recipe.strMeal}">
 <p>${recipe.stringredient}</p>
 <p>${recipe.strInstructions}</p>`;
 
 container.appendChild(recipeDetailDiv);
 recipeDetailDiv.appendChild(back)
  };


  // Antag, at dette er en del af dit eksisterende JS modul

// Funktion til at vise opskrifterne
function displayRecipes(recipes) {
  const recipeContainer = document.getElementById('recipe-container'); // Antag, at dette er ID'et for din opskrift beholder
  recipeContainer.innerHTML = ''; // Ryd tidligere opskrifter

  recipes.forEach(recipe => {
      const recipeElement = document.createElement('div');
      recipeElement.className = 'recipe';
      recipeElement.innerHTML = `
          <img src="${recipe.strMealThumb}" alt="${recipe.strMeal}" />
          <h3>${recipe.strMeal}</h3>
      `;

      // Klik event for at vise opskrift detaljer
      recipeElement.addEventListener('click', () => {
          displayRecipeDetail(recipe);
      });

      recipeContainer.appendChild(recipeElement);
  });
}

  