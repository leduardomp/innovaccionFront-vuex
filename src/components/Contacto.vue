<template>
  <div class="contacto">
    <div class="row">

      <div class="col">
        <RedesSociales />
      </div>

      <div class="col">
        <Mapa />
      </div>

      <div class="col">
        <FormContacto />
      </div>

    </div>
  </div>
</template>

<script>
import FormContacto from './FormContacto.vue';
import Mapa from './Mapa.vue';
import RedesSociales from './RedesSociales.vue';

export default {
  name: "Contacto",
  components: {
    Mapa, FormContacto, RedesSociales
  }
};
</script>

<style scoped>

.contacto {
  background-image: url("@/assets/contacto/fondo.jpg");
  width: 100vw;
  height: 100vh;
}

.col {
  height: 100%;
  width: 32%;
  display: inline-block;
  text-align: center;
  align-items: center;
  vertical-align: top;
}

.row {
  flex-wrap: wrap;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .col{width: 100%;}
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