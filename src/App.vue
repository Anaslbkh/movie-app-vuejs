<template>
  <theHeader></theHeader>
  <router-view />
</template>
<script>
import theHeader from "./components/Theheader";

export default {
  components: { theHeader },
};
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  background-color: #121212;
}
#app {
  font-family: monospace, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  letter-spacing: 1px;
}
</style>
