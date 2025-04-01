<script setup>

import MyHeader from './components/MyHeader.vue';
import MyFooter from './components/MyFooter.vue';
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

<template>
  <MyHeader />
  <main
    class="bg-[url('/src/assets/img/imgHome.webp')] bg-cover bg-center flex justify-between p-10 bg-green-500 text-white p-10 h-116 rounded-lg m-10">
    <section class="flex gap-5">
      <DayCard v-for="day in allWeek" :day="day" />

    </section>



  </main>
  <MyFooter />


</template>

<style scoped></style>
