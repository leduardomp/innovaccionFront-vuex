<template>
  <div class="mySlides fade">
    <div class="containerImg"> 
      <img :src="imgenSrc" class="imgStyle" />
    </div>
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

.containerImg{
  width: 100%;
  height: 100%;
  overflow-x: hidden;
}

.imgStyle {
  width: 100%;
  height: 100vh;
}

.textos {
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-shadow: 1px 3px 4px 5px #000000;
  background-color: rgba(0, 0, 0, .5);
  border-radius: 10px;
  padding: 10px 5px;
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

.imgStyle {
  width: auto;
  height: 100vh;
}

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