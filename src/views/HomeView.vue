<template>
  <Menu />
  <Principal />
  <Carrusel />
  <Ordenes />
  <Contacto />
</template>

<script>
import Menu from '@/components/Menu.vue'
import Principal from '@/components/Principal.vue'
import Carrusel from '@/components/Carrusel.vue'
import Contacto from '@/components/Contacto.vue'
import Ordenes from '@/components/Ordenes.vue'


export default {
    name:'HomeView',
    components:{
        Menu,
        Principal,
        Carrusel,
        Contacto,
        Ordenes,
        Ordenes
    }
}
</script>

<style>

</style>