<template>
  <div class="home">
    <title>
      Welcome to My Page!
    </title>
    <FadeOut :fade="navOpen">
      <div class="logo-wrap">
        <img class="main-logo" src="@/assets/logo.png" />
        <h2 class="main-name">ortieez</h2>
      </div>
      <div class="center-text">
        <div class="center-wrap">
          <div id="type" class="main-center"></div>
          <h3 class="second-center">Web Developer. Designer. Student.</h3>
        </div>
      </div>
    </FadeOut>
  </div>
</template>

<script>
import Typewriter from "typewriter-effect/dist/core";
import FadeOut from "@/components/FadeOut.vue";

export default {
  name: "Home",
  meta: {
    title: "Home Page - Example App",
  },
  props: ["navOpen"],
  components: {
    FadeOut,
  },
  mounted() {
    var typetext = document.getElementById("type");
    console.log(typetext);
    var typewriter = new Typewriter(typetext, {
      loop: true,
      cursor: "/",
      deleteSpeed: 0.5,
    });

    typewriter
      .typeString("Hey, I'm ortieez!")
      .pauseFor(3000)
      .deleteChars(8)
      .typeString("Adam!")
      .pauseFor(3000)
      .deleteAll()
      .typeString("Welcome to My Page!")
      .pauseFor(3000)
      .start();
  },
};
</script>
<style scoped>
.logo-wrap {
  position: relative;
  display: flex;
  align-items: center;
  z-index: 20;
  width: 50%;
}

.main-logo {
  margin: 1rem 0 0 6rem;
  width: 6rem;
}
.main-name {
  margin-bottom: 3px;
}

.center-text {
  display: flex;
  justify-content: center;
  text-align: center;
}

.center-wrap {
  margin-top: 25vh;
}

.main-center {
  font-size: 40px;
  margin: 0;
  font-weight: 600;
}

.second-center {
  margin: 10px 0 0 0;
  font-size: 20px;
}
</style>
