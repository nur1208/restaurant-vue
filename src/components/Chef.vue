<template>
  <div v-bg="images.bg" class="app__bg app__wrapper section__padding">
    <div class="app__wrapper_img app__wrapper_img-reverse">
      <img :src="images.chef" alt="chef_image" />
    </div>
    <div class="app__wrapper_info">
      <sub-heading title="Chef's word" />
      <h1 class="headtext__cormorant">
        What we believe in
      </h1>

      <div class="app__chef-content">
        <div class="app__chef-content_quote">
          <img :src="images.quote" alt="quote_image" />
          <p class="p__opensans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .
          </p>
        </div>
        <p class="p__opensans">
          auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit.
          Nulla scelerisque scelerisque congue ac consequat, aliquam molestie
          lectus eu. Congue iaculis integer curabitur semper sit nunc.
        </p>
      </div>

      <div class="app__chef-sign">
        <p>Kevin Luo</p>
        <p class="p__opensans">Chef & Founder</p>
        <img :src="images.sign" alt="sign_image" />
      </div>
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
.app__chef-content {
  display: flex;
  flex-direction: column;
  width: 100%;

  margin-top: 5rem;
}

.app__chef-content_quote {
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
}

.app__chef-content_quote img {
  width: 47px;
  height: 40px;
  margin: 0 1rem 1rem 0;
}

.app__chef-sign {
  width: 100%;
  margin-top: 3rem;
}

.app__chef-sign p:first-child {
  font-family: var(--font-base);
  font-weight: 400;
  font-size: 32px;
  line-height: 41.6px;
  letter-spacing: 0.04em;
  text-transform: capitalize;
  color: var(--color-golden);
}

.app__chef-sign img {
  width: 250px;
  margin-top: 3rem;
}

@media screen and (min-width: 2000px) {
  .app__chef-sign img {
    width: 370px;
  }
}

@media screen and (max-width: 450px) {
  .app__chef-sign img {
    width: 80%;
  }
}
</style>
