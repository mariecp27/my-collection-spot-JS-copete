// Selectores
const searchInput = document.querySelector("#searchInput");
const searchButon = document.querySelector("#searchButton");

// Obtener ruta de los productos
const getProductsUrl = () => {
    let path = window.location.pathname;
    let page = path.split("/").pop();
    let productsURL;
    if (page.includes('store') || page.includes('about-us') || page.includes('contact-us')) {
        productsURL = '../js/products.json';
    } else {
        productsURL = './js/products.json';
    }
    return productsURL;
}

// Función asíncrona para obtener los productos
const requestProducts = async () =>  {
    const res = await fetch(getProductsUrl());
    const data = await res.json();

    return data;
}

const products = await requestProducts();

// Permite buscar productos por su nombre
const productSearchByName = (productName) => {
    return products.filter(product => product.name.toLowerCase().includes(productName));
}

// Agrefa la función de busqueda al botón de la barra de búsqueda, en el header
searchButon.addEventListener('click', () => {
    let desiredProductName = searchInput.value;
    let desiredProducts = productSearchByName(desiredProductName);
    localStorage.setItem('products', JSON.stringify(desiredProducts));
})

