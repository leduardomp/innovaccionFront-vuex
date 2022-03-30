<template>
  <div class="titRedes">Contacto</div>
  <div class="form">
    <div class="formElement">
      <span>Nombre</span><br />
      <input type="text" placeholder="Nombre" />
    </div>
    <div class="formElement">
      <span>Email</span><br />
      <input type="email" placeholder="Email" />
    </div>
    <div class="formElement">
      <span>Comentario</span><br />
      <textarea
        placeholder="Comentario"
        cols="15"
        rows="15"
      ></textarea>
    </div> 
    <div class="formElement">
      <div class="correccionBTN">
        <Boton titulo="Enviar"/>
      </div>
    </div>
  </div>
</template>

<script>
import Boton from './Boton.vue';


export default {
  name: "FormContacto",
  components:{
    Boton

  }
};
</script>

<style>
.form {
  text-align: left;
}

.formElement {
  margin: auto;
  margin-bottom: 5%;
  width: 60%;
}

.formElement input, textarea {
  width: 100%;
  margin-top: 3%;
  border-radius: 5px;
  border: 1px solid silver;
  padding: 10px 0px;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .form {
    width: 100%;
    padding-left: 0%;
    margin-left: 0%;
  }

  .formElement{
    width: 90%;
  }

  .correccionBTN{
    margin-left: 0;
    width: 100%;
    margin: auto;
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