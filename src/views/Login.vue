<template>
  <div>
    <div class="error" v-if="error">{{ error.message }}</div>
    <form @submit.prevent="pressed">
      Login
      <div class="email">
        <input type="email" v-model="email" placeholder="email" />
      </div>
      <div class="password">
        <input type="password" v-model="password" placeholder="password" />
      </div>
      <button type="submit">login</button>
    </form>
    <span class="reg"
      >Need an account? Click here to
      <router-link to="/register">register </router-link></span
    >
  </div>
</template>

<script>
import firebase from "firebase";
require("firebase/auth");
export default {
  data() {
    return {
      email: "",
      password: "",
      error: "",
    };
  },
  methods: {
    async pressed() {
      try {
        await firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password);
        this.$router.replace({ name: "movie" });
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.error {
  color: red;
  font-size: 18px;
}
form {
  padding-top: 10vh;
  padding-bottom: 15px;
}
.reg {
  color: #dfdfdf;
  font-size: 19px;
}
input {
  width: 300px;
  padding: 20px;
  margin: 10px;
  font-size: 18px;
  color: #bb86fc;
  background-color: #323030;
  outline: none;
  border: 0;
  border-radius: 30px;
}
button {
  width: 340px;
  height: 75px;
  margin-top: 12px;
  color: #b884f8;
  background-color: #323030;
  border: 0;
  outline: none;
  font-size: 24px;
}
</style>