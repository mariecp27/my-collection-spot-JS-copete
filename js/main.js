// Variables necesarias
let option = '';
let shoppingCarProducts = 0;
let shoppingCarTotal = 0;
let productAmount = 0;

// Productos
nameProduct1 = 'Roronoa Zoro';
priceProduct1 = 134000;

nameProduct2 = 'Batman';
priceProduct2 = 70000;

nameProduct3 = 'Joker';
priceProduct3 = 62000;

nameProduct4 = 'Deadpool';
priceProduct4 = 360000;

nameProduct5 = 'Black Panther';
priceProduct5 = 60000;

do {
    option = prompt('¿Cómo podemos ayudarte hoy?\n1. Comprar un producto.\n2. Buscar un producto.\n3. Filtrar productos por categoría.\n4. Salir');

    switch (option) {
        case '1':
            let product = '';
            do {
                product = prompt('¿Qué producto deseas comprar?\n1. Producto: ' + nameProduct1 + ' - Precio: ' + priceProduct1 + ' COP\n2. Producto: ' + nameProduct2 + ' - Precio: ' + priceProduct2 + ' COP\n3. Producto: ' + nameProduct3 + ' - Precio: ' + priceProduct3 + ' COP\n4. Producto: ' + nameProduct4 + ' - Precio: ' + priceProduct4 + ' COP\n5. Producto: ' + nameProduct5 + ' - Precio: ' + priceProduct5 + ' COP\n6. Regresar');

                switch (product){
                    case '1':
                        productAmount = getProductAmount();
                        buyProduct(priceProduct1, productAmount);
                        alert('Total compra: ' + shoppingCarTotal + '\nProductos en el carrito de compras: ' + productAmount);
                        break;
                    case '2':
                        productAmount = getProductAmount();
                        buyProduct(priceProduct2, productAmount);
                        alert('Total compra: ' + shoppingCarTotal + '\nProductos en el carrito de compras: ' + productAmount);
                        break;
                    case '3':
                        productAmount = getProductAmount();
                        buyProduct(priceProduct3, productAmount);
                        alert('Total compra: ' + shoppingCarTotal + '\nProductos en el carrito de compras: ' + productAmount);
                        break;
                    case '4':
                        productAmount = getProductAmount();
                        buyProduct(priceProduct4, productAmount);
                        alert('Total compra: ' + shoppingCarTotal + '\nProductos en el carrito de compras: ' + productAmount);
                        break;
                    case '5':
                        productAmount = getProductAmount();
                        buyProduct(priceProduct5, productAmount);
                        alert('Total compra: ' + shoppingCarTotal + '\nProductos en el carrito de compras: ' + productAmount);
                        break;
                    case '6':
                        break;
                    default:
                        product = prompt('Por favor ingrese una opción válida: 1 - 6');
                }
            } while (product != '6');
            break;
    }

} while (option != '4');

function buyProduct(productPrice, productAmount) {
    shoppingCarTotal += productPrice * productAmount;
    shoppingCarProducts += productAmount;
}

function deleteProduct(productPrice, productAmount) {
    shoppingCarTotal -= productPrice * productAmount;
    shoppingCarProducts -= productAmount;
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