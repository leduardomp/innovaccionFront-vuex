<template>
  <div class="mySlides fade">
    <img :src="imgenSrc" class="imgStyle" />
    <div class="textos">
      <div class="textA">{{ titDesc }}</div>
      <div class="textB">{{ textDesc }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CarruselElement",
  props: {
    imgenSrc: String,
    titDesc: String,
    textDesc: String,
  },
};
</script>

<style scoped>
.imgStyle {
  width: 100%;
  height: 100vh;
}

.textos {
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.textA {
  font-size: 3.5em;
  text-align: center;
}

.textB {
  font-size: 2em;
  text-align: center;
}

.mySlides {
  display: none;
  color: #f2f2f2;
  position: relative;
}

.fade {
  animation-name: fade;
  animation-duration: 1.5s;
}

@keyframes fade {
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
.textos {
  bottom: 2%;
  left: 50%;
}

.textA {
  font-size: 1.5em;
  text-align: center;
}

.textB {
  font-size: 1em;
  text-align: center;
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