<script setup>
import DayCard from '@/components/DayCard.vue';
import { ref } from 'vue';
// import { week } from '../assets/structureEat.js';
import { randomWeek } from '../assets/structureEat.js';

const week = randomWeek();

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
    <section class="flex flex-wrap justify-center items-center gap-5">
        <DayCard v-for="day, index in allWeek" :day="day" :key="day.day"
            :class="`day opacity-0 animate-[slide-in_0.5s_ease-in-out_forwards]`"
            :style="`animation-delay: ${index * 100}ms; animation-fill-mode: forwards`" />

    </section>
    <button @click="allWeek = randomWeek()"
        class="bg-green-500 p-5 rounded-lg w-1/6 hover:bg-yellow-500 hover:scale-105 transition duration-300 ease-in-out">
        Regenerer ma semaine
    </button>
</template>

<style scoped></style>