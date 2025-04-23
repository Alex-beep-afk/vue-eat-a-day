<script setup>
import { ref } from 'vue';
import { ingredients, randomInt } from '@/assets/structureEat.js';
import CheckBox from '@/components/CheckBox.vue';
import PersoRandomView from './PersoRandomView.vue';

const choices = ref(ingredients);
const newMenu = ref({ viande: [], feculent: [], legume: [], dessert: [] });

const recupCheckMeal = (data) => {
    newMenu.value[data.type] ??= [];
    newMenu.value[data.type].push(data);
}
const removeCheckMeal = (data) => {
    const index = newMenu.value[data.type].findIndex(item => item.label === data.label);
    if (index !== -1) {
        newMenu.value[data.type].splice(index, 1);
    }
}
const randomRepas = () => {
    const repas = {}
        ;['viande', 'feculent', 'legume', 'dessert'].forEach(type => {
            if (newMenu.value[type].length) {
                const index = randomInt(0, newMenu.value[type].length - 1)
                repas[type] = newMenu.value[type][index]
            }
        })
    return repas
}


const randomMenu = () => {
    const weekDay = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche']
    const randomMenu = []
    weekDay.forEach(day => {
        const oneday = {
            day: day,
            meal: {
                midi: randomRepas(),
                soir: randomRepas()
            }
        }
        randomMenu.push(oneday)
    })
    return randomMenu
}

const createPerso = ref(false)

</script>

<template>
    <section>
        <div>
            <h2 class="text-center text-white text-3xl bg-green-500 rounded-md p-2 mb-2">Viandes</h2>
            <CheckBox :type="choices[0].viandes" @changeBoxTrue="recupCheckMeal" @changeBoxFalse="removeCheckMeal" />
        </div>
        <div>
            <h2 class="text-center text-white text-3xl bg-green-500 rounded-md p-2 mb-2">Feculents</h2>
            <CheckBox :type="choices[1].feculents" @changeBoxTrue="recupCheckMeal" @changeBoxFalse="removeCheckMeal" />
        </div>

        <div>
            <h2 class="text-center text-white text-3xl bg-green-500 rounded-md p-2 mb-2">Legumes</h2>
            <CheckBox :type="choices[2].legumes" @changeBoxTrue="recupCheckMeal" @changeBoxFalse="removeCheckMeal" />
        </div>
        <div>
            <h2 class="text-center text-white text-3xl bg-green-500 rounded-md p-2 mb-2">Dessert</h2>
            <CheckBox :type="choices[3].Dessert" @changeBoxTrue="recupCheckMeal" @changeBoxFalse="removeCheckMeal" />
        </div>

        <button @click="createPerso = !createPerso"
            class="bg-green-500 p-5 rounded-lg w-1/6 hover:bg-yellow-500 hover:scale-105 transition duration-300 ease-in-out flex-none">
            Generer
            mon repas
        </button>
        <PersoRandomView :allWeek="randomMenu()" v-if="createPerso" />




    </section>



</template>

<style scoped></style>