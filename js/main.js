import * as shoppingCar from './shoppingCar.js';

// Selectores
const newProductsContainer = document.querySelector('.main__new-products-container div');
const onSaleProductsContainer = document.querySelector('.main__onsale-products-container div');
const newProductsButton = document.querySelector("#newProductsButton");
const onSaleProductsButton = document.querySelector("#onSaleProductsButton");

// Función asíncrona para obtener los productos
const requestProducts = async () =>  {
    const res = await fetch('./js/products.json');
    const data = await res.json();

    return data;
}

const products = await requestProducts();

// Filtrado de nuevos productos
function getNewProducts() {
    return products.filter(product => product.newProduct == true);
}

// Permite imprimir los nuevos productos en el index al interior del contenedor deseado
getNewProducts().forEach( (product, i) => {
    if (i < 5) {
        const productArticle = document.createElement('article');
        productArticle.setAttribute('data-aos', 'fade-up');
        productArticle.setAttribute('class', 'col');
        
        productArticle.innerHTML = `
            <img src=".${product.img}" alt="Producto">
            <h3>${product.name}</h3>
            <h4>${product.serie}</h4>
            <strong>${product.finalPrice} COP</strong>
        `
    
        let productForm = createProductForm(product);
        productArticle.append(productForm);
    
        newProductsContainer.append(productArticle);
    }
});

// Filtrado de productos en oferta
function getOnSaleProducts() {
    return products.filter(product => product.onSale == true);
}

// Permite imprimir los productos en oferta en el index al interior del contenedor deseado
getOnSaleProducts().forEach( (product, i) => {
    if (i < 5) {
        const productArticle = document.createElement('article');
        productArticle.setAttribute('data-aos', 'fade-up');
        productArticle.setAttribute('class', 'col');
        
        productArticle.innerHTML = `
            <img src=".${product.img}" alt="Producto">
            <h3>${product.name}</h3>
            <h4>${product.serie}</h4>
            <em><del>${product.price} COP</del></em>
            <strong>${product.finalPrice} COP</strong>
        `

        let productForm = createProductForm(product);
        productArticle.append(productForm);
        
        onSaleProductsContainer.append(productArticle);
    }
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

// Fitrar nuevos productos en la tienda
newProductsButton.addEventListener('click', () => {
    let newProducts = products.filter(product => product.newProduct === true);
    localStorage.setItem('products', JSON.stringify(newProducts));
    localStorage.setItem('newProducts', true);
    localStorage.removeItem('onSaleProducts');
})

// Fitrar productos en oferta en la tienda
onSaleProductsButton.addEventListener('click', () => {
    let onSaleProducts = products.filter(product => product.onSale === true);
    localStorage.setItem('products', JSON.stringify(onSaleProducts));
    localStorage.setItem('onSaleProducts', true);
    localStorage.removeItem('newProducts');
})