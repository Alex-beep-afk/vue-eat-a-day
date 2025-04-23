<script setup>
import PersoCard from '@/components/PersoCard.vue';

const props = defineProps({
    allWeek: Array
})

</script>


<template>
    <section class="flex flex-wrap justify-center items-center gap-5">
        <PersoCard v-for="day, index in allWeek" :day="day" :key="index"
            :class="`day opacity-0 animate-[slide-in_0.5s_ease-in-out_forwards]`"
            :style="`animation-delay: ${index * 100}ms; animation-fill-mode: forwards`" />
    </section>
</template>

<style scoped></style>