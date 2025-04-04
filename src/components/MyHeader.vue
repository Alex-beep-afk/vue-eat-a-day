<script setup>
</script>
<template>
    <header class="bg-green-500 text-white mx-auto flex justify-between items-center rounded-b-lg p-10 h-20">
        <img class="invert brightness-0 rounded-lg h-25" src="/src/assets/img/logoEat-removebg-preview.png" alt="">
        <h1 class="text-5xl font-bold">
            Eat The Day
        </h1>
        <ul class="flex gap-10">
            <li><router-link to="/">Accueil</router-link></li>
            <li><router-link to="/custom">Personnaliser sa semaine</router-link></li>
        </ul>
    </header>

</template>
<style scoped></style>