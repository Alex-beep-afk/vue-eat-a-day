<script setup>



const props = defineProps({
    day: Object,
});
function calculCal(repas) {
    let total = 0;
    repas.forEach((repas) => {
        total += repas.cal;
    });
    return total;
}
function concatLabel(repas) {
    let label = `${repas[0].label} acompagné de ${repas[1].label}/${repas[2].label} et en dessert ${repas[3].label}`;
    return label;
}

</script>
<template>
    <div class="flex flex-col justify-center items-center gap-10 w-70 h-50 backdrop-blur-md backdrop-brightness-50 backdrop-contrast-100 text-white rounded-lg shadow-2xl p-5 m-5 
        hover:bg-yellow-500/70 transition duration-300 ease-in-out transform hover:scale-105 relative">
        <h2 class="text-3xl font-bold text-green-500">
            {{ day.day }}</h2>
        <div class="text-xs">
            <p>Ce midi ce sera <span class="text-green-500">{{ concatLabel(day.meal[0].midi) }}</span> .
                Ce soir ce sera <span class="text-green-500">{{ concatLabel(day.meal[0].soir) }}</span>.</p>
            <p>Pour un total de <span class="text-green-500"> {{ calculCal(day.meal[0].midi) +
                calculCal(day.meal[0].soir) }} </span> Calories</p>
        </div>


    </div>


</template>
<style scoped></style>