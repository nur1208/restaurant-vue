<template>
  <div
    v-bg="images.bg"
    class="app__bg app__wrapper section__padding"
    id="awards"
  >
    <div class="app__wrapper_info">
      <sub-heading title="Awards & recognition" />
      <h1 class="headtext__cormorant">Our Laurels</h1>

      <div class="app__laurels_awards">
        <award-card v-for="award in awards" :award="award" :key="award.title" />
      </div>
    </div>

    <div class="app__wrapper_img">
      <img :src="images.laurels" alt="laurels_img" />
    </div>
  </div>
</template>
<script>
import { images, data } from "../constants";
import AwardCard from "./AwardCard.vue";
export default {
  data: () => ({ images, awards: data.awards }),
  components: { AwardCard }
};
</script>
<style>
.app__laurels_awards {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;

  margin-top: 3rem;
}

.app__laurels_awards-card {
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  min-width: 230px;

  margin: 1rem;
}

@media screen and (min-width: 1900px) {
  .app__laurels_awards-card {
    min-width: 390px;
  }
}

.app__laurels_awards-card img {
  width: 50px;
  height: 50px;
}

.app__laurels_awards-card_content {
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
}

@media screen and (max-width: 450px) {
  .app__laurels_awards-card {
    min-width: 100%;
    margin: 1rem 0;
  }
}
</style>
