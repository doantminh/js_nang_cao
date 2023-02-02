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

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schule',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski','Gnarby','Lewandowski','Hummels'],
    date: 'Nov 9th, 2017',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};
//1
const [players1, players2] = game.players;
console.log(players1,players2);
//2
const [gk, ...filedPlayers] = players1;
console.log(gk, filedPlayers);
//3
const allPlayer = [...players1,...players2];
console.log(allPlayer);
//4
const playersFinal = [...players1, 'Thiago','Coutinho','Periscic'];
//5
const {odds: {team1, x: draw, team2}} = game;
console.log(team1, draw,team2);
//6
const printGoals = function(...players){
    console.log(players);
    console.log(`${players.length} goals were scored`);
}

// printGoals('Davies', 'Muller','Lewandowski', 'Kimmich');
// printGoals('Davies', 'Muller');
printGoals(...game.scored);

//7
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');
