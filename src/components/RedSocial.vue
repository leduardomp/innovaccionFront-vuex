<template>
  <div class="red">
    <div class="redS">
      <div class="element"> 
        <img :src="imgSrc" :alt="altImg" class="logosRedes" />
      </div>
      <div class="element"> 
        <span class="textRedes">{{title}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RedSocial",
  props: {
    imgSrc: String,
    altImg: String,
    title: String,
  },
};
</script>

<style>

.red{
  
}

.redS {
  background-color: rgba(57, 60, 73, 0.2);
  padding: 5px 0px 5px 5px;
  border-radius: 5px;
  width: 50%;
  margin: auto;
  display: flex;
  align-items: center;
  text-align: center;
}

.element{
  display: inline-block;
  vertical-align: middle;
  margin-left: 5%;
}

.logosRedes {
  width: 60px;
}

.textRedes {
  font-size: 1.2em;
}
</style>