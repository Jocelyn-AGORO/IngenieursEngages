<script setup lang="ts">
import {ref} from "vue"
import DashboardView from "./views/de/DashboardView.vue"
import ReferentielView from "./views/de/ReferentielView.vue"
const currentPath = ref('');
const getCurrentPath = (path: string) => {
  currentPath.value = path;
}
</script>

<template>
      <DashboardView [v-cloak] v-if="currentPath === '/' "  @navigate="getCurrentPath"/>
      <ReferentielView [v-cloak] v-if="currentPath === '/referentiel'" @navigate="getCurrentPath"/>
</template>

<style scoped>

</style>
