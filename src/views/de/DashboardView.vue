<template>
  <BaseComponent>
    <SideBar :user="user"/>
  </BaseComponent>
</template>

<script setup>
import BaseComponent from "../../components/BaseComponent.vue"
import SideBar from "../../components/SideBar.vue"
const user = "Adrien DEFOSSEZ"
</script>