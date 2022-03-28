<template>
  <div class="card">
    <div class="header">
      <div class="titHeader">{{ titulo }}</div>
      <img :src="urlImg" :alt="altImg" class="imgClass" />
    </div>

    <div class="body-card">
      <h1>{{ precio }}</h1>
      <ul>
        <li v-for='item of valores'>{{ item }}</li>
      </ul>
      <div class="div-button">
        <Boton :titulo="tituloBtn" class="btn-card" />
      </div>
    </div>
  </div>
</template>

<script>
import Boton from "./Boton.vue";

export default {
  name: "Card",
  props: {
    titulo: String,
    valores: Array,
    precio: String,
    tituloBtn: String,
    urlImg: String,
    altImg: String,
  },
  components: {
    Boton,
  },
};
</script>

<style scoped>
.card {
  border: 1px solid #dfdfdf;
  border-radius: 10px;
  margin-bottom: 5%;
  box-shadow: 0px 20px 30px 0px rgba(0, 0, 0, 0.2);
  margin-left: 1.5%;
  margin-right: 1.5%;
  display: flexbox;
}

.titHeader {
  text-align: center;
  background-color: #f7f7f7;
  font-size: 1.5em;
  padding: 10px 0px;
}

.body-card {
  align-items: center;
  text-align: center;
  padding: 20px;
}

.body-card h1 {
  padding: 10px 0px;
}

.body-card ul li {
  list-style-type: none;
  padding: 5px 0px;
}

.imgClass {
  width: 100%;
}

.div-button{
  margin-top: 10%;
}

.btn-card {
  right: 0; bottom: 0;
}

@media only screen and (min-width:1001px) {
	.card{
		width: 21.8%;
	}
}


@media only screen and (min-width:701px) and (max-width:100px) {
	.card{
		width: 30%;
	}
}

@media only screen and (min-width:401px) and (max-width:700px) {
	.card{
		width: 45%;
	}
}

@media only screen and (max-width:400px) {
	.card{
		width: 100%;
	}
}


</style>