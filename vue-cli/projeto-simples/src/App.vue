<template>
  <div id="app">{{titulo}}
  <button @click="titulo += '#'"> AQUI </button>
  </div>
</template>

<script>
  export default{
    data: function(){
      return{
        titulo: 'Teste Data usando Vue JS!!!'
      }
    }
  }
</script>

<style>
  #app{
    background-color: chocolate;
    color: black;
  }
</style>