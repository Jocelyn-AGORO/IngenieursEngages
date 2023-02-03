<template>
<div class="activite">
  <div class="item">{{ activite.titre }}</div>
  <div class="item">{{ activite.description }}</div>
  <div class="item">{{ activite.type }}</div>
  <div class="item">{{ activite.referent }}  </div>
  <div class="item">{{ activite.pointMin}} - {{ activite.pointMax }}</div>
  <div class="item">
      <component :is="activite.status ? IconValider : IconAttente" />
  </div>
</div>
</template>

<script setup>
import IconValider from "./icons/IconValider.vue"
import IconAttente from "./icons/IconAttente.vue"

const props = defineProps(['activite'])
</script>

<style scoped>
.activite {
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  padding: 0px;
  width: 100%;
  height: 82px;
}
.item{
  flex: 1;
}
</style>