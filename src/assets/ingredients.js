const meat = [
    { "Poulet": 165 },
    { "Bœuf": 250 },
    { "Porc": 242 },
    { "Agneau": 294 },
    { "Dinde": 189 }
]
const acc = [

    { "Pommes de terre": 77 },
    { "Riz": 130 },
    { "Pâtes": 157 },
    { "Légumes grillés": 35 },
    { "Salade verte": 15 },
    { "Maïs doux": 86 },
    { "Haricots verts": 31 },
    { "Frites": 312 },
    { "Quinoa": 120 },
    { "Couscous": 112 }
]
const dessert = [
    { "pavlova": 200 },
    { "tiramisu": 300 },
    { "mousse au chocolat": 150 },
    { "tarte au citron": 150 },

]
const week = [
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
    "Dimanche"
]

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomMeatOrAcc(type) {
    const randomIndex = randomInt(0, type.length - 1);
    const randomType = type[randomIndex];
    return randomType;
}
function getDishe() {
    return {
        viande: randomMeatOrAcc(meat),
        accompagnement: randomMeatOrAcc(acc),
        dessert: randomMeatOrAcc(dessert)
    }

}
function getDay() {
    const day = {
        "midi": getDishe(),
        "soir": getDishe()
    }
    return day;
}

function getWeek() {
    const weekDishe = []
    week.forEach(day => {
        weekDishe.push({
            day: day,
            dishe: getDay()
        })
    });
    return weekDishe;
}

export const weekDishe = getWeek();

console.log(weekDishe);








//

// function getMeal() {
//     let meal = {
//         "midi": {
//             meat[randomInt(0, 5)]
//     }
//     }
// }


