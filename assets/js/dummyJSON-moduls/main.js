// main.js

import { getAllProducts, getProductById } from './dummyJSON.js'; // API-funktionerne
import { renderProducts, renderProductDetails } from './UI.js'; // UI funktioner

// Hent og vis alle produkter
export const loadAllProducts = async () => {
  try {
    const productData = await getAllProducts();
    renderProducts(productData.products, showProductDetails);
  } catch (error) {
    console.error('Error loading products:', error);
  }
};

// Hent og vis detaljer for det valgte produkt
const showProductDetails = async (productId) => {
  try {
    const productDetails = await getProductById(productId);
    renderProductDetails(productDetails);
  } catch (error) {
    console.error('Error fetching product details:', error);
  }
};

// Når siden indlæses, vis alle produkter
window.addEventListener('DOMContentLoaded', () => {
  loadAllProducts();
});
