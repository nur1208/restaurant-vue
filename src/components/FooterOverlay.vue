<template>
  <div class="app__footerOverlay">
    <div class="app__footerOverlay-black" />
    <div v-bg="images.bg" class="app__footerOverlay-img app__bg" />
  </div>
</template>
<script>
import { images } from "../constants";

export default {
  data: () => ({ images })
};
</script>
<style>
.app__footerOverlay {
  width: 100%;
  height: 100%;
  z-index: -1;

  display: flex;
  flex-direction: column;
  position: absolute;
}

.app__footerOverlay-black {
  height: 25%;
  background: var(--color-black);
}

.app__footerOverlay-img {
  height: 75%;
}
</style>
