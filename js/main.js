window.addEventListener('load', function() {

    const newProductsContainer = document.querySelector('.main__new-products-container div');
    const onSaleProductsContainer = document.querySelector('.main__onsale-products-container div');
    const shoppingCarProductsContainer = document.querySelector('.main__shopping-car-products');
    const shoppingCarProductsTotal = document.querySelector('.main__shopping-car-total');

    let productsInShoppingCar = [];
    let shoppingCarTotal = 0;


    function getNewProducts() {
        return products.filter(product => product.newProduct == true);
    }

    getNewProducts().forEach(product => {
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
    });

    function createProductForm(product) {
        const productForm = document.createElement('form');
        productForm.setAttribute('class', 'main__products-car-form');

        const productFormDiv = document.createElement('div');

        let productInput = createProductFormInput();
        let minusButton = createProductFormMinus(productInput);
        let plusButton = createProductFormPlus(productInput);
        let addToShoppingCarButton = createAddToShoppingCarButton(product, productInput);

        productFormDiv.append(minusButton);
        productFormDiv.append(productInput);
        productFormDiv.append(plusButton);
        productForm.append(productFormDiv);
        productForm.append(addToShoppingCarButton);

        return productForm;
    }

    function createProductFormInput() {
        const productInput = document.createElement('input');
        productInput.setAttribute('type', 'number');
        productInput.setAttribute('value', '1');
        return productInput;
    }

    function createProductFormMinus(productInput) {
        const productFormMinus = document.createElement('button');
        productFormMinus.setAttribute('class', 'minus');
        productFormMinus.innerHTML = '-';

        productFormMinus.addEventListener('click', (e) => {
            e.preventDefault();
            let counter = productInput.value;
            if (productInput.value > 1) {
                productInput.value = Number(counter) - 1;
            }
        })
        
        return productFormMinus;
    }

    function createProductFormPlus(productInput) {
        const productFormPlus = document.createElement('button');
        productFormPlus.setAttribute('class', 'plus');
        productFormPlus.innerHTML = '+';

        productFormPlus.addEventListener('click', (e) => {
            e.preventDefault();
            let counter = productInput.value;
            productInput.value = Number(counter) + 1;
        })

        return productFormPlus;
    }

    function createAddToShoppingCarButton(product, productInput) {
        const addToShoppingCarButton = document.createElement('input');
        addToShoppingCarButton.setAttribute('type', 'submit');
        addToShoppingCarButton.setAttribute('class', 'main__products-car-button');
        addToShoppingCarButton.setAttribute('value', 'Añadir al carrito');

        addToShoppingCarButton.addEventListener('click', (e) => {
            e.preventDefault();
            addProductToShoppingCar(product.id, productInput.value);
            productInput.value = 1;
            builtShoppingCar();
        })

        return addToShoppingCarButton;
    }


    function getOnSaleProducts() {
        return products.filter(product => product.onSale == true);
    }

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
                <form action="" method="" class="main__products-car-form">
                    <div class="">
                        <button class="minus" id="">-</button>
                        <input type="number" class="" name="" value="1">
                        <button class="plus" id="">+</button>
                    </div>
                    <input type="submit" class="main__products-car-button" value="Añadir al carrito">
                </form>
            `
        
            onSaleProductsContainer.append(productArticle);
        }
    });

    function seachProductById(productId) {
        return products.find(product => product.id == productId);
    }

    function addProductToShoppingCar(productId, productAmount) {
        let desiredproduct = seachProductById(productId);
        desiredproduct.amountInShoppingCar = productAmount;
        desiredproduct.priceInShoppingCar = desiredproduct.finalPrice * productAmount; 
        productsInShoppingCar.push(desiredproduct);
        shoppingCarTotal += desiredproduct.finalPrice * productAmount;
    }

    function builtShoppingCar() {
        shoppingCarProductsContainer.innerHTML = '';
        displayProductsInShoppingCar();
        displayTotalInShoppingCar();
    }

    function displayProductsInShoppingCar() {
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

            let trashButton = document.createElement('button');
            trashButton.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;

            productDiv.append(minusButton);
            productDiv.append(productInput);
            productDiv.append(plusButton);
            productArticle.append(productDiv);
            productArticle.append(productPrice);
            productArticle.append(trashButton);
            shoppingCarProductsContainer.append(productArticle);
        })
    }

    function displayTotalInShoppingCar() {
        shoppingCarProductsTotal.innerHTML =`
            <h3>Total compra: ${shoppingCarTotal} COP</h3>
            <button class="main__shopping-car-final">Finalizar compra</button>
            <button class="main__shopping-car-empty">Vaciar carrito</button>
        `
    }
})