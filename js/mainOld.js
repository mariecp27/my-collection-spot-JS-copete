// Productos
const products = [
    {
        id: 1,
        name: 'Roronoa Zoro',
        serie: 'One piece',
        price: 134000,
        category: 'anime',
        onSale: false,
        newProduct: true,
        finalPrice: 134000,
        inShoppingCar: false,
        amountInShoppingCar: 0
    },
    {
        id: 2,
        name: 'Batman',
        serie: 'DC Comics',
        price: 70000,
        category: 'dcComics',
        onSale: false,
        newProduct: true,
        finalPrice: 70000,
        inShoppingCar: false,
        amountInShoppingCar: 0
    },
    {
        id: 3,
        name: 'Joker',
        serie: 'DC Comics',
        price: 62000,
        category: 'dcComics',
        onSale: false,
        newProduct: true,
        finalPrice: 62000,
        inShoppingCar: false,
        amountInShoppingCar: 0
    },
    {
        id: 4,
        name: 'Deadpool',
        serie: 'Marvel Comics',
        price: 360000,
        category: 'marvelComics',
        onSale: false,
        newProduct: true,
        finalPrice: 360000,
        inShoppingCar: false,
        amountInShoppingCar: 0
    },
    {
        id: 5,
        name: 'Black Panther',
        serie: 'Marvel Comics',
        price: 60000,
        category: 'marvelComics',
        onSale: false,
        newProduct: true,
        finalPrice: 60000,
        inShoppingCar: false,
        amountInShoppingCar: 0
    },
    {
        id: 6,
        name: 'Mile Morales',
        serie: 'Marvel Comics',
        price: 290000,
        category: 'marvelComics',
        onSale: true,
        newProduct: false,
        finalPrice: 250000,
        inShoppingCar: false,
        amountInShoppingCar: 0
    },
    {
        id: 7,
        name: 'Iron Man',
        serie: 'Marvel Comics',
        price: 210000,
        category: 'marvelComics',
        onSale: true,
        newProduct: false,
        finalPrice: 180000,
        inShoppingCar: false,
        amountInShoppingCar: 0
    },
    {
        id: 8,
        name: 'Doctor Fate',
        serie: 'DC Comics',
        price: 110000,
        category: 'dcComics',
        onSale: true,
        newProduct: false,
        finalPrice: 90000,
        inShoppingCar: false,
        amountInShoppingCar: 0
    },
    {
        id: 9,
        name: 'Black Adam',
        serie: 'DC Comics',
        price: 135000,
        category: 'dcComics',
        onSale: true,
        newProduct: false,
        finalPrice: 110000,
        inShoppingCar: false,
        amountInShoppingCar: 0
    },
    {
        id: 10,
        name: 'Nezuko Kamado',
        serie: 'Kimetsu no Yaiba',
        price: 390000,
        category: 'anime',
        onSale: true,
        newProduct: false,
        finalPrice: 320000,
        inShoppingCar: false,
        amountInShoppingCar: 0
    },
    {
        id: 11,
        name: 'Demogorgon',
        serie: 'Stranger Things',
        price: 181000,
        category: 'series',
        onSale: false,
        newProduct: false,
        finalPrice: 181000,
        inShoppingCar: false,
        amountInShoppingCar: 0
    },
    {
        id: 12,
        name: 'Gimli',
        serie: 'The Lord Of The Rings',
        price: 110000,
        category: 'series',
        onSale: true,
        newProduct: false,
        finalPrice: 80000,
        inShoppingCar: false,
        amountInShoppingCar: 0
    },
    {
        id: 13,
        name: 'Ace',
        serie: 'One Piece',
        price: 400000,
        category: 'anime',
        onSale: false,
        newProduct: false,
        finalPrice: 400000,
        inShoppingCar: false,
        amountInShoppingCar: 0
    },
    {
        id: 14,
        name: 'Iron Spiderman',
        serie: 'Marvel Comics',
        price: 160000,
        category: 'marvelComics',
        onSale: false,
        newProduct: false,
        finalPrice: 160000,
        inShoppingCar: false,
        amountInShoppingCar: 0
    },
    {
        id: 15,
        name: 'Naofumi Iwatani',
        serie: 'Tate no Yūsha no Nariagari',
        price: 420000,
        category: 'anime',
        onSale: false,
        newProduct: false,
        finalPrice: 420000,
        inShoppingCar: false,
        amountInShoppingCar: 0
    },
    {
        id: 16,
        name: 'Flash',
        serie: 'DC Comics',
        price: 90000,
        category: 'dcComics',
        onSale: false,
        newProduct: false,
        finalPrice: 90000,
        inShoppingCar: false,
        amountInShoppingCar: 0
    },
    {
        id: 17,
        name: 'Naruto Uzumaki',
        serie: 'Naruto',
        price: 200000,
        category: 'anime',
        onSale: false,
        newProduct: false,
        finalPrice: 200000,
        inShoppingCar: false,
        amountInShoppingCar: 0
    },
    {
        id: 18,
        name: 'Spawn',
        serie: 'Spawn',
        price: 105000,
        category: 'independentComics',
        onSale: false,
        newProduct: false,
        finalPrice: 105000,
        inShoppingCar: false,
        amountInShoppingCar: 0
    },
    {
        id: 19,
        name: 'Sasuke Uchiha',
        serie: 'Naruto',
        price: 360000,
        category: 'anime',
        onSale: false,
        newProduct: false,
        finalPrice: 360000,
        inShoppingCar: false,
        amountInShoppingCar: 0
    },
    {
        id: 20,
        name: 'Monkey D. Luffy',
        serie: 'One Piece',
        price: 215000,
        category: 'anime',
        onSale: false,
        newProduct: false,
        finalPrice: 215000,
        inShoppingCar: false,
        amountInShoppingCar: 0
    },
    {
        id: 21,
        name: 'Yuji Itadori',
        serie: 'Jujutsu Kaisen',
        price: 60000,
        category: 'anime',
        onSale: false,
        newProduct: false,
        finalPrice: 60000,
        inShoppingCar: false,
        amountInShoppingCar: 0
    },
    /*
    {
        id: 22,
        name: 'Izuku Midoriya',
        serie: 'My Hero Academia',
        price: 153000,
        category: 'anime',
        onSale: true,
        newProduct: false,
        finalPrice: 110000,
        inShoppingCar: false,
        amountInShoppingCar: 0
    }*/
]

