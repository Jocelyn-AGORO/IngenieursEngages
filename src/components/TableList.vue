<template>
  <div class="activites" v-for="(activite, index) in activites" :key="index">
    <TableItem :activite="activite" />
  </div>
</template>

<script setup>
import {reactive} from "vue"
import TableItem from "./TableItem.vue"
const activites = reactive([
  {
    titre: 'Cordée de la réussite',
    description: 'Succiter l\'intérêt de plus Jeune à ISIS',
    type: 'Ecole',
    referent: 'M. Arnaud CHARON',
    pointMin: 0.1,
    pointMax: 0.2,
    status: false
  },
  {
    titre: 'Ingénieur Humaniste',
    description: 'Succiter l\'intérêt de plus Jeune à ISIS',
    type: 'Diversité',
    referent: 'M. Arnaud CHARON',
    pointMin: 0.1,
    pointMax: 0.2,
    status: true
  }
])
</script>

<style scoped>
.activites{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  width: 70vw;
  height: 415px;
}
</style>