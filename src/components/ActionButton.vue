<template>
  <div class="action">
      <div class="icon">
        <component class="icon" :is="action.icon" />
      </div>
      <div class="name">
        {{action.name}}
      </div>
  </div>

</template>

<script setup>
import {defineProps} from "vue";
const props = defineProps(['action'])
</script>

<style scoped>
.action{
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12.176px 15.22px;
  gap: 12.18px;
  isolation: isolate;
  width: 158.29px;
  height: 42.62px;
  border-radius: 9.132px;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
  cursor: pointer;
}
.icon{
  width: 18.26px;
  height: 18.26px;
  flex: none;
  order: 0;
  flex-grow: 0;
  z-index: 2;
}
.name{
  width: 97.41px;
  height: 16px;
  font-style: normal;
  font-weight: 500;
  font-size: 10.654px;
  line-height: 15px;
  color: rgba(255, 255, 255, 0.56);
  flex: none;
  order: 1;
  flex-grow: 1;
  z-index: 1;
}
</style>