<template>
  <div class="carts">
    <div
      @click="showPopUp(movie.id)"
      class="cart"
      v-for="movie in todayTrends.results"
      :key="movie.id"
    >
      <img
        :src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path"
        :alt="movie.original_title"
        loading="lazy"
      />
      <div class="detail">
        <h3>{{ movie.original_title }}</h3>
        <p>{{ movie.release_date }}</p>
        <div class="rating">
          <p :style="{ width: movie.vote_average * 10 + '%' }">
            {{ movie.vote_average }}
          </p>
        </div>
      </div>
    </div>
  </div>
  <module v-if="show" @close="show = false" :id="id" />
</template>
<script>
import module from "../components/module.vue";
export default {
  props: {
    url: {
      default: "trending/movie/day",
    },
    query: {
      default: "",
    },
  },
  data() {
    return {
      todayTrends: "",
      show: false,
      id: "",
      payload: {
        url: this.url,
        query: this.query,
      },
    };
  },
  components: { module },
  methods: {
    showPopUp(id) {
      this.id = id;
      this.show = true;
    },
  },

  async mounted() {
    this.todayTrends = await this.$store.dispatch(
      "getTodayTrends",
      this.payload
    );
  },
  watch: {
    query: async function () {
      this.payload.url = this.url;
      this.payload.query = this.query;
      if (this.query !== "") {
        this.todayTrends = await this.$store.dispatch(
          "getTodayTrends",
          this.payload
        );
      } else {
        this.todayTrends = await this.$store.dispatch(
          "getTodayTrends",
          this.payload
        );
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.carts {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: space-around;
  align-items: center;
  color: antiquewhite;
  padding-top: 40px;
  margin: 0 20px;
  .cart {
    flex-basis: 300px;
    position: relative;
    margin-bottom: 100px;
    transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
    cursor: pointer;
    box-shadow: 0px 0px 20px 0px black;
    img {
      width: 100%;
      border-radius: 20px;
    }
    .detail {
      transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
      background-color: #dfdfdf;
      color: #bb86fc;
      padding: 20px;
      box-sizing: border-box;
      position: absolute;
      top: 80%;
      height: 100px;
      overflow: hidden;
      width: 100%;
      border-radius: 0 0 20px 20px;
      display: flex;
      flex-direction: column;
      align-content: center;
      justify-content: center;
      align-items: center;
      p,
      .rating {
        display: none;
        transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
      }
      .rating {
        width: 60%;
        background-color: #c5c5c5;
        border-radius: 20px;
        position: relative;
        &::after {
          content: "/10";
          position: absolute;
          width: 100%;
          height: 100%;
          top: 10%;
          left: 60%;
          font-size: 14px;
          opacity: 0.7;
        }
        p {
          padding: 2px;
          margin: 0;
          box-sizing: border-box;
          background-color: azure;
          border-radius: 20px;
        }
      }
    }
  }
}
.cart:hover {
  transform: scale(1.2);
  z-index: 9;
  .detail {
    top: 55%;
    height: 50%;
  }
  p,
  .rating {
    display: block !important;
  }
}
</style>