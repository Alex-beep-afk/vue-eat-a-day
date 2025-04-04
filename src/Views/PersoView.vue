<script setup>
import { ref } from 'vue';
import { ingredients } from '@/assets/structureEat.js';
import CheckBox from '@/components/CheckBox.vue';
const choices = ref(ingredients);
</script>

<template>
    
    <h2>Viandes</h2>
    <CheckBox :type="choices[0].viandes" class="flex gap-5" />
    <h2>Feculents</h2>
    <CheckBox :type="choices[1].feculents" class="flex gap-5" />
    <h2>Legumes</h2>
    <CheckBox :type="choices[2].legumes" class="flex gap-5" />
    <h2>Produits laitiers</h2>
    <CheckBox :type="choices[3].Dessert" class="flex gap-5"/>

</template>

<style scoped></style>