<template>
  <div class="slideshow-container">
    <CarruselElement
      v-for="item of imagenes"
      :key="item.id"
      :imgenSrc="item.imgenSrc"
      :titDesc="item.titDesc"
      :textDesc="item.textDesc"

    />
  </div>
</template>

<script>
import CarruselElement from "./CarruselElement.vue";
import store from "@/store"

export default {
  name: "Carrusel",
  components: {
    CarruselElement,
  },
  data() {
    return {
      imagenes: [
        {
          id: 1,
          imgenSrc: require("@/assets/carrusel/pastel1.jpg"),
          titDesc: "Rosa Fresa",
          textDesc: "Pastel especial para demostrar tu amor",
        },
        {
          id: 2,
          imgenSrc: require("@/assets/carrusel/pastel2.jpg"),
          titDesc: "Rabit Especial",
          textDesc: "Pastel pan de zahanoria",
        },
        {
          id: 3,
          imgenSrc: require("@/assets/carrusel/pastel3.jpg"),
          titDesc: "Frutiquis",
          textDesc: "Pastel con un rico conjunto de frutas frescas de temporada",
        },
      ],
    };
  },
  methods: {
    showSlides() {
      let i;
      let slides = document.getElementsByClassName("mySlides");

      for (i = 0; i < slides.length; i++) {
        slides.item(i).style.display = "none";
      }

      store.commit('incrementarSliderIndex');
      if (store.getters.slideIndex > slides.length) {
        store.commit('sliderIndexOne');
      }

      slides.item(store.getters.slideIndex - 1).style.display = "block";
      setTimeout(this.showSlides, 5000);

    },
  },
  mounted() {
    this.showSlides();
  },
};
</script>

<style scoped>

.slideshow-container {
  width: 100%;
  margin: auto;
}


/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  
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