<!-- eslint-disable vue/valid-v-for -->
<!-- eslint-disable vue/require-v-for-key -->
<template>
  <div class="todo-container">
    <div class="todo-add">
      <AddComponent v-model="task" @addTask="addToArr" />
    </div>
    <div class="todo-taskField">
      <TaskComponent  v-for="(singleTask, index) in tasks" :taskToShow="singleTask" :index="index" @deleteTaskWithIndex="deleteTask"/>
    </div>
  </div>

</template>

<script setup>
  import { ref } from "vue"
  import AddComponent from './components/AddComponent.vue'
  import TaskComponent from "./components/TaskComponent.vue"

  const task = ref();

  const tasks = ref([])


  function addToArr() {
    tasks.value.push({...task.value});
  }

  const indexToRemove = ref();

  function deleteTask(index) {
    tasks.value.splice(index,1);
  }


</script>



<style scoped>
  .todo-container {
    width: 30vw;
    margin: 0 auto;
  }

  .todo-taskField {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }



</style>
