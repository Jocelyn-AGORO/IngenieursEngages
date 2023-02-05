<template>
  <button type="button" class="button" >
    <IconAdd />
    Nouvelle Activité
  </button>
</template>

<script setup >
import IconAdd from "./icons/IconAdd.vue"

</script>

<style scoped>
.button{
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8.371px 18.264px 8.371px 15.22px;
  gap: 5px;
  background: linear-gradient(0deg, rgba(6, 0, 239, 0.72), rgba(6, 0, 239, 0.72));
  border-radius: 10px;
}

</style>