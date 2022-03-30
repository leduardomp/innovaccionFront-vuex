<template>
  <Menu />
  <Principal  id="principal" />
  <Linea />
  <Carrusel   id="carrusel" />
  <Linea />
  <Ordenes    id="ordenes" />
  <Linea />
  <Contacto   id="contacto" />
  <IconoPedido />
</template>

<script>
import Menu from '@/components/Menu.vue'
import Principal from '@/components/Principal.vue'
import Carrusel from '@/components/Carrusel.vue'
import Contacto from '@/components/Contacto.vue'
import Ordenes from '@/components/Ordenes.vue'
import Linea from '@/components/Linea.vue'
import IconoPedido from '@/components/IconoPedido.vue'


export default {
    name:'HomeView',
    components:{
        Menu,
        Principal,
        Carrusel,
        Contacto,
        Ordenes,
        Linea,
        IconoPedido,
        Ordenes
    }
}
</script>

<style>

</style>