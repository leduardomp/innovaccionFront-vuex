<template>
  <li><a>{{nameLink}}</a></li>
</template>

<script>
export default {
    name:'MenuElement',
    props:{
        nameLink:String
    }
}
</script>

<style scoped>
li{
  text-decoration: none;
  display: block;
  padding: 10px;
  margin-left: auto;
  margin-right: auto;
}

li a{
  color: #0D6EFD;
  font-size: 1.1em;
}
</style>