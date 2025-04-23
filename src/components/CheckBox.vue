<script setup>
import { ref } from 'vue';
const props = defineProps({
    type: Object,

})
const emit = defineEmits(['changeBoxTrue', 'changeBoxFalse']);
function recupcheckMeal(index) {
    if (checked.value[index] == true) {
        emit('changeBoxTrue', props.type[index]);
    } else {
        emit('changeBoxFalse', props.type[index]);
    }
}

let checked = ref([]);

</script>

<template>
    <fieldset class="flex flex-wrap justify-center items-center gap-5">
        <div v-for="one, index in type" :key="index" class="flex flex-wrap text-white backdrop-blur-md  bg-yellow-500/30 items-center mb-4 flex-col gap-5 justify-center 
        p-2 rounded-lg border-2 border-gray-300 
            transition duration-300 ease-in-out transform hover:scale-105 w-50">

            <img :src="`./src/assets/img/${one.img}`" alt="" class="w-20 h-20 rounded-lg object-cover" />
            <p
                class="text-sm text-green-700 border-2 border-gray-300/10 rounded-lg p-2 bg-yellow-500 backdrop-blur-md ">
                {{
                    type[index].cal }} Kcal/100g
            </p>
            <label :for="type.label" class="text-lg font-bold text-green-400">{{ one.label }}</label>
            <input type="checkbox" :id="type.label" :value="type.label" class="mr-2" v-model="checked[index]"
                @change="recupcheckMeal(index)" />


        </div>
    </fieldset>
</template>

<style scoped></style>