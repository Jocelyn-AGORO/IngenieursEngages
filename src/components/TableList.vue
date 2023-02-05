<template>
  <div class="container">
    <h1 class="title">Repertoire des Activités</h1>
    <div class="button">
      <AddButton @click="addActivite"/>
    </div>
    <TableHeader />
    <div class="activites" >
      <TableItem :activite="activite"
                  v-for="(activite, index) in activites"
                  :key="index"/>
      <TableItem :activite="activite"
                 v-for="(activite, index) in activites"
                 :key="index"/>
      <TableItem :activite="activite"
                 v-for="(activite, index) in activites"
                 :key="index"/>
      <TableItem :activite="activite"
                 v-for="(activite, index) in activites"
                 :key="index"/>
      <TableItem :activite="activite"
                 v-for="(activite, index) in activites"
                 :key="index"/>
    </div>
    <div class="pagination">
      <div v-for="(page, index) in pages" :key="index" :class="currentPage === page ? 'active' : '' " @click="changePage(page)">
        {{page}}
      </div>
    </div>
  </div>
</template>

<script setup>
import {reactive, ref} from "vue"
import TableItem from "./TableItem.vue"
import AddButton from "../components/AddButton.vue"
import TableHeader from "../components/TableHeader.vue"

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
const pages = reactive([1, 2, 3, 4, 5, 6, 7, 8, 9])
const currentPage = ref(1);
const addActivite = () => {
  console.log("Changing Route")
}
const changePage = (page) => {
  currentPage.value = page
}
</script>

<style scoped>
.container{
  width: fit-content;
  min-height: 100vh;
}
.title{
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 130%;
  color: #000000;
  margin-left:65px;
  margin-top: 35px;
}
.button{
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items:center;
  margin-top:15px;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 130%;
  text-align: center;
  color: #FFFFFF;
}
.activites{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 70vw;
  max-height: 425px;
  margin-left:75px;
  margin-top: 25px;
  padding: 5px;
  overflow-y: scroll;
}
.pagination{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 35px;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  color: #000000;
  align-self: center;
  margin-top: 20px;
}
.active{
  color: #0501DB;
  font-weight: 800;
}
.pagination * {
  cursor: pointer;
}
</style>