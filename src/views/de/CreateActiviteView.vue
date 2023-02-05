<template>
  <BaseComponent >
    <SideBar :user="user" />
    <StackWidget>

    </StackWidget>
  </BaseComponent>
</template>

<script setup>
import BaseComponent from "../../components/BaseComponent.vue"
import SideBar from "../../components/SideBar.vue"
import StackWidget from "../../components/StackWidget.vue"

const user = "Adrien DEFOSSEZ"

</script>

<style scoped>

</style>