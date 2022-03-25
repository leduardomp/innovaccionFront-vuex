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
  width: 100%;
  background-color: #FFFFFF;
  align-items: center;
}

nav{
  margin: 0 auto;
  text-align: center;
  align-items: center;
  justify-items: center;
  align-content: center;
}

nav ul{
  display: flex;
  list-style-type: none;
}
</style>