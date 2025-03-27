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
    <div class="flex justify-center items-center text-white bg-green-500 shadow-2xl rounded-3xl gap-10">
        <h2 class="text-2xl p-10 w-40">
            {{ day.day }}</h2>
        <div class="border-l border-grey-500 p-10 w-175">
            <p>Ce midi ce sera : {{ concatLabel(day.meal[0].midi) }}.
                Ce soir ce sera : {{ concatLabel(day.meal[0].soir) }}</p>
            <p>Pour un total de : {{ calculCal(day.meal[0].midi) + calculCal(day.meal[0].soir) }} Calories</p>
        </div>


    </div>
</template>
<style scoped></style>