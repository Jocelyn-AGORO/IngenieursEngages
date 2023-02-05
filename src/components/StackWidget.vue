<template>
  <div class="stack">
    <slot></slot>
  </div>
</template>

<script setup>
</script>

<style scoped>
.stack {
  display: flex;
  justify-content: center;
  padding: 0px 5px;
  width: fit-content;
}
</style>