<!-- eslint-disable vue/valid-v-for -->
<!-- eslint-disable vue/require-v-for-key -->
<template>
  <div class="todo-container">
    <div class="todo-add">
      <AddComponent v-model="task" @addTask="addToArr" />

    </div>
    <div class="todo-taskField">
      <h2>{{ tasksDone }} out of {{ tasksAmount }} done </h2>
      <TaskComponent v-model="done" v-for="(singleTask, index) in tasks" :key="singleTask.id" :taskToShow="singleTask" :index="index" @deleteTaskWithIndex="deleteTask" />
    </div>
    <routerLink to="/user">User</routerLink>

  </div>

</template>

<script setup>
  import { ref, computed } from "vue"
  import { useTaskStore } from "./stores/task";
  import AddComponent from './components/AddComponent.vue'
  import TaskComponent from "./components/TaskComponent.vue"

  const task = ref();

  const tasks = ref([]);

  const taskStore = useTaskStore();

  const tasksDone = computed(() => taskStore.tasksDone);
  const tasksAmount = computed(() => tasks.value.length);
  
  function addToArr() {
    tasks.value.push({...task.value});
  }

  function deleteTask(deleteInfo) {
    console.log(deleteInfo)
    if (!deleteInfo.isActive) {
      taskStore.decrementTasksDone();
    }
    tasks.value.splice(deleteInfo.index, 1);
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
