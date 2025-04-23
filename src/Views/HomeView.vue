<script setup>

</script>

<template>
    <section class="flex flex-col justify-center items-center gap-10 backdrop-blur-md backdrop-brightness-140 
        backdrop-contrast-30 backdrop-sepia-50 text-white rounded-lg shadow-2xl p-5 w-1/4">
        <h1 class="text-5xl font-bold"><span class="text-green-500">Eat</span><span class="text-white">The</span><span
                class="text-yellow-500">Day</span></h1>
        <p>Découvrez votre prochain repas</p>
        <router-link to="/random"
            class="bg-green-500 text-white font-bold p-5 rounded-lg w-3/5 text-center hover:bg-yellow-500 hover:text-green-500 hover:scale-105 transition duration-300 ease-in-out">Génerer
            ma semaine</router-link>


        <router-link to="/custom"
            class="bg-green-500 text-white font-bold p-5 rounded-lg w-3/5 text-center hover:bg-yellow-500 hover:text-green-500 hover:scale-105 transition duration-300 ease-in-out">Personnaliser
            ma semaine</router-link>
    </section>
</template>

<style scoped></style>