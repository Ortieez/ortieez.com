<template>
  <div class="nav">
    <div class="right-tri">
      <h2 class="menu-text">Menu</h2>
      <img class="arrow" src="@/assets/arrow.svg" />
      <img src="@/assets/right-tri.svg" />
    </div>
    <div class="left-tri">
      <img src="@/assets/left-tri.svg" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Nav",
};
</script>

<style scoped>
.left-tri {
  position: absolute;
  bottom: -10px;
  margin: 0;
  padding: 0;
  left: 0;
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
}

.right-tri img {
  width: 25rem;
  height: 45rem;
}

.menu-text {
  position: absolute;
  top: 10px;
}
.arrow {
  position: absolute;
}
.arrow img {
  height: 10px;
}
</style>
