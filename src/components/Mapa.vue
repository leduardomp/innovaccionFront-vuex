<template>
  <div class="titRedes">Mapa</div>
  <div class="mapa">
    <iframe
      width="350"
      height="300"
      frameborder="0"
      scrolling="no"
      marginheight="0"
      marginwidth="0"
      class="styleMapa"
      src="https://www.openstreetmap.org/export/embed.html?bbox=-99.09900221857245%2C19.399828184812755%2C-99.02733359369452%2C19.435809827752326&amp;layer=mapnik&amp;marker=19.417820001951352%2C-99.06316790613346"
    >
    </iframe>
  </div>
  <div class="datosOficina">
    <p>Texcoco 300, Agricala Pantitlan, Iztacalco, Ciudad de México, 08100</p>
    <p>Abierto de Lunes a Domingo de 9 am a 8 pm</p>
    <p><a href="+525555555555">Tel: 55 5555 5555 </a></p>
  </div>
</template>

<script>
export default {
    name:'Mapa'
};
</script>

<style>

.datosOficina{
  text-align: left;
  padding-left: 10%;
  padding-right: 10%;
}

.datosOficina p{
  margin-top: 4%;
  margin-bottom: 4%;
}

</style>