<template>
  <div id="nav">
    <!-- <router-link to="/">Home</router-link> -->
  </div>
  <router-view />
</template>

<style>
body {
  background-image: url("./assets/triangles.png");
  background-color: #420061;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
}

#app {
  font-family: "Roboto Mono", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #feac01;
}

#nav a {
  font-weight: bold;
  color: #feac01;
}

/* #nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
