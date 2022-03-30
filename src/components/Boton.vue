<template>
  <button class="btn">{{titulo}}</button>
</template>

<script>
export default {
    name:'Boton',
    props:{
      titulo:String
    }
}
</script>

<style scoped>
.btn{
    color: #0D6EFD;
    background-color: white;
    border: 1px solid #0D6EFD;
    border-radius: 5px;
    width: 100%;
    padding: 10px 0px;
    font-size: 1.3em;
}

.btn:hover{
  cursor: pointer;
}

</style>