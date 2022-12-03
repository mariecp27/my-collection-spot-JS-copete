// Selectores
const shoppingCarProductsContainer = document.querySelector('.main__shopping-car-products');
const shoppingCarProductsTotal = document.querySelector('.main__shopping-car-total');
const productsAmountInShoppingCarContainer = document.querySelector('.main__shopping-amount');

// Variables
let productsInShoppingCar = JSON.parse(localStorage.getItem('productsInShoppingCar')) || [];
let shoppingCarTotal = Number(JSON.parse(localStorage.getItem('shoppingCarTotal'))) || 0;
let productsAmountInShoppingCar = Number(JSON.parse(localStorage.getItem('productsAmountInShoppingCar'))) || 0;

// Función asíncrona para obtener los productos
const requestProducts = async () =>  {
    const res = await fetch('../js/products.json');
    const data = await res.json();

    return data;
}

const products = await requestProducts();

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
    });
    
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
    });

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

        Swal.fire({
            toast: true,
            icon: 'success',
            title: 'Producto agregado al carrito',
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,

            customClass: {
                title:'toast_title',
            }
        });
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

        localStorage.setItem('productsInShoppingCar', JSON.stringify(productsInShoppingCar));
        localStorage.setItem('shoppingCarTotal', shoppingCarTotal);
        localStorage.setItem('productsAmountInShoppingCar', productsAmountInShoppingCar);
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

            localStorage.setItem('productsInShoppingCar', JSON.stringify(productsInShoppingCar));
            localStorage.setItem('shoppingCarTotal', shoppingCarTotal);
            localStorage.setItem('productsAmountInShoppingCar', productsAmountInShoppingCar);
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
            <img src="${getImgUrl(product)}" alt="Producto">
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

                localStorage.setItem('productsInShoppingCar', JSON.stringify(productsInShoppingCar));
                localStorage.setItem('shoppingCarTotal', shoppingCarTotal);
                localStorage.setItem('productsAmountInShoppingCar', productsAmountInShoppingCar);
            }
        });

        plusButton.addEventListener('click', () => {
            product.amountInShoppingCar = Number(productInput.value);
            product.priceInShoppingCar += product.finalPrice;
            productPrice.innerHTML = `${product.priceInShoppingCar} COP`;
            shoppingCarTotal += product.finalPrice;
            productsAmountInShoppingCar++;
            displayTotalInShoppingCar();

            localStorage.setItem('productsInShoppingCar', JSON.stringify(productsInShoppingCar));
            localStorage.setItem('shoppingCarTotal', shoppingCarTotal);
            localStorage.setItem('productsAmountInShoppingCar', productsAmountInShoppingCar);
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
        `
        let finishPurchaseButton = createFinishPurchaseButton();
        let emptyShoppingCarButton = createEmptyShoppingCarButton();

        shoppingCarProductsTotal.append(finishPurchaseButton);
        shoppingCarProductsTotal.append(emptyShoppingCarButton);

        updateProductsAmount();
    } else {
        shoppingCarProductsTotal.innerHTML = "";
        productsAmountInShoppingCarContainer.innerHTML = "";
        productsAmountInShoppingCarContainer.classList.add('no-products');
    }
}

// Elimina por completo un producto del carrito
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

        localStorage.setItem('productsInShoppingCar', JSON.stringify(productsInShoppingCar));
        localStorage.setItem('shoppingCarTotal', shoppingCarTotal);
        localStorage.setItem('productsAmountInShoppingCar', productsAmountInShoppingCar);
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

// Crear botón de 'finalizar compra'
const createFinishPurchaseButton = () => {
    let finishPurchaseButton = document.createElement('button');
    finishPurchaseButton.setAttribute('class', 'main__shopping-car-final');
    finishPurchaseButton.innerHTML = 'Finalizar compra';

    finishPurchaseButton.addEventListener('click', () => {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: '¡Compra finalizada!',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,

            customClass: {
                title:'success__title',
            }
        })
        productsInShoppingCar = [];
        shoppingCarTotal = 0;
        productsAmountInShoppingCar = 0;

        localStorage.removeItem('productsInShoppingCar');
        localStorage.removeItem('shoppingCarTotal');
        localStorage.removeItem('productsAmountInShoppingCar');

        builtShoppingCar();
    })

    return finishPurchaseButton;
}

// Crear botón de 'vaciar carrito'
const createEmptyShoppingCarButton = () => {
    let emptyShoppingCartButton = document.createElement('button');
    emptyShoppingCartButton.setAttribute('class', 'main__shopping-car-empty');
    emptyShoppingCartButton.innerHTML = 'Vaciar carrito';

    emptyShoppingCartButton.addEventListener('click', () => {
        Swal.fire({
            title: '¿Deseas eliminar los productos en el carrito?',
            html: '<p class="warning__text">Este proceso no se puede revertir</p>',
            icon: 'warning',
            padding: '1rem',
            backdrop: true,
            position: 'center',
            allowOutsideClick: true,
            allowEscapeKey: true,
            allowEnterKey: true,
            stopKeydownPropagation: false,
            showCancelButton: true,
            confirmButtonText: 'Eliminar',

            customClass: {
                title:'warning__title',
                confirmButton: 'warning__confirm',
                cancelButton: 'warning__cancel'
            }
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: '¡Productos Eliminados!',
                    html: '<p class="warning__text">El carrito ha sido vaciado</p>',
                    icon: 'success',
                    showCancelButton: false,
                    showConfirmButton: false,
                    timer: 2000,
                    timerProgressBar: true,
                    
                    customClass: {
                        title:'warning__title',
                        html: 'warning__text'
                    }
                });

                productsInShoppingCar = [];
                shoppingCarTotal = 0;
                productsAmountInShoppingCar = 0;
        
                localStorage.removeItem('productsInShoppingCar');
                localStorage.removeItem('shoppingCarTotal');
                localStorage.removeItem('productsAmountInShoppingCar');
        
                builtShoppingCar();
            }
        });
    });

    return emptyShoppingCartButton;
}

// Obtener ruta de las imágenes
const getImgUrl = (product) => {
    let path = window.location.pathname;
    let page = path.split("/").pop();
    let productURL = '';
    if (page.includes('store') || page.includes('about-us') || page.includes('contact-us')) {
        productURL = `..${product.img}`;
    } else {
        productURL = `.${product.img}`;
    }
    return productURL;
}

// Contruye el carrito de compras al ingresar a la página
builtShoppingCar();