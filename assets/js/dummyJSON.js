// dummyJSON.js

const BASE_URL = "https://dummyjson.com/products";

// Helper function to check response status
const checkResponse = (response) => {
  if (!response.ok) {
    const errorMessage = `Error: ${response.status} - ${response.statusText}`;
    return Promise.reject(new Error(errorMessage));
  }
  return response.json();
};

// Kombineret version der kan bruges med både async/await og .then()

// Fetch all products
export const getAllProducts = () => {
  return fetch(`${BASE_URL}`)
    .then(checkResponse)
    .catch((error) => {
      console.error("Failed to fetch all products:", error.message);
      throw error;
    });
};

// Fetch a single product by ID
export const getProductById = (id) => {
  return fetch(`${BASE_URL}/${id}`)
    .then(checkResponse)
    .catch((error) => {
      console.error(`Failed to fetch product with ID ${id}:`, error.message);
      throw error;
    });
};

// Search for products by query
export const searchProducts = (query) => {
  return fetch(`${BASE_URL}/search?q=${query}`)
    .then(checkResponse)
    .catch((error) => {
      console.error(`Failed to search for products with query "${query}":`, error.message);
      throw error;
    });
};

// Fetch all product categories
export const getAllCategories = () => {
  return fetch(`${BASE_URL}/categories`)
    .then(checkResponse)
    .catch((error) => {
      console.error("Failed to fetch categories:", error.message);
      throw error;
    });
};

// Fetch products by category
export const getProductsByCategory = (category) => {
  return fetch(`${BASE_URL}/category/${category}`)
    .then(checkResponse)
    .catch((error) => {
      console.error(`Failed to fetch products for category "${category}":`, error.message);
      throw error;
    });
};
