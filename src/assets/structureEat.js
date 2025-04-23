export function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}



export const ingredients = [{
    "viandes": [
        {
            'label': 'steak',
            'cal': 104,
            'img': 'steak.webp',
            'type': 'viande'
        },
        {
            'label': 'poulet',
            'cal': 508,
            'img': 'poulet.webp',
            'type': 'viande'
        },
        {
            'label': 'agneau',
            'cal': 202,
            'img': 'agneau.webp',
            'type': 'viande'
        },
        {
            'label': 'porc',
            'cal': 112,
            'img': 'porc.webp',
            'type': 'viande'
        },
        {
            'label': 'dinde',
            'cal': 800,
            'img': 'dinde.webp',
            'type': 'viande'
        },
        {
            'label': 'boeuf',
            'cal': 500,
            'img': 'boeuf.webp',
            'type': 'viande'
        }
    ]

},
{
    "feculents": [
        {
            'label': 'riz',
            'cal': 300,
            'img': 'riz.webp',
            'type': 'feculent'
        },
        {
            'label': 'pommes de terre',
            'cal': 300,
            'img': 'pommeDeTerre.webp',
            'type': 'feculent'
        },
        {
            'label': 'pates',
            'cal': 300,
            'img': 'pates.webp',
            'type': 'feculent'
        },
        {
            'label': 'quinoa',
            'cal': 178,
            'img': 'quinoa.webp',
            'type': 'feculent'
        },
        {
            'label': 'semoule',
            'cal': 180,
            'img': 'semoule.webp',
            'type': 'feculent'
        }
    ]

},
{
    "legumes": [
        {
            'label': 'carotte',
            'cal': 1005,
            'img': 'carottes.webp',
            'type': 'legume'
        },
        {
            'label': 'oignon',
            'cal': 1110,
            'img': 'oignon.webp',
            'type': 'legume'
        },
        {
            'label': 'tomate',
            'cal': 150,
            'img': 'tomate.webp',
            'type': 'legume'
        },
        {
            'label': 'poivron',
            'cal': 10,
            'img': 'poivron.webp',
            'type': 'legume'
        },
        {
            'label': 'choux',
            'cal': 800,
            'img': 'choux.webp',
            'type': 'legume'
        }
    ]

},
{
    "Dessert": [
        {
            'label': 'chocolatine',
            'cal': 540,
            'img': 'chocolatine.webp',
            'type': 'dessert'
        },
        {
            'label': 'pavlova',
            'cal': 980,
            'img': 'pavlova.webp',
            'type': 'dessert'
        },
        {
            'label': 'tiramisu',
            'cal': 562,
            'img': 'tiramisu.webp',
            'type': 'dessert'
        },
        {
            'label': 'mousse au chocolat',
            'cal': 851,
            'img': 'mousseAuChocolat.webp',
            'type': 'dessert'
        },
        {
            'label': 'tarte au citron',
            'cal': 581,
            'img': 'tarteAuCitron.webp',
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



