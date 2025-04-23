<script setup>
import { computed } from 'vue';
const props = defineProps({
    day: Object
})

function totalCaloriesForOneDay({ meal: { midi, soir } }) {
    const total = Object.values(midi).reduce((acc, { cal }) => acc + cal, 0)
        + Object.values(soir).reduce((acc, { cal }) => acc + cal, 0);
    return total;
}
const totalCalories = computed(() => totalCaloriesForOneDay(props.day))



</script>

<template>
    <div class="flex flex-col justify-center items-center gap-10 w-70 backdrop-blur-md backdrop-brightness-50 
    backdrop-contrast-100 text-white rounded-lg shadow-2xl p-5 m-5 
        hover:bg-yellow-500/70 transition duration-300 ease-in-out transform hover:scale-105 relative">
        <h2 class="text-3xl font-bold text-green-500">
            {{ day.day }}</h2>
        <div class="flex flex-col gap-5 text-xs h-1/2">
            <h2 class="text-yellow-500 text-xl text-center">Midi</h2>
            <p>
                Ce <span class="text-green-500">midi</span> ce sera
                <span class="text-yellow-500" v-if="day.meal.soir.viande?.label">{{ day.meal.soir?.viande?.label
                }} </span>
                <span> et <span class="text-green-500">{{
                    day.meal.soir?.legume?.label }}</span></span>
                <span v-if="day.meal.soir.feculent?.label">/<span class="text-yellow-500">{{
                    day.meal.soir?.feculent?.label }}</span></span>
                <span v-if="day.meal.soir.dessert?.label"> avec comme dessert
                    <span class="text-green-500">{{ day.meal.soir?.dessert?.label }}</span>
                </span>.
            </p>

            <h2 class="text-yellow-500 text-xl text-center">Soir</h2>
            <p>
                Ce <span class="text-green-500">soir</span> ce sera
                <span class="text-yellow-500" v-if="day.meal.soir.viande?.label">{{ day.meal.soir?.viande?.label
                }} </span>
                <span> et <span class="text-green-500">{{
                    day.meal.soir?.legume?.label }}</span></span>
                <span v-if="day.meal.soir.feculent?.label">/<span class="text-yellow-500">{{
                    day.meal.soir?.feculent?.label }}</span></span>
                <span v-if="day.meal.soir.dessert?.label"> avec comme dessert
                    <span class="text-green-500">{{ day.meal.soir?.dessert?.label }}</span>
                </span>.
            </p>
            <p>Pour un total de <span class="text-green-500">{{ totalCalories }}</span> Calories</p>
        </div>


    </div>
</template>

<style scoped></style>