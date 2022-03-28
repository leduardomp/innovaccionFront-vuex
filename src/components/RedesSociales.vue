<template>
  <div class="titRedes">Redes Sociales</div>
  <div class="row">
    <RedSocial
      v-for="item of redSociales"
      :key="item.id"
      :imgSrc="item.imgSrc"
      :altImg="item.altImg"
      :title="item.title"
      class="socialRed"
    />
  </div>
</template>

<script>
import RedSocial from '@/components/RedSocial.vue'

export default {
  name: "RedesSociales",
  components:{
      RedSocial
  },
  data() {
    return {
      redSociales: [
        {
          id: 1,
          imgSrc: require("@/assets/contacto/logo-face2.png"),
          altImg: "facebook",
          title: "Facebook",
        },
        {
          id: 2,
          imgSrc: require("@/assets/contacto/logo-insta.png"),
          altImg: "instagram",
          title: "Instagram",
        },
        {
          id: 3,
          imgSrc: require("@/assets/contacto/logo-twitter.png"),
          altImg: "twitter",
          title: "Twitter",
        },
      ],
    };
  },
};
</script>

<style>

.row {
  flex-wrap: wrap;
}

.titRedes {
  font-size: 1.5em;
  margin-top: 25%;
  margin-bottom: 10%;
}

.redSc{
  margin-bottom: 5%;
}

.socialRed{
  vertical-align: middle;
  margin-bottom: 8%;
}
</style>