<template>
  <div class="iconoPedido" @click="openModal"></div>
  <ModalPedido idElement="modalPedido"/>
</template>

<script>
import ModalPedido from '@/components/ModalPedido.vue'

export default {
    name:'IconoPedido',
    components:{
        ModalPedido
    },
    methods:{
        openModal:function(){
            let modal = document.getElementById("modalPedido");
            modal.classList.add("modal-activo");
        }
    }
}
</script>

<style>
.iconoPedido{
    background-image: url("@/assets/pastel.png");
    background-repeat: no-repeat;
    background-position: center;
    display: block;
    position: fixed;
    background-size: cover;
    height: 100px;
    width: 100px;
    bottom: 40px;
    right: 20px;
    cursor: pointer;
}


/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
.iconoPedido{
    height: 60px;
    width: 60px;
}

  
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {

}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {

}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {

}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {

}

</style>