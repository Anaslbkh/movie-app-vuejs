<template>
  <div class="popup">
    <div class="close" @click="$emit('close')">X</div>
    <a :href="movie.homepage">
      <h3>{{ movie.original_title }}</h3>
    </a>
    <div class="movie-detail">
      <div class="cover">
        <img
          :src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path"
          :alt="movie.original_title"
        />
      </div>
      <div class="detail">
        <p>{{ movie.overview }}</p>
        <p>
          <span>{{ movie.release_date }}</span
          >|<span>{{ movie.runtime }} min</span>|<span
            >{{ movie.vote_average }}/10</span
          >
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["id"],
  data() {
    return {
      movie: "",
      payload: {
        url: `/movie/${this.id}`,
        query: "",
      },
    };
  },
  async mounted() {
    this.movie = await this.$store.dispatch("getTodayTrends", this.payload);
    console.dir(this.movie);
  },
};
</script>
<style lang="scss" scoped>
.close {
  width: 100vw;
  text-align: right;
  box-sizing: border-box;
  font-size: 40px;
  opacity: 0.9;
  padding: 10px 30px 10px 0;
  cursor: pointer;
}
.popup {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100vw;
  height: fit-content;
  min-height: 90vh;
  background-color: rgb(39, 39, 39);
  color: #dfdfdf;
  padding-bottom: 50px;
}
a {
  all: unset;
  h3 {
    font-size: 2rem;
    color: #cccccc;
  }
}
.movie-detail {
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-evenly;
  align-items: center;
  * {
    flex-basis: 42%;
  }
  .detail {
    text-align: left;
  }
}
img {
  width: 90%;
  max-width: 500px;
}
@media screen and(max-width: 500px) {
  a h3 {
    font-size: 1.2rem;
    position: absolute;
    top: 5px;
    left: 37px;
    width: 80%;
  }
  img {
    height: 50vh;
    width: auto;
  }
  .movie-detail {
    flex-direction: column;
    margin-top: 15px;
  }
  .detail {
    text-align: center !important;
  }
}
</style>