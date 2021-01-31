<template>
  <div class="home">
    <div class="logo-wrap">
      <img class="main-logo" src="@/assets/logo.png" />
      <h2 class="main-name">ortieez</h2>
    </div>
    <div class="center-text">
      <div class="center-wrap">
        <h1 class="main-center">Hey,I am ortieez!</h1>
        <h3 class="second-center">Web Developer. Designer. Student.</h3>
      </div>
    </div>
    <!-- <Nav/> -->
  </div>
</template>

<script>
// import Nav from '@/components/Nav.vue'

export default {
  name: "Home",
  components: {
    // Nav
  },
};
</script>

<style scoped>
.logo-wrap {
  display: flex;
  align-items: center;
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

.main-center {
  font-size: 40px;
  margin: 0;
  margin-top: 45%;
}

.second-center {
  margin: 10px 0 0 0;
  font-size: 20px;
}
</style>
