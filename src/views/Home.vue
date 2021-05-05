<template>
  <div class="hero">
    <div class="qoute">
      <p>
        “It is only when memory is filtered through imagination that the films
        we make will have real depth.”
      </p>
      <span> ― Louis Malle</span>
    </div>
  </div>
  <cart />
</template>

<script>
import cart from "../components/cart.vue";

export default {
  name: "Home",

  components: { cart },
};
</script>
<style lang="scss" scoped>
.hero {
  background-image: url("../assets/cinemaChair.jpg");
  height: 80vh;
  position: relative;
  background-color: #980613;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.qoute {
  padding: 0;
  margin: 0;
  width: 100%;
  position: absolute;
  height: 100%;
  background-color: #323030bd;
  color: #dfdfdf;
  box-sizing: border-box;
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
