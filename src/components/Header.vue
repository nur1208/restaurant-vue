<template>
  <div class="app__header app__wrapper section__padding" id="home">
    <div class="app__wrapper_info">
      <sub-heading title="Chase the new flavour" />
      <h1 class="app__header-h1">The Key To Fine Dining</h1>
      <p class="p__opensans" :style="{ margin: '2rem 0' }">
        Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat
        morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet
        tellus
      </p>
      <button type="button" class="custom__button">
        Explore Menu
      </button>
    </div>

    <div class="app__wrapper_img">
      <img :src="images.welcome" alt="header_img" />
    </div>
  </div>
</template>
<script>
import { images } from "../constants";

export default {
  data: () => ({ images })
};
</script>
<style>
.app__header {
  background-color: var(--color-black);
}

.app__header-h1 {
  font-family: var(--font-base);
  color: var(--color-golden);
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: capitalize;
  line-height: 117px;
  font-size: 90px;
}

.app__header-img img {
  width: 80%;
}

@media screen and (min-width: 2000px) {
  .app__header-h1 {
    font-size: 180px;
    line-height: 210px;
  }
}

@media screen and (max-width: 1150px) {
  .app__header-h1 {
    font-size: 90px;
  }
}

@media screen and (max-width: 650px) {
  .app__header-h1 {
    font-size: 70px;
    line-height: 87px;
  }
}

@media screen and (max-width: 450px) {
  .app__header-h1 {
    font-size: 50px;
    line-height: 70px;
  }
}
</style>
