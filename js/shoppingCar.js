import { products } from './products.js';

// Selectores
const shoppingCarProductsContainer = document.querySelector('.main__shopping-car-products');
const shoppingCarProductsTotal = document.querySelector('.main__shopping-car-total');
const productsAmountInShoppingCarContainer = document.querySelector('.main__shopping-amount');


// Variables
let productsInShoppingCar = [];
let shoppingCarTotal = 0;
let productsAmountInShoppingCar = 0;

/* --- Creación de elementos que permitirá controlar cada producto en el carrito --- */

// Input de cantidad por producto
export const createProductFormInput = () => {
    const productInput = document.createElement('input');
    productInput.setAttribute('type', 'number');
    productInput.setAttribute('value', '1');
    return productInput;
}

// Botón menos (-)
export const createProductFormMinus = (productInput) => {
    const productFormMinus = document.createElement('button');
    productFormMinus.setAttribute('class', 'minus');
    productFormMinus.innerHTML = '-';

    productFormMinus.addEventListener('click', (e) => {
        e.preventDefault();
        let counter = Number(productInput.value);
        if (productInput.value > 1) {
            productInput.value = counter - 1;
        }
    })
    
    return productFormMinus;
}

// Botón menos (+)
export const createProductFormPlus = (productInput) => {
    const productFormPlus = document.createElement('button');
    productFormPlus.setAttribute('class', 'plus');
    productFormPlus.innerHTML = '+';

    productFormPlus.addEventListener('click', (e) => {
        e.preventDefault();
        let counter = Number(productInput.value);
        productInput.value = counter + 1;
    })

    return productFormPlus;
}

// Botón agregar al carrito
export const createAddToShoppingCarButton = (product, productInput) => {
    const addToShoppingCarButton = document.createElement('input');
    addToShoppingCarButton.setAttribute('type', 'submit');
    addToShoppingCarButton.setAttribute('class', 'main__products-car-button');
    addToShoppingCarButton.setAttribute('value', 'Añadir al carrito');

    addToShoppingCarButton.addEventListener('click', (e) => {
        e.preventDefault();
        addProductToShoppingCar(product.id, productInput.value);
        builtShoppingCar();
        productInput.value = 1;
    })

    return addToShoppingCarButton;
}

/* --- Métodos que relacionan el carrito con la página principal --- */

// Adicionar productos al carrito de compras
const addProductToShoppingCar = (productId, productAmount) => {
    let desiredproduct = seachProductById(productId);

    if (checkShoppingCar(productId)) {
        updateProductInShoppingCar(productId, productAmount);
    } else {
        desiredproduct.amountInShoppingCar = Number(productAmount);
        desiredproduct.priceInShoppingCar = desiredproduct.finalPrice * Number(productAmount); 
        productsInShoppingCar.push(desiredproduct);
        shoppingCarTotal += desiredproduct.finalPrice * Number(productAmount);
        productsAmountInShoppingCar += Number(productAmount);
    }
}

// Búsqueda de un producto mediante su id
const seachProductById = (productId) => {
    return products.find(product => product.id == productId);
}

// Verfificación de si un producto ya se encuentra en el carrito de compras
const checkShoppingCar = (productId) => {
    let alreadyInShoppingCar = false;
    productsInShoppingCar.forEach(product => {
        if (product.id === productId) {
            alreadyInShoppingCar = true;
        }
    })
    return alreadyInShoppingCar;
}

// Actualización de la información de un producto en el carrito de compras cuando se agrega más del mismo desde la página principal
const updateProductInShoppingCar = (productId, productAmount) => {
    productsInShoppingCar.forEach(product => {
        if (product.id === productId) {
            product.amountInShoppingCar = product.amountInShoppingCar + Number(productAmount);
            product.priceInShoppingCar = product.finalPrice * product.amountInShoppingCar;
            shoppingCarTotal += product.finalPrice * Number(productAmount);
            productsAmountInShoppingCar += Number(productAmount);
        }
    });
}

