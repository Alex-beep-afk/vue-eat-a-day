<script setup>
const icons = ["discord", "facebook", "github", "instagram", "linkedin", "snapchat", "tiktok", "twitter", "whatsapp"]

</script>
<template>
    <footer
        class="bg-green-500 text-white mx-auto flex justify-between items-center p-10 h-20 rounded-t-lg shadow-2xl shadow-green-500">
        <h3 class="font-bold">
            © 2025 Eat The Day- DWWM - All rights reserved
        </h3>
        <ul class="flex gap-1">
            <img class="w-10 hover:invert brightness-0" v-for="icon in icons"
                :src="`./src/assets/img/icons/${icon}.png`" alt="">

        </ul>

    </footer>
</template>
<style scoped></style>