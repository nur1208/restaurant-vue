<template>
  <div class="app__specialMenu flex__center section__padding" id="menu">
    <div class="app__specialMenu-title">
      <SubHeading title="Menu that fits your palatte" />
      <h1 class="headtext__cormorant">
        Today&apos;s Special
      </h1>
    </div>

    <div class="app__specialMenu-menu">
      <div class="app__specialMenu-menu_wine  flex__center">
        <p class="app__specialMenu-menu_heading">
          Wine & Beer
        </p>
        <div class="app__specialMenu_menu_items">
          <menu-item
            v-for="(wine, index) in wines"
            :key="wine.title + index"
            :title="wine.title"
            :price="wine.price"
            :tags="wine.tags"
          />
        </div>
      </div>

      <div class="app__specialMenu-menu_img">
        <img :src="images.menu" alt="menu__img" />
      </div>

      <div class="app__specialMenu-menu_cocktails  flex__center">
        <p class="app__specialMenu-menu_heading">
          Cocktails
        </p>
        <div class="app__specialMenu_menu_items">
          <menu-item
            v-for="(cocktail, index) in cocktails"
            :key="cocktail.title + index"
            :title="cocktail.title"
            :price="cocktail.price"
            :tags="cocktail.tags"
          />
        </div>
      </div>
    </div>

    <div :style="{ marginTop: 15 }">
      <button type="button" class="custom__button">
        View More
      </button>
    </div>
  </div>
</template>
<script>
import MenuItemVue from "./MenuItem.vue";

import SubHeadingVue from "./SubHeading.vue";
import { images, data } from "../constants";

export default {
  data: () => ({ images, cocktails: data.cocktails, wines: data.wines }),
  components: { "sub-heading": SubHeadingVue, "menu-item": MenuItemVue }
};
</script>
<style>
.app__specialMenu {
  flex-direction: column;
  background: var(--color-black);
}

.app__specialMenu-title {
  margin-bottom: 2rem;
  text-align: center;
}

.app__specialMenu-menu {
  width: 100%;
  margin: 2rem 0;

  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: row;
}

.app__specialMenu-menu_heading {
  font-family: var(--font-base);
  font-weight: 600;
  font-size: 45px;
  line-height: 58.5px;
  letter-spacing: 0.04em;
  color: var(--color-white);
}

.app__specialMenu-menu_wine,
.app__specialMenu-menu_cocktails {
  flex: 1;
  width: 100%;
  flex-direction: column;
}

.app__specialMenu-menu_img {
  width: 410px;
  margin: 0 2rem;
}

.app__specialMenu-menu_img img {
  width: 100%;
  height: auto;
}

.app__specialMenu_menu_items {
  display: flex;
  flex-direction: column;

  margin: 2rem 0;
  width: 100%;
}

@media screen and (min-width: 2000px) {
  .app__specialMenu-menu_img {
    width: 650px;
  }

  .app__specialMenu-menu_img img {
    height: 920px;
  }
}

@media screen and (max-width: 1150px) {
  .app__specialMenu-menu {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .app__specialMenu-menu_img {
    margin: 3rem 0;
  }
}

@media screen and (max-width: 650px) {
  .app__specialMenu-menu_img {
    width: 100%;
  }

  .app__specialMenu-menu_heading {
    font-size: 35px;
    line-height: 48.5px;
  }
}
</style>
