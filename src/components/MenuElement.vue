<template>
  <li>
    <a :href="link">{{ nameLink }}</a>
  </li>
</template>

<script>
export default {
  name: "MenuElement",
  props: {
    nameLink: String,
    link:String
  },
};
</script>

<style scoped>
li {
  text-decoration: none;
  display: block;
  padding: 10px;
  margin-left: auto;
  margin-right: auto;
}

li a {
  color: #0d6efd;
  font-size: 1.1em;
  text-decoration: none;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  li {
    padding: 10px 1px;
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