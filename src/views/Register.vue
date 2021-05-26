<template>
  <div>
    <div class="error" v-if="error">{{ error.message }}</div>
    <form @submit.prevent="pressed(nameuser)">
      Register
      <div class="name">
        <input type="text" v-model="nameuser" placeholder="name" />
      </div>
      <div class="email">
        <input type="email" v-model="email" placeholder="email" />
      </div>
      <div class="password">
        <input type="password" v-model="password" placeholder="password" />
      </div>
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
import firebase from "firebase";
require("firebase/auth");
export default {
  data() {
    return {
      nameuser: "",
      email: "",
      password: "",
      error: "",
    };
  },
  methods: {
    async pressed(nameuser) {
      try {
        const user = await firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then(function (result) {
            return result.user.updateProfile({
              displayName: nameuser,
            });
          })

          .catch(function (error) {
            console.log(error);
          });

        console.dir(user);
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