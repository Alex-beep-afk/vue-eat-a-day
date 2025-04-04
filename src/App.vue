<script setup>

import MyHeader from './components/MyHeader.vue';
import MyFooter from './components/MyFooter.vue';

</script>

<template>
  <MyHeader />
  <main
    class="bg-[url('/src/assets/img/imgHome.webp')] bg-cover bg-center bg-green-500 p-10 rounded-lg m-10 flex justify-center items-center flex flex-col">
    <router-view></router-view>
  </main>
  <MyFooter />


</template>

<style scoped></style>
