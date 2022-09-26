var data = [{
        "id": "1",
        "name": "Coca-Cola",
        "type": "Beverage",
        "amount": "500ml",
        "price": "5.95",
        "img": "assets/img/menu/coke.png"
    },
    {
        "id": "2",
        "name": "Coca-Cola",
        "type": "Beverage",
        "amount": "1L",
        "price": "10.00",
        "img": "assets/img/menu/coke.png"
    }, {
        "id": "3",
        "name": "Pepsi",
        "type": "Beverage",
        "amount": "500ml",
        "price": "6.95",
        "img": "assets/img/menu/pepsi.png"
    }, {
        "id": "4",
        "name": "Pepsi",
        "type": "Beverage",
        "amount": "1L",
        "price": "11.00",
        "img": "assets/img/menu/pepsi.png"
    }, {
        "id": "5",
        "name": "Chaomin",
        "type": "Lunch/Dinner",
        "amount": "390gm",
        "price": "15.95",
        "img": "assets/img/menu/menu-item-3.png"
    }, {
        "id": "6",
        "name": "Chicken Bowl",
        "type": "Lunch/Dinner",
        "amount": "510gm",
        "price": "17.55",
        "img": "assets/img/menu/menu-item-6.png"
    }, {
        "id": "7",
        "name": "Hot Chocolate",
        "type": "Desert",
        "amount": "200gm",
        "price": "8.95",
        "img": "assets/img/menu/menu-item-5.png"
    }, {
        "id": "8",
        "name": "Vegetables",
        "type": "Lunch",
        "amount": "250gm",
        "price": "6.25",
        "img": "assets/img/menu/menu-item-4.png"
    }, {
        "id": "9",
        "name": "Mexican Delight",
        "type": "Lunch/Dinner",
        "amount": "1500gm",
        "price": "37.55",
        "img": "assets/img/menu/menu-item-2.png"
    }, {
        "id": "10",
        "name": "Burger Dash",
        "type": "Appetizer",
        "amount": "380gm",
        "price": "8.95",
        "img": "assets/img/menu/burger.png"
    }, {
        "id": "11",
        "name": "Pizza Dash",
        "type": "Appetizer",
        "amount": "8inch",
        "price": "8.25",
        "img": "assets/img/menu/pizza.png"
    }, {
        "id": "12",
        "name": "Mocktail Crusher",
        "type": "Desert",
        "amount": "250ml",
        "price": "7.55",
        "img": "assets/img/menu/mocktail.png"
    }, {
        "id": "13",
        "name": "Chopped Keema",
        "type": "Lunch/Breakfast",
        "amount": "400gm",
        "price": "17.55",
        "img": "assets/img/menu/menu-item-1.png"
    }
];

function shuffle(array) {
    let currentIndex = array.length,
        randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ];
    }

    return array;
}

shuffle(data);