const shoppingCarIcon = document.querySelector('.main__shopping-car button');
const shoppingCarProductAmount = document.querySelector('.main__shopping-amount');
const shoppingCarContainer = document.querySelector('.main__shopping-car-container');
const shoppingCarClose = document.querySelector('.main__shopping-car-title button');

shoppingCarIcon.addEventListener('click', function() {
    shoppingCarIcon.classList.add('main__shopping-car-hidden');
    shoppingCarProductAmount.classList.add('main__shopping-car-hidden');
    shoppingCarContainer.classList.add('main__shopping-car-container-active');
});

shoppingCarClose.addEventListener('click', function() {
    shoppingCarIcon.classList.remove('main__shopping-car-hidden');
    shoppingCarProductAmount.classList.remove('main__shopping-car-hidden');
    shoppingCarContainer.classList.remove('main__shopping-car-container-active');
});

