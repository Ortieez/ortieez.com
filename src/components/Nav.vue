<template>
  <div class="nav">
    <div class="right-tri">
      <h2 class="menu-text">Menu</h2>
      <img
        class="arrow"
        v-on:click="arrowClicked"
        src="@/assets/arrow.svg"
        draggable="false"
      />
      <div class="nav-wrap" id="nav">
        <router-link to="/" class="home">Home</router-link>
        <router-link to="/About" class="about" routerLinkActive="active"
          >About</router-link
        >
      </div>
      <img class="right" src="@/assets/right-tri.svg" />
    </div>
    <div class="left-tri">
      <img src="@/assets/left-tri.svg" />
    </div>
  </div>
</template>

<script>
import anime from "animejs/lib/anime.es.js";

export default {
  name: "Nav",
  data() {
    return {
      openedNav: true,
    };
  },
  methods: {
    arrowClicked: function() {
      var NavMenu = document.getElementById("nav");

      switch (this.openedNav) {
        case false:
          NavMenu.style.visibility = "visible";
          this.openedNav = true;
          anime({
            targets: "img.arrow",
            rotate: 180,
          });
          anime({
            targets: ".nav-wrap",
            opacity: 1,
            delay: 500,
            easing: "easeInOutQuad",
          });
          anime({
            targets: ".right-tri .right",
            width: "70rem",
            height: "130rem",
            easing: "easeInOutQuad",
          });
          break;
        case true:
          this.openedNav = false;
          NavMenu.style.visibility = "hidden";
          anime({
            targets: "img.arrow",
            rotate: 0,
          });
          anime({
            targets: ".nav-wrap",
            opacity: 0,
            delay: "-300",
            easing: "easeInOutQuad",
          });
          anime({
            targets: ".right-tri .right",
            width: "25rem",
            height: "45rem",
            easing: "easeInOutQuad",
          });
          break;
      }

      this.$emit("nav-changed", this.openedNav);
    },
  },
};
</script>

<style scoped>
.left-tri {
  position: absolute;
  bottom: -10px;
  margin: 0;
  padding: 0;
  left: 0;
  z-index: 10;
}

.left-tri img {
  width: 25rem;
  height: 45rem;
}

.right-tri {
  position: absolute;
  top: -10px;
  margin: 0;
  padding: 0;
  right: 0;
  z-index: 10;
}

.right-tri img {
  width: 25rem;
  height: 45rem;
}

.menu-text {
  position: absolute;
  top: 2.8rem;
  right: 9rem;
  z-index: 20;
}

img.arrow {
  position: absolute;
  width: 4rem;
  height: 4rem;
  top: 3.15rem;
  right: 4rem;
  z-index: 20;
  user-select: none;
}

.nav-wrap {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 42vh;
  font-size: 4vh;
  right: 80vh;
  opacity: 0;
}

#nav {
  visibility: hidden;
}

.about {
  padding: 2vh 0 0 5vh;
}
</style>
