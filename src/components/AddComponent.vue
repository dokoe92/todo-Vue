<template>
    <div class="add-container">
        <h2>What needs to be done?</h2>
        <input type="text" v-model="task" >
        <ButtonComponent class="btnAdd" button-name="Add" @click="addTask"/>
    </div>

</template>


<script setup>
    import ButtonComponent from './ButtonComponent.vue';
    import { ref } from "vue"

    const props = defineProps(["modelValue"]);
    const emit = defineEmits(["update:modelValue", "updated"]);

    const task = ref("");

    function addTask() {
       emit("update:modelValue", task.value);
       emit("updated", null);
       task.value = '';
    }



</script>


<style scoped>
    .add-container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }


</style>