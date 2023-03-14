<!-- eslint-disable vue/comment-directive -->
<!-- eslint-disable no-unused-vars -->
<!-- eslint-disable vue/require-v-for-key -->
<template>
    <div>
        <p @click="lineThrough" :class="{isDone: !isActive, highPriority: taskToShow.highPrio, lowPriority: taskToShow.lowPrio}" :contenteditable="editable"> {{ taskToShow.taskInput }}</p>
        <div class="buttons-container">
            <ButtonComponent button-name="Edit" class="btnEdit" @click="editTask"/>
            <ButtonComponent button-name="Delete" class="btnDelete" @click="deleteTask(index)"/>

        </div>
    </div>

</template>

<script setup>
    import { ref } from "vue";
    import ButtonComponent from './ButtonComponent.vue';
    import { useTaskStore } from "@/stores/task.js"

    // eslint-disable-next-line no-unused-vars
    const props = defineProps(["taskToShow", "index"]);
    const emits = defineEmits(["deleteTaskWithIndex", "checkDoneStatus", "isActive"])

    const taskStore = useTaskStore();

    const isActive = ref(true);
    
    const lineThroughAllowed = ref(true);
    
    function lineThrough() {
        if (lineThroughAllowed.value) {
            isActive.value = !isActive.value
        } 
        if (!editable.value && !isActive.value ) {
            taskStore.incrementTasksDone();
        } 
        if (!editable.value && isActive.value) {
            taskStore.decrementTasksDone();
        }
    }

    function deleteTask(index) {
        emits("deleteTaskWithIndex", {
            index,
            isActive: isActive.value
        });
    }

    const editable = ref(false);

    function editTask() {
        lineThroughAllowed.value = !lineThroughAllowed.value;
        editable.value = !editable.value;
    }

</script>


<style scoped>
    p {
        cursor: pointer;
        text-align: center;

    }

    .isDone {
        text-decoration: line-through;

    }

    .highPriority {
        color: orange;
    }

    .lowPriority {
        color: gray;
    }

</style>