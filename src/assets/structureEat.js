function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}



export const ingredients = [{
    "viandes": [
        {
            'label': 'steak',
            'cal': 104,
            'img': 'steak.jpg',
            'type': 'viande'
        },
        {
            'label': 'poulet',
            'cal': 508,
            'img': 'poulet.jpg',
            'type': 'viande'
        },
        {
            'label': 'agneau',
            'cal': 202,
            'img': 'agneau.jpg',
            'type': 'viande'
        },
        {
            'label': 'porc',
            'cal': 112,
            'img': 'porc.jpg',
            'type': 'viande'
        },
        {
            'label': 'dinde',
            'cal': 800,
            'img': 'dinde.jpg',
            'type': 'viande'
        },
        {
            'label': 'boeuf',
            'cal': 500,
            'img': 'boeuf.jpg',
            'type': 'viande'
        }
    ]

},
{
    "feculents": [
        {
            'label': 'riz',
            'cal': 300,
            'img': 'salade.jpg',
            'type': 'feculent'
        },
        {
            'label': 'pommes de terre',
            'cal': 300,
            'img': 'pommes-de-terre.jpg',
            'type': 'feculent'
        },
        {
            'label': 'pates',
            'cal': 300,
            'img': 'mais.jpg',
            'type': 'feculent'
        },
        {
            'label': 'quinoa',
            'cal': 178,
            'img': 'quinoa.jpg',
            'type': 'feculent'
        },
        {
            'label': 'couscous',
            'cal': 180,
            'img': 'couscous.jpg',
            'type': 'feculent'
        }
    ]

},
{
    "legumes": [
        {
            'label': 'carotte',
            'cal': 1005,
            'img': 'carotte.jpg',
            'type': 'legume'
        },
        {
            'label': 'oignon',
            'cal': 1110,
            'img': 'oignon.jpg',
            'type': 'legume'
        },
        {
            'label': 'tomate',
            'cal': 150,
            'img': 'tomate.jpg',
            'type': 'legume'
        },
        {
            'label': 'poivron',
            'cal': 10,
            'img': 'poivron.jpg',
            'type': 'legume'
        },
        {
            'label': 'choux',
            'cal': 800,
            'img': 'ail.jpg',
            'type': 'legume'
        }
    ]

},
{
    "Dessert": [
        {
            'label': 'chocolat',
            'cal': 540,
            'img': 'chocolat.jpg',
            'type': 'dessert'
        },
        {
            'label': 'pavlova',
            'cal': 980,
            'img': 'pavlova.jpg',
            'type': 'dessert'
        },
        {
            'label': 'tiramisu',
            'cal': 562,
            'img': 'tiramisu.jpg',
            'type': 'dessert'
        },
        {
            'label': 'mousse au chocolat',
            'cal': 851,
            'img': 'mousse-au-chocolat.jpg',
            'type': 'dessert'
        },
        {
            'label': 'tarte au citron',
            'cal': 581,
            'img': 'tarte-au-citron.jpg',
            'type': 'dessert'
        }
    ]
}
]



function randomViande() {
    const randomIndex = randomInt(0, ingredients[0].viandes.length - 1);
    const randomType = ingredients[0].viandes[randomIndex];
    return randomType;
}
function randomFeculent() {
    const randomIndex = randomInt(0, ingredients[1].feculents.length - 1);
    const randomType = ingredients[1].feculents[randomIndex];
    return randomType;
}
function randomLegume() {
    const randomIndex = randomInt(0, ingredients[2].legumes.length - 1);
    const randomType = ingredients[2].legumes[randomIndex];
    return randomType;
}
function randomDessert() {
    const randomIndex = randomInt(0, ingredients[3].Dessert.length - 1);
    const randomType = ingredients[3].Dessert[randomIndex];
    return randomType;
}
function randomMeal() {
    return [randomViande(), randomFeculent(), randomLegume(), randomDessert()];
}
function randomDay() {
    return [{ midi: randomMeal(), soir: randomMeal() }];
}

const allWeek = [
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
    "Dimanche"
]
export function randomWeek() {
    const weekDishe = []
    allWeek.forEach(day => {
        weekDishe.push({
            day: day,
            meal: randomDay(),
        })
    });
    return weekDishe;
}



