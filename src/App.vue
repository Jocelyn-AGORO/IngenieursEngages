<script setup >
import {ref} from "vue"
import DashboardView from "./views/de/DashboardView.vue"
import ReferentielView from "./views/de/ReferentielView.vue"
const currentPath = ref('/referentiel');
const getCurrentPath = (path) => {
  console.log(currentPath.value);
  currentPath.value = path;
}
</script>

<template>
      <DashboardView v-cloak v-if="currentPath === '/' "  />
      <ReferentielView v-cloak v-if="currentPath === '/referentiel' " />
</template>

<style scoped>

</style>
