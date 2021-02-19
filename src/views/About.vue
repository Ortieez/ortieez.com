<template>
  <title>
    About ortieez... About Me!
  </title>
  <FadeOut :fade="navOpen">
    Going To Make This Later
  </FadeOut>
</template>

<script>
import FadeOut from "@/components/FadeOut";

export default {
  name: "Test",
  props: ["navOpen"],
  components: {
    FadeOut,
  },
};
</script>

<style></style>
