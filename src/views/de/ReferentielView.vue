<template>
  <BaseComponent>
    <SideBar :user="user"/>
    <TableList />
  </BaseComponent>
</template>

<script setup>
import BaseComponent from "../../components/BaseComponent.vue"
import TableList from "../../components/TableList.vue"
import SideBar from "../../components/SideBar.vue"
const user = "Adrien DEFOSSEZ"
</script>

<style scoped>

</style>