// Productos
const products = [
    {
        id: 1,
        name: 'Roronoa Zoro',
        serie: 'One piece',
        price: '134000',
        category: 'anime',
        onSale: false,
        newProduct: true,
        inShoppingCar: false,
        amountInShoppingCar: 0
    },
    {
        id: 2,
        name: 'Batman',
        serie: 'DC Comics',
        price: '70000',
        category: 'dcComics',
        onSale: false,
        newProduct: true,
        inShoppingCar: false,
        amountInShoppingCar: 0
    },
    {
        id: 3,
        name: 'Joker',
        serie: 'DC Comics',
        price: '62000',
        category: 'dcComics',
        onSale: false,
        newProduct: true,
        inShoppingCar: false,
        amountInShoppingCar: 0
    },
    {
        id: 4,
        name: 'Deadpool',
        serie: 'Marvel Comics',
        price: '360000',
        category: 'marvelComics',
        onSale: false,
        newProduct: true,
        inShoppingCar: false,
        amountInShoppingCar: 0
    },
    {
        id: 5,
        name: 'Black Panther',
        serie: 'Marvel Comics',
        price: '60000',
        category: 'marvelComics',
        onSale: false,
        newProduct: true,
        inShoppingCar: false,
        amountInShoppingCar: 0
    },
    {
        id: 6,
        name: 'Mile Morales',
        serie: 'Marvel Comics',
        price: '290000',
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
        price: '210000',
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
        price: '110000',
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
        price: '135000',
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
        price: '390000',
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
        price: '181000',
        category: 'series',
        onSale: false,
        newProduct: false,
        inShoppingCar: false,
        amountInShoppingCar: 0
    },
    {
        id: 12,
        name: 'Gimli',
        serie: 'The Lord Of The Rings',
        price: '110000',
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
        price: '400000',
        category: 'anime',
        onSale: false,
        newProduct: false,
        inShoppingCar: false,
        amountInShoppingCar: 0
    },
    {
        id: 14,
        name: 'Iron Spiderman',
        serie: 'Marvel Comics',
        price: '160000',
        category: 'marvelComics',
        onSale: false,
        newProduct: false,
        inShoppingCar: false,
        amountInShoppingCar: 0
    },
    {
        id: 15,
        name: 'Naofumi Iwatani',
        serie: 'Tate no Yūsha no Nariagari',
        price: '420000',
        category: 'anime',
        onSale: false,
        newProduct: false,
        inShoppingCar: false,
        amountInShoppingCar: 0
    },
    {
        id: 16,
        name: 'Flash',
        serie: 'DC Comics',
        price: '90000',
        category: 'dcComics',
        onSale: false,
        newProduct: false,
        inShoppingCar: false,
        amountInShoppingCar: 0
    },
    {
        id: 17,
        name: 'Naruto Uzumaki',
        serie: 'Naruto',
        price: '200000',
        category: 'anime',
        onSale: false,
        newProduct: false,
        inShoppingCar: false,
        amountInShoppingCar: 0
    },
    {
        id: 18,
        name: 'Spawn',
        serie: 'Spawn',
        price: '105000',
        category: 'independentComics',
        onSale: false,
        newProduct: false,
        inShoppingCar: false,
        amountInShoppingCar: 0
    },
    {
        id: 19,
        name: 'Sasuke Uchiha',
        serie: 'Naruto',
        price: '360000',
        category: 'anime',
        onSale: false,
        newProduct: false,
        inShoppingCar: false,
        amountInShoppingCar: 0
    },
    {
        id: 20,
        name: 'Monkey D. Luffy',
        serie: 'One Piece',
        price: '215000',
        category: 'anime',
        onSale: false,
        newProduct: false,
        inShoppingCar: false,
        amountInShoppingCar: 0
    },
    {
        id: 21,
        name: 'Yuji Itadori',
        serie: 'Jujutsu Kaisen',
        price: '60000',
        category: 'anime',
        onSale: false,
        newProduct: false,
        inShoppingCar: false,
        amountInShoppingCar: 0
    },
    /*
    {
        id: 22,
        name: 'Izuku Midoriya',
        serie: 'My Hero Academia',
        price: '153000',
        category: 'anime',
        onSale: true,
        newProduct: false,
        finalPrice: 110000,
        inShoppingCar: false,
        amountInShoppingCar: 0
    }*/
]

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