// Variables necesarias
let option = ''; // Opción del menú principal
let shoppingCarProducts = 0; // Cantidad de productos en el carrito de compras
let shoppingCarTotal = 0; // Total (COP) del carrito de compras
let productsAmount = products.length; // Cantidad de productos
let categories = ['Nuevo', 'En oferta', 'Anime/manga', 'DC Comics', 'Comics independientes', 'Marvel Comics', 'Series/películas']; // Categorías de los productos
let categoriesAmount = categories.length; // Cantidad de categorías

// Menú principal

do {
    option = prompt(`¿Cómo podemos ayudarte hoy?
    1. Comprar un producto
    2. Buscar un producto
    3. Filtrar productos por categoría
    4. Ver productos del carrito de compras
    5. Actualizar productos del carrito de compras
    6. Salir`);

    switch (option) {
        case '1':
            buyProduct();
            break;
        case '2':
            productSearchByName();
            break;
        case '3':
            filterByCategory();
            break;
        case '4':
            printProductsInShoppingCar();
            break;
        case '5':
            updateShoppingCar();
            break;
        case '6':
            break;
        default:
            alert('Por favor ingrese una opción válida: 1 - 6');
            break;
    }
} while (option != '6');

// Primera opción del menú principal: comprar producto
function buyProduct() {
    let desiredproduct = '';
    do {
        desiredproduct = prompt(`¿Qué producto deseas comprar? ${printProducts()} \n${productsAmount + 1}. Regresar`);
        if (isNaN(parseInt(desiredproduct))) {
            alert(`Por favor ingrese una opción válida: 1 - ${productsAmount + 1}`);
        } else if (!verifyBeforeBuy(parseInt(desiredproduct))) {
            if (parseInt(desiredproduct) <= productsAmount && parseInt(desiredproduct) > 0) {
                let product = searchProductByIndex(parseInt(desiredproduct));
                addProductToShoppingCar(product);
                printProductsInShoppingCar();
            } else if (parseInt(desiredproduct) > (productsAmount + 1) || parseInt(desiredproduct) <= 0) {
                alert(`Por favor ingrese una opción válida: 1 - ${productsAmount + 1}`);
            }
        } else {
            alert('El producto seleccionado ya está en el carrito');
        }
    } while (desiredproduct != (productsAmount + 1).toString());
}

// Imprimir el nombres de todos los productos seguido de su precio
function printProducts() {
    let productsString = '';
    products.forEach( (product, i) => {
        productsString += `\n${i + 1}. Producto: ${product.name} - Precio: ${product.finalPrice} COP`;
    })
    return productsString;
}

// Verifica si un producto ya está en el carrito de compras
function verifyBeforeBuy(index) {
    let isInShoppingCar = false;
    let productsInShoppingCar = getProductsInShoppingCar();
    productsInShoppingCar.forEach( product => {
        if (product.id == index) {
            isInShoppingCar = true;
        }
    })
    return isInShoppingCar;
}

