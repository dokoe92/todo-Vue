<template>
    <button :class="props.class">{{ props.buttonName }}</button>
</template>



<script setup>
    const props = defineProps(["buttonName", "class"]);

</script>

<style scoped>
    .btnAdd {
        width: 5rem;
        height: 2rem;
        background-color: black;
        color: white;
    }

    .btnDelete{
        width: 20rem;
        background-color: red;
    }


</style>