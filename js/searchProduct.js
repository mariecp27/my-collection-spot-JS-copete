import { products } from './products.js';

// Selectores
const searchInput = document.querySelector("#searchInput");
const searchButon = document.querySelector("#searchButton");

const productSearchByName = (productName) => {
    return products.filter(product => product.name.toLowerCase().includes(productName));
}

searchButon.addEventListener('click', () => {
    let desiredProductName = searchInput.value;
    let desiredProducts = productSearchByName(desiredProductName);
    localStorage.setItem('products', JSON.stringify(desiredProducts));
})

