<template>
  <div class="todo-container">
    <div class="todo-add">
      <AddComponent v-model="task" @updated="pushtask"/>
    </div>
    <div class="todo-taskField">
      <h1 v-for="(aufgabe, index) in myArr"> {{ aufgabe }} Nummer {{ index }}</h1>
    </div>
  </div>

</template>

<script setup>
  import { ref } from "vue"
  import AddComponent from './components/AddComponent.vue';

const task = ref("");

const myArr = ref([]);

function pushtask() {
  myArr.value.push(task.value);
}


</script>



<style scoped>



</style>
