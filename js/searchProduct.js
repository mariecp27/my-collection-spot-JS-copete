// Selectores
const searchInput = document.querySelector("#searchInput");
const searchButon = document.querySelector("#searchButton");

// Función asíncrona para obtener los productos
const requestProducts = async () =>  {
    const res = await fetch('../js/products.json');
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

