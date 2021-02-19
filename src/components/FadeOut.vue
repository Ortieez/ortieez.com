<template>
  <div class="fade-wrapper" :class="{ hidden: fade }">
    <slot />
  </div>
</template>

<script>
export default {
  name: "FadeOut",
  props: ["fade"],
};
</script>

<style scoped>
.fade-wrapper {
  transition: opacity 0.5s ease-in-out;
}

.hidden {
  opacity: 0;
}
</style>
