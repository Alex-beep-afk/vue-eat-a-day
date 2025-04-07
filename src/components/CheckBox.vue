<script setup>
import { ref } from 'vue';
const props = defineProps({
    type: Object,

})
const emit = defineEmits(['changeBox']);
function recupcheckMeal(index) {
    console.log('checked', props.type[index]);
    emit('changeBox', props.type[index]);

}



let checked = ref([]);

</script>

<template>
    <fieldset>
        <div v-for="one, index in type" :key="index" :class="checked[index] ? 'backdrop-brightness-50' : ' '" class="flex flex-wrap backdrop-blur-md 
        backdrop-brightness-100 backdrop-contrast-100 text-white items-center mb-4 flex-col gap-5 justify-center 
        p-2 rounded-lg border-2 border-gray-300 
            transition duration-300 ease-in-out transform hover:scale-105 w-50">
            <legend></legend>
            <img src="../assets/img/Default.webp" alt="" class="w-20 h-20 rounded-lg object-cover" />
            <p class="text-sm text-gray-600">{{ one.description }}</p>
            <input type="checkbox" :id="type.label" :value="type.label" class="mr-2" v-model="checked[index]"
                @change="recupcheckMeal(index)" />
            <label :for="type.label" class="text-lg font-bold">{{ one.label }}</label>

        </div>
    </fieldset>
    {{ console.log(checked) }}
</template>

<style scoped></style>