<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link v-if="!loggedIn" to="/login">Login</router-link>
    <router-link v-if="!loggedIn" to="/register">Register</router-link>
    <router-link to="/movie">search</router-link>
    <button v-if="loggedIn" @click="show = !show">...</button>
    <div v-if="show" class="detail">
      <button v-if="loggedIn" @click="signOut">Sign out</button>
      <p>welcome: {{ userName }}</p>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
require("firebase/auth");
export default {
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      this.loggedIn = !!user;
      /* if (user) {
        this.loggedIn = true;
      } else {
        this.loggedIn = false;
      }*/
    });
    this.userName = this.$store.state.userName;
  },
  data() {
    return {
      loggedIn: false,
      show: false,
      userName: "",
    };
  },
  methods: {
    async signOut() {
      try {
        await firebase.auth().signOut();
        this.$router.replace({ name: "Login" });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
#nav {
  padding: 30px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 5vw;
  background-color: #a49a9a38;
  a {
    color: #dfdfdf;
    text-decoration: none;
    &.router-link-exact-active {
      color: #bb86fc;
      text-decoration: none;
    }
  }
  button {
    all: unset;
    color: #ecddfd;
    font-size: 3vw;
    cursor: pointer;
  }
}
.detail {
  position: absolute;
  width: fit-content;
  height: 150px;
  background-color: #1f1f1f;
  font-size: 15px;
  right: 0;
  top: 100px;
  box-sizing: border-box;
  padding: 20px;
  color: white;
}
@media screen and(max-width: 500px) {
  #nav {
    font-size: 4vw;
  }
}
</style>