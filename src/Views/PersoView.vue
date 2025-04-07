<script setup>
import { ref } from 'vue';
import { ingredients } from '@/assets/structureEat.js';
import CheckBox from '@/components/CheckBox.vue';
const choices = ref(ingredients);
const newMenu = ref({ viandes: [], feculents: [], legumes: [], dessert: [] });

const recupMeal = (data, type) => {
    newMenu.value.viandes.push(data);
    console.log('recupMeal', newMenu.value);
}
</script>

<template>

    <h2>Viandes</h2>
    <CheckBox class="flex gap-5" :type="choices[0].viandes" @changeBox="recupMeal" />
    <h2>Feculents</h2>
    <CheckBox :type="choices[1].feculents" class="flex gap-5" />
    <h2>Legumes</h2>
    <CheckBox :type="choices[2].legumes" class="flex gap-5" />
    <h2>Produits laitiers</h2>
    <CheckBox :type="choices[3].Dessert" class="flex gap-5" />

</template>

<style scoped></style>