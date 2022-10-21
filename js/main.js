// Variables necesarias
let option = '';
let shoppingCarProducts = 0;
let shoppingCarTotal = 0;
let productAmount = 0;
let shoppingCar = '';

// Productos
productName1 = 'Roronoa Zoro';
productPrice1 = 134000;
productAmount1 = 0;

productName2 = 'Batman';
productPrice2 = 70000;
productAmount2 = 0;

productName3 = 'Joker';
productPrice3 = 62000;
productAmount3 = 0;

productName4 = 'Deadpool';
productPrice4 = 360000;
productAmount4 = 0;

productName5 = 'Black Panther';
productPrice5 = 60000;
productAmount5 = 0;


do {
    option = prompt('¿Cómo podemos ayudarte hoy?\n1. Comprar un producto\n2. Buscar un producto\n3. Filtrar productos por categoría\n4. Salir');

    switch (option) {
        case '1':
            let product = '';
            do {
                product = prompt('¿Qué producto deseas comprar?\n1. Producto: ' + productName1 + ' - Precio: ' + productPrice1 + ' COP\n2. Producto: ' + productName2 + ' - Precio: ' + productPrice2 + ' COP\n3. Producto: ' + productName3 + ' - Precio: ' + productPrice3 + ' COP\n4. Producto: ' + productName4 + ' - Precio: ' + productPrice4 + ' COP\n5. Producto: ' + productName5 + ' - Precio: ' + productPrice5 + ' COP\n6. Regresar');

                switch (product) {
                    case '1':
                        productAmount = getProductAmount();
                        buyProduct(productPrice1, productAmount);
                        getProductsInShoppingCar(productName1, productAmount);
                        alert('Total compra: ' + shoppingCarTotal + '\nCantidad de productos en el carrito de compras: ' + shoppingCarProducts + '\nDetalle: ' + shoppingCar);
                        break;
                    case '2':
                        productAmount = getProductAmount();
                        buyProduct(productPrice2, productAmount);
                        getProductsInShoppingCar(productName2, productAmount);
                        alert('Total compra: ' + shoppingCarTotal + '\nCantidad de productos en el carrito de compras: ' + shoppingCarProducts + '\nDetalle: ' + shoppingCar);
                        break;
                    case '3':
                        productAmount = getProductAmount();
                        buyProduct(productPrice3, productAmount);
                        getProductsInShoppingCar(productName3, productAmount);
                        alert('Total compra: ' + shoppingCarTotal + '\nCantidad de productos en el carrito de compras: ' + shoppingCarProducts + '\nDetalle: ' + shoppingCar);
                        break;
                    case '4':
                        productAmount = getProductAmount();
                        buyProduct(productPrice4, productAmount);
                        getProductsInShoppingCar(productName4, productAmount);
                        alert('Total compra: ' + shoppingCarTotal + '\nCantidad de productos en el carrito de compras: ' + shoppingCarProducts + '\nDetalle: ' + shoppingCar);
                        break;
                    case '5':
                        productAmount = getProductAmount();
                        buyProduct(productPrice5, productAmount);
                        getProductsInShoppingCar(productName5, productAmount);
                        alert('Total compra: ' + shoppingCarTotal + '\nCantidad de productos en el carrito de compras: ' + shoppingCarProducts + '\nDetalle: ' + shoppingCar);
                        break;
                    case '6':
                        break;
                    default:
                        alert('Por favor ingrese una opción válida: 1 - 6');
                        break;
                }
            } while (product != '6');
            break;
        case '2':
            let procedure = '';
            let desiredProduct = '';
            do {
                procedure = prompt('1. Ingresar el nombre del producto a buscar\n2. Regresar');

                switch (procedure){
                    case '1':
                        desiredProduct = prompt('Por favor, ingresa el nombre del producto').toLowerCase();
                        productSearch(desiredProduct);
                        break;
                    case '2':
                        break;
                    default:
                        alert('Por favor ingrese una opción válida: 1 - 2');
                        break;
                }
            } while (procedure != '2');
            break;
        case '3':
            let category = '';
            do {
                category = prompt('Selecciona la categoría deseada:\n1. Anime/manga\n2. DC Comics\n3. Marvel Comics\n4. Regresar');

                switch (category){
                    case '1':
                        alert('Nuestras figuras de anime/manga:\nNombre del producto: ' + productName1 + ' - Precio: ' + productPrice1 + ' COP');
                        break;
                    case '2':
                        alert('Nuestras figuras de DC Comics:\nNombre del producto: ' + productName2 + ' - Precio: ' + productPrice2 + ' COP\nNombre del producto: ' + productName3 + ' - Precio: ' + productPrice3 + ' COP');
                        break;
                    case '3':
                        alert('Nuestras figuras de Marvel Comics:\nNombre del producto: ' + productName4 + ' - Precio: ' + productPrice4 + ' COP\nNombre del producto: ' + productName5 + ' - Precio: ' + productPrice5 + ' COP');
                        break;
                    case '4':
                        break;
                    default:
                        alert('Por favor ingrese una opción válida: 1 - 4');
                        break;
                }
            } while (category != '4');
            break;
        case '4':
            break;
        default:
            alert('Por favor ingrese una opción válida: 1 - 4');
            break;
    }
} while (option != '4');

function buyProduct(productPrice, productAmount) {
    shoppingCarTotal += productPrice * productAmount;
    shoppingCarProducts += productAmount;
}

function getProductAmount() {
    let productAmountInput = parseInt(prompt('Por favor ingrese la cantidad a comprar del producto seleccionado:'));
    
    while (productAmountInput <= 0 || isNaN(productAmountInput)) {
        productAmountInput = parseInt(prompt('Por favor ingrese una cantidad válida:'));
    }

    if (productAmountInput > 0) {
        return productAmountInput;
    }
}

function getProductsInShoppingCar(productName, productAmount) {
    return shoppingCar += '\n' + productName + ' - Cantidad: ' + productAmount;
}

function productSearch(productName) {
    switch(productName){
        case 'roronoa zoro':
        case 'roronoa':
        case 'zoro':
            alert('Nombre del producto: ' + productName1 + ' - Precio: ' + productPrice1 + ' COP');
            break;
        case 'batman':
            alert('Nombre del producto: ' + productName2 + ' - Precio: ' + productPrice2 + ' COP');
            break;
        case 'joker':
            alert('Nombre del producto: ' + productName3 + ' - Precio: ' + productPrice3 + ' COP');
            break;
        case 'deadpool':
            alert('Nombre del producto: ' + productName4 + ' - Precio: ' + productPrice4 + ' COP');
            break;
        case 'black panther':
        case 'black':
        case 'panther':
            alert('Nombre del producto: ' + productName5 + ' - Precio: ' + productPrice5 + ' COP');
            break;
        default:
            alert('Oh, de momento no contamos con el producto que buscas, ¡estamos trabajando en aumentar nuestra colección!');
            break;
    }
}