// Genera un array con los productos en el carrito de compras
function getProductsInShoppingCar() {
    let productsInShoppingCar = products.filter(product => product.inShoppingCar);
    return productsInShoppingCar;
}

// Permite buscar productos por su id (corresponde a su posición en el array + 1)
function searchProductByIndex(index) {
    let searchedProduct = products.find(product => product.id === (index));
    return searchedProduct;
}

// Agrega productos al carrito de compras
function addProductToShoppingCar(product) {
    product.inShoppingCar = true;
    product.amountInShoppingCar = getProductAmount();
    shoppingCarTotal += product.finalPrice * product.amountInShoppingCar;
    shoppingCarProducts += product.amountInShoppingCar;
}

// Obtiene la cantidad a agregar de un producto al carrito de compras siempre que sea un número mayor a 0
function getProductAmount() {
    let productAmountInput = parseInt(prompt('Por favor ingrese la cantidad a comprar del producto seleccionado:'));
    while (productAmountInput <= 0 || isNaN(productAmountInput)) {
        productAmountInput = parseInt(prompt('Por favor ingrese una cantidad válida:'));
    }
    return productAmountInput;
}

// Imprime el detalle el carrito de compras, cuarta opción del menú principal
function printProductsInShoppingCar() {
    alert(`Total compra: ${shoppingCarTotal}\nCantidad de productos en el carrito de compras: ${shoppingCarProducts}\nDetalle: ${getProductsInShoppingCarString()}`);
}

// Imprime los productos en el carrito de compras, junto con su cantidad y precio (COP)
function getProductsInShoppingCarString() {
    let productsInShoppingCar = getProductsInShoppingCar();
    let productsInShoppingCarString = '';
    if (productsInShoppingCar.length == 0) {
        productsInShoppingCarString = "De momento no hay productos en el carrito";
    } else {
        productsInShoppingCar.forEach( (product, i) => {
            productsInShoppingCarString += `\n${i + 1}. Producto: ${product.name} - Precio: ${product.finalPrice} COP - Cantidad: ${product.amountInShoppingCar}`;
        })
    }
    return productsInShoppingCarString;
}

// Segunda opción del menú principal: búsqueda de producto por nombre
function productSearchByName() {
    let desiredproduct = prompt('Por favor, ingresa el nombre del producto:').toLowerCase();
    let productsString = '';
    let foundProducts = products.filter(product => product.name.toLowerCase().includes(desiredproduct));
    if (foundProducts.length == 0) {
        alert('Oh, de momento, no hay productos con ese nombre');
    } else {
        productsString = 'Productos hallados:'
        foundProducts.forEach( (product, i) => {
            productsString += `\n${i + 1}. Producto: ${product.name} - Precio: ${product.finalPrice} COP`;
        })
        alert(productsString);
    }
}

// Tercera opción del menú principal: filtrado de productos por categoría
function filterByCategory() {
    let desiredCategory = '';
    do {
        desiredCategory = prompt(`Selecciona la categoría deseada: ${printCategories()} \n${categoriesAmount + 1}. Regresar`);

        switch (desiredCategory) {
            case '1':
                alert(`Nuevos productos: ${getNewProducts()}`);
                break;
            case '2':
                alert(`Productos en oferta: ${getOnSaleProducts()}`);
                break;
            case '3':
                alert(`Productos de anime/manga: ${getAnimeProducts()}`);
                break;
            case '4':
                alert(`Productos de DC Comics: ${getDcProducts()}`);
                break;
            case '5':
                alert(`Productos de comics independientes: ${getIndependentProducts()}`);
                break;
            case '6':
                alert(`Productos de Marvel Comics: ${getMarvelProducts()}`);
                break;
            case '7':
                alert(`Productos de series/películas: ${getSeriesProducts()}`);
                break;
            case '8':
                break;
            default:
                alert('Por favor ingrese una opción válida: 1 - 8');
                break;
        }
    } while (desiredCategory != '8');
}

// Imprime todas las categorías registradas
function printCategories() {
    let categoriesString = '';
    categories.forEach( (category, i) => {
        categoriesString += `\n${i + 1}. ${category}`;
    })
    return categoriesString;
}

// Imprime los nombres de los nuevos productos, junto con su precio (COP)
function getNewProducts() {
    let productsString = '';
    let filteredProducts = products.filter(product => product.newProduct == true);
    filteredProducts.forEach( (product, i) => {
        productsString += `\n${i + 1}. Producto: ${product.name} - Precio: ${product.finalPrice} COP`
    })
    return productsString;
}

// Imprime los nombres de los productos en oferta, junto con su precio (COP)
function getOnSaleProducts() {
    let productsString = '';
    let filteredProducts = products.filter(product => product.onSale == true);
    filteredProducts.forEach( (product, i) => {
        productsString += `\n${i + 1}. Producto: ${product.name} - Precio: ${product.finalPrice} COP`
    })
    return productsString;
}

