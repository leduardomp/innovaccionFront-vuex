<template>
  <div class="principal">
    <div class="titDiv">
      <span class="titulo"> La casa del Pastel </span>
    </div>
    <img src="@/assets/logo2.png" alt="logo" class="logo" />
  </div>
</template>

<script>
export default {
  name: "Principal",
};
</script>

<style scoped>
.principal {
  background-image: url("@/assets/principal.jpg");
  width: 100vw;
  height: 100vh;
}

.titDiv {
  width: auto;
  top: 11%;
  position: relative;
}

.titulo {
  color: white;
  font-size: 11em;
  font-family: "Great Vibes", cursive;
  padding-left: 5%;
}

.logo {
  width: 15%;
  margin-left: 60%;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .principal {
    background-image: url("@/assets/principalV.jpg");
    background-size: cover;
    background-position: center;
  }
  
  .titulo {
    font-size: 3em;
    padding-left: 10%;
  }

  .logo{
    width: 20%;
    margin-top: 13%;
    margin-left: 75%;
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
