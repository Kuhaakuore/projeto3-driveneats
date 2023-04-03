let meal = '';
let drink = '';
let dessert = '';
let mealPrice = 0;
let drinkPrice = 0;
let dessertPrice = 0;
let total = 0;
let clientName = '';
let clientAddress = '';


function validateOrder() {
    if (meal !== '') {
        if (drink !== '') {
            if (dessert !== '') {
                const order_button = document.querySelector(".order-button");
                order_button.classList.add("close-order");
                order_button.disabled = false;
                order_button.innerHTML = "Fechar pedido"
                total = mealPrice + drinkPrice + dessertPrice;
            }
        }
    }
}

function selectItem(item) {
    if (item.classList.contains("meal")) {
        const previousSelectedItem = document.querySelector(".meal.selected");
        console.log(previousSelectedItem);
        if (previousSelectedItem !== null) {
            previousSelectedItem.classList.remove("selected");
        }
        item.classList.add("selected");
        meal = item.querySelector("h1").innerHTML;
        valueWithComma = item.querySelector("h3").innerHTML.replace(/[^\d\,]*/g, '');
        mealPrice = parseFloat(valueWithComma.replace(',', '.'));
    }
    else if (item.classList.contains("drink")) {
        const previousSelectedItem = document.querySelector(".drink.selected");
        if (previousSelectedItem !== null) {
            previousSelectedItem.classList.remove("selected");
        }
        item.classList.add("selected");
        drink = item.querySelector("h1").innerHTML;
        valueWithComma = item.querySelector("h3").innerHTML.replace(/[^\d\,]*/g, '');
        drinkPrice = parseFloat(valueWithComma.replace(',', '.'));
    }
    else {
        const previousSelectedItem = document.querySelector(".dessert.selected");
        if (previousSelectedItem !== null) {
            previousSelectedItem.classList.remove("selected");
        }
        item.classList.add("selected");
        dessert = item.querySelector("h1").innerHTML;
        valueWithComma = item.querySelector("h3").innerHTML.replace(/[^\d\,]*/g, '');
        dessertPrice = parseFloat(valueWithComma.replace(',', '.'));
    }
    validateOrder();
}

function closeOrder() {
    clientName = prompt("Por favor informe o seu nome");
    clientAddress = prompt("Muito obrigado, agora, por favor informe o endereço de entrega");
    const informationContainer = document.querySelector(".information-container");
    informationContainer.querySelector(".order-meal .name").innerHTML = meal;
    informationContainer.querySelector(".order-drink .name").innerHTML = drink;
    informationContainer.querySelector(".order-dessert .name").innerHTML = dessert;
    informationContainer.querySelector(".order-meal .price").innerHTML = `R$ ${mealPrice.toFixed(2).toString().replace('.', ',')}`;
    informationContainer.querySelector(".order-drink .price").innerHTML = `R$ ${drinkPrice.toFixed(2).toString().replace('.', ',')}`;
    informationContainer.querySelector(".order-dessert .price").innerHTML = `R$ ${dessertPrice.toFixed(2).toString().replace('.', ',')}`;
    informationContainer.querySelector(".order-value .price").innerHTML = `R$ ${total.toFixed(2).toString().replace('.', ',')}`;
    const confirmationScreen = document.querySelector(".confirmation-screen");
    confirmationScreen.classList.add("activated");
}

function cancelOrder() {
    const confirmationScreen = document.querySelector(".confirmation-screen");
    confirmationScreen.classList.remove("activated");
}

function confirmOrder() {
    let totalWithComma = total.toFixed(2).toString().replace('.', ',');
    let msg =
        `Olá, gostaria de fazer o pedido: %0D%0A- Prato: ${meal} %0D%0A- Bebida: ${drink} %0D%0A- Sobremesa: ${dessert} %0D%0ATotal: R$ ${totalWithComma}%0D%0A%0D%0ANome: ${clientName}%0D%0AEndereço: ${clientAddress}`;
    window.open("https://wa.me/+5535997518956?text=" + msg);
}