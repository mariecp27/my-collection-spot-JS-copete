import { products } from './products.js';
import * as shoppingCar from './shoppingCar.js';

// Selectores
const productsContainer = document.querySelector('.main__products-container div');


// Permite imprimir los nuevos productos en el index al interior del contenedor deseado
products.forEach(product => {
    const productArticle = document.createElement('article');
    productArticle.setAttribute('data-aos', 'fade-up');
    productArticle.setAttribute('class', 'col');

    if (product.onSale) {
        productArticle.innerHTML = `
            <img src="..${product.img}" alt="Producto">
            <h3>${product.name}</h3>
            <h4>${product.serie}</h4>
            <em><del>${product.price} COP</del></em>
            <strong>${product.finalPrice} COP</strong>
        `
    } else {
        productArticle.innerHTML = `
            <img src="..${product.img}" alt="Producto">
            <h3>${product.name}</h3>
            <h4>${product.serie}</h4>
            <strong>${product.finalPrice} COP</strong>
        `
    }

    let productForm = createProductForm(product);
    productArticle.append(productForm);

    productsContainer.append(productArticle);
});

/* Permite añadir a cada producto los elementos que interactúa con el carrito de compra:
Input de cantidad por producto, botón más (+), botón menos (-) y botón de agregar al carrito */
function createProductForm(product) {
    const productForm = document.createElement('form');
    productForm.setAttribute('class', 'main__products-car-form');

    const productFormDiv = document.createElement('div');

    let productInput = shoppingCar.createProductFormInput();
    let minusButton = shoppingCar.createProductFormMinus(productInput);
    let plusButton = shoppingCar.createProductFormPlus(productInput);
    let addToShoppingCarButton = shoppingCar.createAddToShoppingCarButton(product, productInput);

    productFormDiv.append(minusButton);
    productFormDiv.append(productInput);
    productFormDiv.append(plusButton);
    productForm.append(productFormDiv);
    productForm.append(addToShoppingCarButton);

    return productForm;
}