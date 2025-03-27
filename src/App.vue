<script setup>
import DayCard from './components/DayCard.vue';
import { ref } from 'vue';
import { week } from './assets/structureEat.js'
const allWeek = ref(week);

function calculCal(repas) {
  let total = 0;
  repas.forEach((repas) => {
    total += repas.cal;
  });
  return total;
}
function calculTot() {
  let total = 0;
  allWeek.value.forEach((oneDay) => {
    oneDay.meal.forEach((repas) => {
      total += calculCal(repas.midi);
      total += calculCal(repas.soir);
    });
  });
  return total;
}

const totalCal = calculTot();
</script>
<!-- Créer un composant qui viendras recuperer les valeur des repas de la semaine -->
<!-- Créer un jeu de données test (ingrédients / valeurs nutritionnelles /) et repas -->
<!-- Créer un composant qui affiche le repas -->



<template>
  <main class="flex flex-col gap-10 p-10 bg-black">
    <h1
      class="bg-green-500 text-white mx-auto text-5xl text-center p-10 max-w-300 rounded-lg shadow-2xl shadow-green-500">
      Eat a day
    </h1>
    <section class="flex flex-col bg-gray-200 p-10 mx-auto max-w-300 rounded-3xl shadow-2xl gap-10 shadow-green-500">
      <DayCard v-for="oneDay in allWeek" :day="oneDay" />
      <p class="text-white bg-green-500 shadow-xl rounded-full max-w-75 text-center p-5">Pour un total de {{ totalCal
        }}
        Calories</p>
    </section>
  </main>

</template>

<style scoped></style>