// Variables necesarias
let option = '';
let shoppingCarProducts = 0;
let shoppingCarTotal = 0;
let productAmount = 0;
let shoppingCar = '';
let productsAmount = products.length;

do {
    option = prompt('¿Cómo podemos ayudarte hoy?\n1. Comprar un producto\n2. Buscar un producto\n3. Filtrar productos por categoría\n4. Salir');

    switch (option) {
        case '1':
            buyProduct();
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

function buyProduct() {
    let desiredproduct = '';
    do {
        desiredproduct = prompt(`¿Qué producto deseas comprar? ${printProducts()} \n${productsAmount + 1}. Mostrar productos en el carrito \n${productsAmount + 2}. Regresar`);

        if (isNaN(parseInt(desiredproduct))) {
            alert(`Por favor ingrese una opción válida: 1 - ${productsAmount + 1}`);
        } else if (!verifyBeforeBuy(parseInt(desiredproduct))) {
            if (parseInt(desiredproduct) <= productsAmount && parseInt(desiredproduct) > 0) {
                let product = searchProductByIndex(parseInt(desiredproduct));
                product.inShoppingCar = true;
                product.amountInShoppingCar = getProductAmount();
                addProductToShoppingCar(product);
                alert('Total compra: ' + shoppingCarTotal + '\nCantidad de productos en el carrito de compras: ' + shoppingCarProducts + '\nDetalle: ' + getProductsInShoppingCarString());
            } else if (parseInt(desiredproduct) == (productsAmount + 1)) {
                alert('Total compra: ' + shoppingCarTotal + '\nCantidad de productos en el carrito de compras: ' + shoppingCarProducts + '\nDetalle: ' + getProductsInShoppingCarString());
            } else if (parseInt(desiredproduct) > (productsAmount + 2) || parseInt(desiredproduct) <= 0){
                alert(`Por favor ingrese una opción válida: 1 - ${productsAmount + 1}`);
            }
        } else {
            alert('El producto seleccionado ya está en el carrito');
        }
    } while (desiredproduct != (productsAmount + 2).toString());
}

function printProducts() {
    let productsString = '';
    products.forEach( (product, i) => {
        productsString += `\n${i + 1}. Producto: ${product.name} - Precio: ${product.price}`;
    })
    return productsString;
}

function searchProductByIndex(index) {
    let searchedProduct = products.find(product => product.id === (index));
    return searchedProduct;
}

function getProductsInShoppingCar() {
    let productsInShoppingCar = products.filter(product => product.inShoppingCar);
    return productsInShoppingCar;
}

function verifyBeforeBuy(index){
    let isInShoppingCar = false;
    let productsInShoppingCar = getProductsInShoppingCar();
    productsInShoppingCar.forEach( product => {
        if (product.id == index) {
            isInShoppingCar = true;
        }
    })
    return isInShoppingCar;
}

function getProductAmount() {
    let productAmountInput = parseInt(prompt('Por favor ingrese la cantidad a comprar del producto seleccionado:'));
    while (productAmountInput <= 0 || isNaN(productAmountInput)) {
        productAmountInput = parseInt(prompt('Por favor ingrese una cantidad válida:'));
    }
    return productAmountInput;
}

function addProductToShoppingCar(product) {
    shoppingCarTotal += product.price * product.amountInShoppingCar;
    shoppingCarProducts += product.amountInShoppingCar;
}

function getProductsInShoppingCarString() {
    let productsInShoppingCar = getProductsInShoppingCar();
    let productsInShoppingCarString = '';
    if (productsInShoppingCar.length == 0) {
        productsInShoppingCarString = "De momento no hay productos en el carrito";
    } else {
        productsInShoppingCar.forEach( (product, i) => {
            productsInShoppingCarString += `\n${i + 1}. Producto: ${product.name} - Cantidad: ${product.amountInShoppingCar}`;
        })
    }
    return productsInShoppingCarString;
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