/* --- Métodos que para la creación del carrito al interior del modal --- */

// Muestra los productos en el carrito de compras en conjunto con el total del mismo
const builtShoppingCar = () => {
    shoppingCarProductsContainer.innerHTML = '';
    if (productsInShoppingCar.length > 0) {
        displayProductsInShoppingCar();
    } else {
        shoppingCarProductsContainer.innerHTML = "<h3>¡Oh!, de momento no hay productos en tu carrito</h3>";
    }
    displayTotalInShoppingCar();
}

// Muestra los productos en el carrito de compras
const displayProductsInShoppingCar = () => {
    productsInShoppingCar.forEach(product => {
        const productArticle = document.createElement('article');
    
        productArticle.innerHTML = `
            <img src=".${product.img}" alt="Producto">
            <h3>${product.name}</h3>
        `
        const productDiv = document.createElement('div');

        let productInput = createProductFormInput();
        productInput.value = product.amountInShoppingCar;
        let minusButton = createProductFormMinus(productInput);
        let plusButton = createProductFormPlus(productInput);

        let productPrice = document.createElement('strong');
        productPrice.innerHTML = `${product.priceInShoppingCar} COP`;

        minusButton.addEventListener('click', () => {
            if (product.amountInShoppingCar > 1) {
                product.amountInShoppingCar = Number(productInput.value);
                product.priceInShoppingCar -= product.finalPrice;
                productPrice.innerHTML = `${product.priceInShoppingCar} COP`;
                shoppingCarTotal -= product.finalPrice;
                productsAmountInShoppingCar--;
                displayTotalInShoppingCar();
            }
        });

        plusButton.addEventListener('click', () => {
            product.amountInShoppingCar = Number(productInput.value);
            product.priceInShoppingCar += product.finalPrice;
            productPrice.innerHTML = `${product.priceInShoppingCar} COP`;
            shoppingCarTotal += product.finalPrice;
            productsAmountInShoppingCar++;
            displayTotalInShoppingCar();
        });

        let trashButton = createTrashButton(product);

        productDiv.append(minusButton);
        productDiv.append(productInput);
        productDiv.append(plusButton);

        productArticle.append(productDiv);
        productArticle.append(productPrice);
        productArticle.append(trashButton);

        shoppingCarProductsContainer.append(productArticle);
    })
}

// Muestra el total en el carrito de compras
const displayTotalInShoppingCar = () => {
    if (productsInShoppingCar.length > 0) {
        shoppingCarProductsTotal.innerHTML =`
            <h3>Total compra: ${shoppingCarTotal} COP</h3>
            <button class="main__shopping-car-final">Finalizar compra</button>
            <button class="main__shopping-car-empty">Vaciar carrito</button>
        `
        updateProductsAmount();
    } else {
        shoppingCarProductsTotal.innerHTML = "";
        productsAmountInShoppingCarContainer.innerHTML = "";
        productsAmountInShoppingCarContainer.classList.add('no-products');
    }
}

// Elimina por completo un prodicto del carrito
const createTrashButton = (product) => {
    let trashButton = document.createElement('button');
    trashButton.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;

    trashButton.addEventListener('click', () => {
        shoppingCarTotal -= product.finalPrice * product.amountInShoppingCar;
        productsAmountInShoppingCar -= product.amountInShoppingCar;
        let productIndex = productsInShoppingCar.indexOf(product);
        productsInShoppingCar.splice(productIndex, 1);
        builtShoppingCar();
        displayTotalInShoppingCar();
    })

    return trashButton;
}

// Actualiza la cantidad de productos en el carrito
const updateProductsAmount = () => {
    productsAmountInShoppingCarContainer.innerHTML = "";
    if (productsAmountInShoppingCar > 0) {
        productsAmountInShoppingCarContainer.classList.remove('no-products');
        productsAmountInShoppingCarContainer.innerHTML = `<p>${productsAmountInShoppingCar}</p>`
    }
}