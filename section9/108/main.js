'use strict';

const restaurant={
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['pizza', 'Pasta', 'Risotto'], 
    openingHours:{
        thu:{
            open:12,
            close:23,
        },
        fri:{
            open:11,
            close:23,
        },
        sat:{
            open:0,
            close:24,
        },
    },
    order: function (starterIndex, mainIndex){
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery: function({starterIndex = 1, mainIndex=0,time = '20:00',address}){
        console.log(
            `Order received! ${this.starterMenu[starterIndex]} 
            and ${this.mainMenu[mainIndex]} 
            will be delivered to ${address} at ${time}`
        );
    },
    orderPasta: function(ing1,ing2,ing3){
        console.log(
            `
            Here is your declicious pasta with ${ing1},${ing2} and ${ing3}
            `
        );
    },
    orderPizza: function(mainIngredient,...otherIngredients){
        console.log(mainIngredient);
        console.log(otherIngredients);
    }
};

restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

//Nullish: null and undefined(NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
