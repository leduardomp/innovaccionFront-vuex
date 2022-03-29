<template>
  <Menu />
  <Principal  id="principal" />
  <Linea />
  <Carrusel   id="carrusel" />
  <Linea />
  <Ordenes    id="ordenes" />
  <Linea />
  <Contacto   id="contacto" />
</template>

<script>
import Menu from '@/components/Menu.vue'
import Principal from '@/components/Principal.vue'
import Carrusel from '@/components/Carrusel.vue'
import Contacto from '@/components/Contacto.vue'
import Ordenes from '@/components/Ordenes.vue'
import Linea from '@/components/Linea.vue'


export default {
    name:'HomeView',
    components:{
        Menu,
        Principal,
        Carrusel,
        Contacto,
        Ordenes,
        Linea,
        Ordenes
    }
}
</script>

<style>

</style>