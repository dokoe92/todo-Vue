import { defineStore } from "pinia";
import { ref } from "vue"

export const useTaskStore = defineStore("task", () => {
    const tasksDone = ref(0);

    function incrementTasksDone() {
        tasksDone.value++;
    }

    function decrementTasksDone() {
        tasksDone.value--;
    }

    return { tasksDone, incrementTasksDone, decrementTasksDone}
})