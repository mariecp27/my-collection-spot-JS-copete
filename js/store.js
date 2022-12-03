import * as shoppingCar from './shoppingCar.js';

// Selectores
const aboveProductContainer = document.querySelector('.main__products');
const productsContainer = document.querySelector('.main__products-container div');
const allCategories = document.querySelectorAll('.main__products-categories ul li');
const allProductsCategory = document.querySelector('#allProducts');
const newProductsCategory = document.querySelector('#newProducts');
const onSaleProductsCategory = document.querySelector('#onSaleProducts');
const animeCategory = document.querySelector('#anime');
const dcComicsCategory = document.querySelector('#dcComics');
const independentComicsCategory = document.querySelector('#independentComics');
const marvelComicsCategory = document.querySelector('#marvelComics');
const seriesCategory = document.querySelector('#series');

// Función asíncrona para obtener los productos
const requestProducts = async () =>  {
    const res = await fetch('../js/products.json');
    const data = await res.json();

    return data;
}

const allProducts = await requestProducts();

let products = JSON.parse(localStorage.getItem('products')) || [...allProducts];

if (localStorage.newProducts) {
    newProductsCategory.classList.add('active');
} else if (localStorage.onSaleProducts) {
    onSaleProductsCategory.classList.add('active');
}

const noProductsTitle = document.createElement('div');
noProductsTitle.classList.add('cols-12');
noProductsTitle.classList.add('main__products-no-products-title');
aboveProductContainer.append(noProductsTitle);

// Permite imprimir los productos al interior del contenedor deseado
const displayProducts = () => {
    if (products.length === 0) {
        noProductsTitle.innerHTML = '<h3>¡Oh!, de momento no tenemos productos con el nombre que buscas</h3>';
    } else {
        noProductsTitle.innerHTML = '';

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
    }
}

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

// Filtrado de productos
allProductsCategory.addEventListener('click', () => {
    products = [];
    products = [...allProducts];
    productsContainer.innerHTML = '';
    allCategories.forEach(element => element.classList.remove('active'));
    allProductsCategory.classList.add('active');
    cleanSesionStorage();
    displayProducts();
})

newProductsCategory.addEventListener('click', () => {
    products = [];
    products = allProducts.filter(product => product.newProduct === true);
    productsContainer.innerHTML = '';
    allCategories.forEach(element => element.classList.remove('active'));
    newProductsCategory.classList.add('active');
    cleanSesionStorage();
    displayProducts();
})

onSaleProductsCategory.addEventListener('click', () => {
    products = [];
    products = allProducts.filter(product => product.onSale === true);
    productsContainer.innerHTML = '';
    allCategories.forEach(element => element.classList.remove('active'));
    onSaleProductsCategory.classList.add('active');
    cleanSesionStorage();
    displayProducts();
})

animeCategory.addEventListener('click', () => {
    products = [];
    products = allProducts.filter(product => product.category === 'anime');
    productsContainer.innerHTML = '';
    allCategories.forEach(element => element.classList.remove('active'));
    animeCategory.classList.add('active');
    cleanSesionStorage();
    displayProducts();
})

dcComicsCategory.addEventListener('click', () => {
    products = [];
    products = allProducts.filter(product => product.category === 'dcComics');
    productsContainer.innerHTML = '';
    allCategories.forEach(element => element.classList.remove('active'));
    dcComicsCategory.classList.add('active');
    cleanSesionStorage();
    displayProducts();
})

independentComicsCategory.addEventListener('click', () => {
    products = [];
    products = allProducts.filter(product => product.category === 'independentComics');
    productsContainer.innerHTML = '';
    allCategories.forEach(element => element.classList.remove('active'));
    independentComicsCategory.classList.add('active');
    cleanSesionStorage();
    displayProducts();
})

marvelComicsCategory.addEventListener('click', () => {
    products = [];
    products = allProducts.filter(product => product.category === 'marvelComics');
    productsContainer.innerHTML = '';
    allCategories.forEach(element => element.classList.remove('active'));
    marvelComicsCategory.classList.add('active');
    cleanSesionStorage();
    displayProducts();
})

seriesCategory.addEventListener('click', () => {
    products = [];
    products = allProducts.filter(product => product.category === 'series');
    productsContainer.innerHTML = '';
    allCategories.forEach(element => element.classList.remove('active'));
    seriesCategory.classList.add('active');
    cleanSesionStorage();
    displayProducts();
})

// Borrar sesion storage
const cleanSesionStorage = () => {
    localStorage.removeItem('onSaleProducts');
    localStorage.removeItem('newProducts');
    localStorage.removeItem('products');
}

// Muestra los productos al ingresar a la página
displayProducts();
