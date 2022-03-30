<template>
  <div class="modal" :id="idElement">
    <div class="modal-contenido" id="idContenidoModal">
      <div class="modal-titulo">
        <div class="titMod">Orden especial</div>
        <div class="closeIcon" @click="closeModal">X</div>
      </div>
      <div class="modal-body">
        <div class="seccion">
          <div class="titSec">Datos cliente</div>
          <div class="descSec">
            <div class="inputDiv col-1">
              <div class="titInput">Nombre</div>
              <input
                type="text"
                id="nombreCliente"
                name="nombreCliente"
                placeholder="Nombre cliente"
                class="input"
              />
            </div>
            <div class="inputDiv col-2">
              <div class="titInput">Telefono</div>
              <input
                type="text"
                id="telefonoCliente"
                name="telefonoCliente"
                placeholder="Telefono cliente"
                class="input"
              />
            </div>
            <div class="inputDiv col-2">
              <div class="titInput">Email</div>
              <input
                type="text"
                id="emailCliente"
                name="emailCliente"
                placeholder="Email cliente"
                class="input"
              />
            </div>
          </div>
        </div>
        <div class="seccion">
          <div class="titSec">Arma tu pastel</div>
          <div class="descSec">
            <div class="inputDiv col-1">
              <div class="titInput">Tipo de pan</div>
              <div class="radioDiv col-3">
                <input type="radio" name="tipoPan" id="pan1" value="1" /><label
                  for="pan1"
                  >Vainilla $200</label
                >
              </div>
              <div class="radioDiv col-3">
                <input type="radio" name="tipoPan" id="pan2" value="2" /><label
                  for="pan2"
                  >Chocolate $250</label
                >
              </div>
              <div class="radioDiv col-3">
                <input type="radio" name="tipoPan" id="pan3" value="3" /><label
                  for="pan3"
                  >Zanahoria $300</label
                >
              </div>
            </div>
            <div class="inputDiv col-1">
              <div class="titInput">Tipo de relleno</div>
              <div class="radioDiv col-4">
                <input type="radio" name="tipoRelleno" id="relleno1" value="1" /><label
                  for="relleno1"
                  >Fresas $150</label
                >
              </div>
              <div class="radioDiv col-4">
                <input type="radio" name="tipoRelleno" id="relleno2" value="2" /><label
                  for="relleno2"
                  >Durazno $100</label
                >
              </div>
              <div class="radioDiv col-4">
                <input type="radio" name="tipoRelleno" id="relleno3" value="3" /><label
                  for="relleno3"
                  >Chocolate $160</label
                >
              </div>
              <div class="radioDiv col-4">
                <input type="radio" name="tipoRelleno" id="relleno4" value="4" /><label
                  for="relleno4"
                  >Frutos Rojos $180</label
                >
              </div>
            </div>
            <div class="inputDiv col-1">
              <div class="titInput">Tipo de cubierta</div>
              <div class="radioDiv col-4">
                <input type="radio" name="tipoCubierta" id="cubierta1" value="1" /><label
                  for="cubierta1"
                  >Chocolate $50</label
                >
              </div>
              <div class="radioDiv col-4">
                <input type="radio" name="tipoCubierta" id="cubierta2" value="2" /><label
                  for="cubierta2"
                  >Fresa $80</label
                >
              </div>
              <div class="radioDiv col-4">
                <input type="radio" name="tipoCubierta" id="cubierta3" value="3" /><label
                  for="cubierta3"
                  >Miel $20</label
                >
              </div>
              <div class="radioDiv col-4">
                <input type="radio" name="tipoCubierta" id="cubierta4" value="4" /><label
                  for="cubierta4"
                  >Crema pastelera $40</label
                >
              </div>
            </div>
          </div>
        </div>
        <div class="seccion"> 
            <div class="titSec">Adornos</div>
            <div class="descSec">
                <div class="inputDiv col-1">
                    Puedes seleccionar varios tipos de adornos, para ello tendras que irlos agregando uno por uno
                </div>
                <div class="inputDiv col-1 descSec">
                    <div class="col-2">
                        <select class="select">
                            <option value="0">Selecciona</option>
                            <option value="1">Velas - $200</option>
                            <option value="2">Rosas - $100</option>
                            <option value="3">Laminas de chocolate - $300</option>
                        </select>
                    </div>
                    <div class="col-2">
                        <Boton titulo="Agregar" />
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div class="modal-footer">

      </div>
    </div>
  </div>
</template>

<script>
import Boton from './Boton.vue';

export default {
  components: { Boton },
  name: "ModalPedido",
  props: {
    idElement: String,
  },
  methods: {
    closeModal: function (ev) {
      let modal = document.getElementById(this.idElement);
      modal.classList.remove("modal-activo");
    },
  }
};
</script>

<style scoped>
.modal {
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0;
  pointer-events: none;
  transition: all 1s;
  z-index: 1100;
}

.modal-contenido {
  background-color: white;
  width: 70%;
  height: 80vh;
  padding: 20px;
  border-radius: 5px;
  margin: auto;
  margin-top: 5%;
  position: relative;
  z-index: 1110;
  overflow: scroll;
}

.modal-activo {
  opacity: 1;
  pointer-events: auto;
}

.modal-titulo {
  font-size: 3em;
  margin-bottom: 4%;
}

.titMod {
}

.select{
    width: 100%;
    height: 45px;
    border: 1px solid silver;
    border-radius: 5px;
    padding-left: 5px;
    font-size: 1em;
}

.closeIcon {
  width: 10%;
  height: auto;
  position: absolute;
  right: 5px;
  top: 15px;
  cursor: pointer;
  text-align: center;
}

.seccion {
  margin-bottom: 3%;
}

.titSec {
  font-size: 2em;
  margin-top: 4%;
  margin-bottom: 2%;
}

.descSec {
  width: 100%;
  flex-wrap: wrap;
  display: flex;
}

.inputDiv {
  margin-bottom: 2%;
  width: 100%;
}

.radioDiv {
  display: inline-block;
  margin-top: 15px;
}

.radioDiv label{
    margin-left: 10px;
}

.titInput {
  font-size: 1.3em;
  margin-bottom: 5px;
  margin-top: 5%;
}

.input {
  width: 100%;
  padding: 10px 0px;
}

.col-1 {
  width: 100%;
}

.col-2 {
  width: 50%;
}

.col-3 {
  width: 33%;
}

.col-4 {
  width: 25%;
}


/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {

.modal-titulo {
  font-size: 2em;
 
}

.titSec {
    font-size: 1.5em;
}

.col-1, .col-2, .col-3, .col-4{
    width: 100%;
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