// Imprime los nombres de los productos de anime/manga, junto con su precio (COP)
function getAnimeProducts() {
    let productsString = '';
    let filteredProducts = products.filter(product => product.category == 'anime');
    filteredProducts.forEach( (product, i) => {
        productsString += `\n${i + 1}. Producto: ${product.name} - Precio: ${product.finalPrice} COP`
    })
    return productsString;
}

// Imprime los nombres de los productos de DC Comics, junto con su precio (COP)
function getDcProducts() {
    let productsString = '';
    let filteredProducts = products.filter(product => product.category == 'dcComics');
    filteredProducts.forEach( (product, i) => {
        productsString += `\n${i + 1}. Producto: ${product.name} - Precio: ${product.finalPrice} COP`
    })
    return productsString;
}

// Imprime los nombres de los productos de comics independientes, junto con su precio (COP)
function getIndependentProducts() {
    let productsString = '';
    let filteredProducts = products.filter(product => product.category == 'independentComics');
    filteredProducts.forEach( (product, i) => {
        productsString += `\n${i + 1}. Producto: ${product.name} - Precio: ${product.finalPrice} COP`
    })
    return productsString;
}

// Imprime los nombres de los productos de Marvel Comics, junto con su precio (COP)
function getMarvelProducts() {
    let productsString = '';
    let filteredProducts = products.filter(product => product.category == 'marvelComics');
    filteredProducts.forEach( (product, i) => {
        productsString += `\n${i + 1}. Producto: ${product.name} - Precio: ${product.finalPrice} COP`
    })
    return productsString;
}

// Imprime los nombres de los productos de series/peículas, junto con su precio (COP)
function getSeriesProducts() {
    let productsString = '';
    let filteredProducts = products.filter(product => product.category == 'series');
    filteredProducts.forEach( (product, i) => {
        productsString += `\n${i + 1}. Producto: ${product.name} - Precio: ${product.finalPrice} COP`
    })
    return productsString;
}

// Quinta opción del menú principal: actualización del carrito de compras (modificación d ecalidad y eliminación de productos)
function updateShoppingCar() {
    let desiredproduct = '';
    let shoppingCarOption = '';
    do {
        desiredproduct = prompt(`Selecciona el producto de tu carrito de compras que deseas modificar: ${getProductsInShoppingCarString()} \n${getProductsInShoppingCar().length + 1}. Regresar`);
        if (isNaN(parseInt(desiredproduct))) {
            alert(`Por favor ingrese una opción válida: 1 - ${getProductsInShoppingCar().length + 1}`);
        } else {
            if (parseInt(desiredproduct) <= getProductsInShoppingCar().length && parseInt(desiredproduct) > 0) {
                let product = searchProductInShoppingCarByIndex(parseInt(desiredproduct - 1));
                shoppingCarOption = prompt(`¿Qué deseas hacer? \n1. Modificar cantidad \n2. Eliminar del carrito`);
                switch (shoppingCarOption) {
                    case '1':
                        updateProductInShoppingCar(product);
                        break;
                    case '2':
                        deleteProductInShoppingCar(product);
                        break;
                    default:
                        alert('Por favor ingrese una opción válida: 1 - 2');
                        break;
                }
                alert(`Total compra: ${shoppingCarTotal}\nCantidad de productos en el carrito de compras: ${shoppingCarProducts}\nDetalle: ${getProductsInShoppingCarString()}`);
            } else if (parseInt(desiredproduct) > (getProductsInShoppingCar().length + 1) || parseInt(desiredproduct) <= 0) {
                alert(`Por favor ingrese una opción válida: 1 - ${getProductsInShoppingCar().length + 1}`);
            }
        }
    } while (desiredproduct != (getProductsInShoppingCar().length + 1).toString());
}

// Busca productos en el carrito de compras por un index (posición en el array + 1)
function searchProductInShoppingCarByIndex(index) {
    let searchedProduct = {};
    getProductsInShoppingCar().forEach ( (product, i) => {
        if (index == i) {
            searchedProduct = product;
        }
    })
    return searchedProduct;
}

// Modifica la cantidad de un producto en el carrito de compras
function updateProductInShoppingCar(product) {
    deleteProductInShoppingCar(product);
    addProductToShoppingCar(product);
}

// Elimina un producto del carrito de compras
function deleteProductInShoppingCar(product) {
    shoppingCarTotal -= product.finalPrice * product.amountInShoppingCar;
    shoppingCarProducts -= product.amountInShoppingCar;
    product.inShoppingCar = false;
    product.amountInShoppingCar = 0;
}