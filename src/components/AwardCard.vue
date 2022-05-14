<template>
  <div class="app__laurels_awards-card">
    <img :src="award.imgUrl" alt="awards" />
    <div class="app__laurels_awards-card_content">
      <p class="p__cormorant" :style="{ color: '#DCCA87' }">
        {{ award.title }}
      </p>
      <p class="p__opensans">{award.subtitle}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: ["award"]
};
</script>
<style></style>
