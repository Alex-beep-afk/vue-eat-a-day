<script setup>
import Day from './components/Day.vue';
import { ref } from 'vue';
import { weekDishe } from './assets/ingredients.js';
const week = ref(weekDishe);
console.log(week);

</script>
<!-- Créer un composant qui viendras recuperer les valeur des repas de la semaine -->
<!-- Créer un jeu de données test (ingrédients / valeurs nutritionnelles /) et repas -->
<!-- Créer un composant qui affiche le repas -->



<template>
  <h1 class="bg-blue-500 text-white mx-auto text-5xl text-center p-10 max-w-300 rounded-b-lg shadow-2xl">Eat a day</h1>
  <section class="flex flex-col ">
    <div class="flex flex-col">
      <h2 class="bg-blue-500 text-white mx-auto text-2xl text-center p-10 max-w-300 rounded-b-lg shadow-2xl">{{
        week[0].day }}</h2>
      <h3>Midi {{ week[0].dishe.midi.viande }} et {{ week[0].dishe.midi.accompagnement }} dessert = {{
        week[0].dishe.soir.dessert }}</h3>
      <h3>Soir {{ week[0].dishe.soir.viande }} et {{ week[0].dishe.soir.accompagnement }} dessert = {{
        week[0].dishe.soir.dessert }}</h3>
      <h3>Dessert {{ week[0].dishe.dessert }}</h3>
    </div>
  </section>
</template>

<style scoped></style>
