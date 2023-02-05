<template>
  <div class="headers">
    <div class="header">
      Titre
    </div>
    <div class="header description">
      Description
    </div>
    <div class="header">
      Reférentiel
    </div>
    <div class="header">
      Référent
    </div>
    <div class="header">
      Interval de Point
    </div>
    <div class="header">
      Actions
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
.headers {
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  padding: 0px;
  margin-left: 75px;
  width: 70vw;
  height: 60px;
  gap: 2px;
  border-bottom: 1.6px solid #DBDBDB;
  font-weight: bold;
  background-color: #dadada;
}
.header{
  flex: 1;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  display: flex;
  align-items: center;
  color: #222222;
}
.description{
  flex:2;
}
</style>