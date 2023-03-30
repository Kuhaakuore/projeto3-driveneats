let selected_meal = '';
let selected_drink = '';
let selected_dessert = '';
let meal_price = 0;
let drink_price = 0;
let dessert_price = 0;
let total = 0;
let items_picked = 0;

const meals = document.getElementsByClassName("meal");
const drinks = document.getElementsByClassName("drink");
const desserts = document.getElementsByClassName("dessert");
const order_button = document.getElementById("order-button");

function selectMeal(item) {
    if (item.classList.contains("selected")) {
        item.classList.toggle("selected");
        if (items_picked > 0) {
            items_picked--;
        }
        if (order_button.classList.contains("close-order")) {
            order_button.classList.remove("close-order");
            order_button.innerHTML = "Selecione os 3 itens <br />para fechar o pedido";
            order_button.disabled = true;
        }
    }
    else {
        Array.from(meals).forEach(meal => {
            if (meal.classList.contains("selected")) {
                meal.classList.toggle("selected");
                items_picked--;
            }
        });
        item.classList.toggle("selected");
        selected_meal = item.querySelector("h1").innerHTML;
        value_with_comma = item.querySelector("h3").innerHTML.replace(/[^\d\,]*/g, '');
        meal_price = parseFloat(value_with_comma.replace(',', '.'));
        if (items_picked <= 2) {
            items_picked++;
        }
        if (items_picked === 3) {
            order_button.classList.add("close-order");
            order_button.disabled = false;
            order_button.innerHTML = "Fechar pedido"
            total = meal_price + drink_price + dessert_price;
        }
    }
}

function selectDrink(item) {
    if (item.classList.contains("selected")) {
        item.classList.toggle("selected");
        if (items_picked > 0) {
            items_picked--;
        }
        if (order_button.classList.contains("close-order")) {
            order_button.classList.remove("close-order");
            order_button.innerHTML = "Selecione os 3 itens <br />para fechar o pedido";
            order_button.disabled = true;
        }
    }
    else {
        Array.from(drinks).forEach(meal => {
            if (meal.classList.contains("selected")) {
                meal.classList.toggle("selected");
                items_picked--;
            }
        });
        item.classList.toggle("selected");
        selected_drink = item.querySelector("h1").innerHTML;
        value_with_comma = item.querySelector("h3").innerHTML.replace(/[^\d\,]*/g, '');
        drink_price = parseFloat(value_with_comma.replace(',', '.'));
        if (items_picked <= 2) {
            items_picked++;
        }
        if (items_picked === 3) {
            order_button.classList.add("close-order");
            order_button.disabled = false;
            order_button.innerHTML = "Fechar pedido"
            total = meal_price + drink_price + dessert_price;
        }
    }
}

function selectDessert(item) {
    if (item.classList.contains("selected")) {
        item.classList.toggle("selected");
        if (items_picked > 0) {
            items_picked--;

        }
        if (order_button.classList.contains("close-order")) {
            order_button.classList.remove("close-order");
            order_button.innerHTML = "Selecione os 3 itens <br />para fechar o pedido";
            order_button.disabled = true;
        }
    }
    else {
        Array.from(desserts).forEach(meal => {
            if (meal.classList.contains("selected")) {
                meal.classList.toggle("selected");
                items_picked--;
            }
        });
        item.classList.toggle("selected");
        selected_dessert = item.querySelector("h1").innerHTML;
        value_with_comma = item.querySelector("h3").innerHTML.replace(/[^\d\,]*/g, '');
        dessert_price = parseFloat(value_with_comma.replace(',', '.'));
        if (items_picked <= 2) {
            items_picked++;
        }
        if (items_picked === 3) {
            order_button.classList.add("close-order");
            order_button.disabled = false;
            order_button.innerHTML = "Fechar pedido"
            total = meal_price + drink_price + dessert_price;
        }
    }
}