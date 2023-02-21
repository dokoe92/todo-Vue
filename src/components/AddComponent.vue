
<template>
    <div class="add-container">
        <h2>What needs to be done?</h2>
        <input type="text" v-model="taskInput">
        <div>
        <label >High Priority
            <input type="checkbox" v-model="highPrio">
        </label>
        <label >Low Priority
            <input type="checkbox" v-model="lowPrio">
        </label>

        </div>


        <ButtonComponent class="btnAdd" button-name="Add" @click="newTask" />
    </div>

</template>


<script setup>
    import ButtonComponent from './ButtonComponent.vue';
    import { ref } from "vue"

    // eslint-disable-next-line no-unused-vars
    const props = defineProps(["modelValue"]);
    const emits = defineEmits(["update:modelValue", "addTask"])

    const taskInput = ref("");
    const highPrio = ref(false);
    const lowPrio = ref(false);

    
    const taskInformation = ref({
        taskInput: "",
        highPrio: false,
        lowPrio: false       
    })


    function newTask() {
        if (taskInput.value != "") {
            taskInformation.value.taskInput = taskInput.value;
            taskInformation.value.highPrio = highPrio.value;
            taskInformation.value.lowPrio = lowPrio.value;

            emits("update:modelValue",  taskInformation.value);
            emits("addTask", null);
            taskInput.value = "";
            highPrio.value = false;
            lowPrio.value = false;
        }
    }




</script>


<style scoped>
    .add-container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }


</style>