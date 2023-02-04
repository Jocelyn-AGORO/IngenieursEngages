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
  gap: 4.57px;
  background: linear-gradient(0deg, rgba(6, 0, 239, 0.72), rgba(6, 0, 239, 0.72));
  box-shadow: 0px 3.044px 18.264px rgba(168, 82, 5, 0.3);
  border-radius: 9.132px;
}

</style>