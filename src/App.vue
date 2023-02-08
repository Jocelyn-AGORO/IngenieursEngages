<script setup >
import {ref} from "vue"
import DashboardView from "./views/de/DashboardView.vue"
import ReferentielView from "./views/de/ReferentielView.vue"
import CreateActivityView from "./views/de/CreateActiviteView.vue"

const currentPath = ref('/referentiel');
const getCurrentPath = (path) => {
  console.log(currentPath.value);
  currentPath.value = path;
}
</script>

<template>
      <!--v-if="currentPath === '/' "-->
<!--      <DashboardView v-cloak />-->
      <!-- v-if="currentPath === '/referentiel' " -->
<!--      <ReferentielView v-cloak />-->
      <!--v-if="currentPath === '/activite' "-->
<!--      <CreateActivityView v-cloak />-->
<!--      <RouterLink to="/"></RouterLink>-->
      <RouterView />
</template>

<style scoped>

</style>
