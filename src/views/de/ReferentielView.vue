<template>
  <BaseComponent @newpage="seePath(e.data)">
    <SideBar :user="user" />
    <TableList />
  </BaseComponent>
</template>

<script setup>
import BaseComponent from "../../components/BaseComponent.vue"
import TableList from "../../components/TableList.vue"
import SideBar from "../../components/SideBar.vue"
const user = "Adrien DEFOSSEZ"

const seePath = (message) => {
  console.log(message)
  console.log('Hi')
}
</script>

<style scoped>

</style>