// TheMealDB.js

const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

// Helper function to check response status
const checkResponse = (response) => {
  if (!response.ok) {
    const errorMessage = `Error: ${response.status} - ${response.statusText}`;
    return Promise.reject(new Error(errorMessage));
  }
  return response.json();
};

// Kombineret version der kan bruges med både async/await og .then()

// Fetch a meal by ID
export const getMealById = (id) => {
  return fetch(`${BASE_URL}/lookup.php?i=${id}`)
    .then(checkResponse) 
    .catch((error) => {
      console.error(`Failed to fetch meal with ID ${id}:`, error.message);
      throw error;
    });
};

// Fetch random meal
export const getRandomMeal = () => {
  return fetch(`${BASE_URL}/random.php`)
    .then(checkResponse)
    .catch((error) => {
      console.error("Failed to fetch a random meal:", error.message);
      throw error;
    });
};

// Search for meals by name
export const searchMealsByName = (name) => {
  return fetch(`${BASE_URL}/search.php?s=${name}`)
    .then(checkResponse)
    .catch((error) => {
      console.error(`Failed to search for meals with name "${name}":`, error.message);
      throw error;
    });
};

// Filter meals by category
export const filterMealsByCategory = (category) => {
  return fetch(`${BASE_URL}/filter.php?c=${category}`)
    .then(checkResponse)
    .catch((error) => {
      console.error(`Failed to filter meals by category "${category}":`, error.message);
      throw error;
    });
};

// Filter meals by area
export const filterMealsByArea = (area) => {
  return fetch(`${BASE_URL}/filter.php?a=${area}`)
    .then(checkResponse)
    .catch((error) => {
      console.error(`Failed to filter meals by area "${area}":`, error.message);
      throw error;
    });
};

// Get all categories
export const getAllCategories = () => {
  return fetch(`${BASE_URL}/categories.php`)
    .then(checkResponse)
    .catch((error) => {
      console.error("Failed to fetch meal categories:", error.message);
      throw error;
    });
};
