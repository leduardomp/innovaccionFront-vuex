<template>
  <div class="container">
    <h1 class="subtitulo">Pasteles</h1>
    <div class="listaCard">
      <Card 
        v-for='item of items'
        :key="item.id"
        :titulo="item.titulo"
        :valores="item.valores"
        :precio="item.precio"
        :tituloBtn="item.tituloBtn"
        :urlImg="item.urlImg"
        :alt="item.altImg"
      />
    </div>
    <h1 class="subtitulo">Adornos</h1>
    <div class="listaCard">
      <Card 
        v-for='item of adornos'
        :key="item.id"
        :titulo="item.titulo"
        :valores="item.valores"
        :precio="item.precio"
        :tituloBtn="item.tituloBtn"
        :urlImg="item.urlImg"
        :alt="item.altImg"
      />
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";

export default {
  name: "Ordenes",
  components: {
    Card,
  },
  data() {
    return {
      items: [
          {
          id:1,
          titulo: "Chocolatin",
          precio: "$400.00",
          valores: [
            "Pan de chocolate",
            "Reñeno de fresa",
            "Nuez",
          ],
          tituloBtn: "Pedir",
          urlImg: require("@/assets/producto/pastel/chocolatin.jpeg"),
          altImg: "chocolatin",
        },
        {
          id:2,
          titulo: "Fresuqui",
          precio: "$560.00",
          valores: [
            "Pan de vainilla",
            "Reñeno de fresa",
            "Cubierta de fresa",
          ],
          tituloBtn: "Pedir",
          urlImg: require("@/assets/producto/pastel/fresuqui.jpeg"),
          altImg: "fresuqui",
        },
        {
          id:3,
          titulo: "Rabit",
          precio: "$370.00",
          valores: [
            "Pan de zanahoria",
            "Cubierta de crema pastelera",
            "Glaseado de canela",
          ],
          tituloBtn: "Pedir",
          urlImg: require("@/assets/producto/pastel/rabit.jpeg"),
          altImg: "rabit",
        },
        {
          id:4,
          titulo: "ChocoChoco",
          precio: "$340.00",
          valores: [
            "Pan de chocolate",
            "Cubierta de chocolate",
            "Relleno de chocolate",
          ],
          tituloBtn: "Pedir",
          urlImg: require("@/assets/producto/pastel/chocho.jpeg"),
          altImg: "chocho",
        },
        {
          id:5,
          titulo: "Rosa Fresa",
          precio: "$640.00",
          valores: [
            "Pan de vainilla",
            "Cubierta de fresas",
            "Relleno de fresas",
            "Adornos de rosas",
          ],
          tituloBtn: "Pedir",
          urlImg: require("@/assets/producto/pastel/chocho.jpeg"),
          altImg: "chocho",
        },
        {
          id:6,
          titulo: "Frutiquis",
          precio: "$720.00",
          valores: [
            "Pan de vainilla con cama de chocolate",
            "Cubierta de frutos frescos",
            "Adornado con laminas de chocolate",
            "Cubierto de miel natural",
          ],
          tituloBtn: "Pedir",
          urlImg: require("@/assets/producto/pastel/frutiquis.jpg"),
          altImg: "frutiquis",
        },
      ],
      adornos:[
        {
          id:1,
          titulo: "Velas",
          precio: "$100.00",
          valores: [
            "Velas Feliz Cumpleaños",
          ],
          tituloBtn: "Pedir",
          urlImg: require("@/assets/producto/adornos/velas.jpg"),
          altImg: "velas",
        },
        {
          id:2,
          titulo: "Rosas",
          precio: "$170.00",
          valores: [
            "Chantilli de fresa en forma de rosa",
          ],
          tituloBtn: "Pedir",
          urlImg: require("@/assets/producto/adornos/rosasPastel.jpg"),
          altImg: "rosasPastel",
        },
        {
          id:3,
          titulo: "Laminas de chocolate",
          precio: "$120.00",
          valores: [
            "Chocolate blanco en laminas",
          ],
          tituloBtn: "Pedir",
          urlImg: require("@/assets/producto/adornos/laminasChocolate.jpg"),
          altImg: "laminasChocolate",
        }
      ]
    };
  },
};

</script>

<style>

.listaCard{
    display: flex;
    flex-wrap: wrap;
}

.container{
    padding: 3%;
}

.subtitulo{
    margin-bottom: 3%;
}

</style>