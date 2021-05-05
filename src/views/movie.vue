<template>
  <div class="title">LOOKING FOR A MOVIE???</div>
  <input type="text" placeholder="type a movie name" v-model="query" />
  <cart :url="newUrl" :query="query" />
</template>

<script>
import Cart from "../components/cart.vue";
export default {
  components: { Cart },
  data() {
    return {
      newUrl: "trending/movie/day",
      query: "",
    };
  },
  watch: {
    query: function () {
      if (this.query !== "") {
        this.newUrl = "search/movie";
      } else {
        this.newUrl = "trending/movie/day";
        this.query = "";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  color: #dfdfdf;
}
.title {
  padding: 20px 10px 15px;
}
input {
  width: 300px;
  padding: 16px 30px;
  text-align: center;
  margin: 10px;
  font-size: 18px;
  color: #bb86fc;
  background-color: #323030;
  outline: none;
  border: 0;
  border-radius: 30px;
}
</style>