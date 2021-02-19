<template>
  <Nav @nav-changed="(open) => (this.navOpen = open)" />
  <router-view :navOpen="navOpen" />
</template>

<script>
import Nav from "@/components/Nav.vue";

export default {
  components: {
    Nav,
  },
  data() {
    return {
      navOpen: false,
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,500;1,100;1,200;1,300;1,400&display=swap");
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
  transition: color 0.25s ease-in-out;
  color: #feac01;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  transition: color 0.25s ease-in-out;
  color: #6d4d09;
}
</style>
