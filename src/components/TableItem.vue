<template>
<div class="activite">
  <div class="item">{{ activite.titre }}</div>
  <div class="item-2" @click="describe">{{ activite.description }}</div>
  <div class="item">{{ activite.type }}</div>
  <div class="item">{{ activite.referent }}  </div>
  <div class="item">{{ activite.pointMin}} - {{ activite.pointMax }}</div>
  <div class="item action">
      <component :is="activite.status ? IconValider : IconAttente" />
  </div>
  <div class="description" v-if="readDescription">
    {{ activite.description }}
  </div>
</div>
</template>

<script setup>
import {ref} from "vue"
import IconValider from "./icons/IconValider.vue"
import IconAttente from "./icons/IconAttente.vue"
const props = defineProps(['activite'])
const readDescription = ref(false)
const position = ref([])
const describe = (e) => {
  readDescription.value = !readDescription.value
  position.value = [e.clientX - 300, e.clientY + 500]
  console.log(position.value[0])
}
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
  gap: 2px;
  border-bottom: 1.6px solid #DBDBDB;
}
.item{
  flex: 1;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  display: flex;
  align-items: center;
  color: #222222;
}
.item-2{
  flex: 2;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  display: flex;
  align-items: center;
  color: #222222;
}
.action{
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content:center;
}
.description{
  flex: none;
  position: fixed;
  color: white;
  background: #000000E5;
  left: v-bind(position[0]);
  top: v-bind(position[1]);
}
</style>