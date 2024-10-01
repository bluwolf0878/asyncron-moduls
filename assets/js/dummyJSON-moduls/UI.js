// ui.js
import { loadAllProducts } from "./main.js";

// Funktion til at oprette kortvisning af produkter
export const renderProducts = (products, onClickHandler) => {
    const container = document.querySelector('body');
    container.innerHTML = ''; // Tøm container for tidligere indhold
  
    products.forEach((product) => {
      const productDiv = document.createElement('div');
      productDiv.classList.add('product');
      productDiv.innerHTML = `
        <h3>${product.title}</h3>
        <img src="${product.thumbnail}" alt="${product.title}">
      `;
      productDiv.addEventListener('click', () => onClickHandler(product.id)); // Klik hændelse på produkt
      container.appendChild(productDiv);
    });
  };
  
  // Funktion til at vise detaljer om et specifikt produkt
  export const renderProductDetails = (product) => {
    const container = document.querySelector('body');
    container.innerHTML = ''; // Tøm container for tidligere indhold
  
    const productDetailDiv = document.createElement('div');
    productDetailDiv.classList.add('product-detail');

    let back = document.createElement('button');
    back.innerText = "tilbage til opskrifter"
    
    back.addEventListener('click', ()=>{
      loadAllProducts()
    })

    productDetailDiv.innerHTML = `
      <h2>${product.title}</h2>
      <img src="${product.thumbnail}" alt="${product.title}">
      <p>${product.description}</p>
      <p>Price: $${product.price}</p>
    `;
    
    container.appendChild(productDetailDiv);
    productDetailDiv.appendChild(back);
  };
  