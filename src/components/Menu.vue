<template>
  <header>
    <nav>
      <ul>
        <MenuElement nameLink="Inicio" />
        <MenuElement nameLink="Productos" />
        <MenuElement nameLink="Ordenes" />
        <MenuElement nameLink="Contacto" />
      </ul>
    </nav>
  </header>
</template>

<script>
import MenuElement from "@/components/MenuElement.vue";

export default {
  name: "Menu",
  components: {
    MenuElement,
  },
};
</script>

<style>
header {
  position: fixed;
  background-color: #FFFFFF;
  width: 100%;
  z-index: 1000;
}

nav{
  margin: 0 auto;
  width: 100%;
}

nav ul{
  display: flex;
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