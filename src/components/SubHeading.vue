<template>
  <div :style="{ marginBottom: '1rem' }">
    <p class="p__cormorant">{{ title }}</p>
    <img :src="images.spoon" alt="spoon_image" class="spoon__img" />
  </div>
</template>
<script>
import { images } from "../constants";

export default {
  data: () => ({ images }),
  props: ["title"]
};
</script>
<style></style>
