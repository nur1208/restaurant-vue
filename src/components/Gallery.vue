<template>
  <div class="app__gallery flex__center">
    <div class="app__gallery-content">
      <sub-heading title="Instagram" />
      <h1 class="headtext__cormorant">Photo Gallery</h1>
      <p class="p__opensans" :style="{ color: '#AAAAAA', marginTop: '2rem' }">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis
        ipsum turpis elit elit scelerisque egestas mu.
      </p>
      <button type="button" class="custom__button">
        View More
      </button>
    </div>
    <div class="app__gallery-images">
      <div class="app__gallery-images_container" ref="scrollRef">
        <div
          v-for="(image, index) in galleryImages"
          class="app__gallery-images_card flex__center"
          :key="`gallery_image-${index + 1}`"
        >
          <img :src="image" alt="gallery_image" />
          <BsInstagram class="gallery__image-icon" />
        </div>
      </div>
      <div class="app__gallery-images_arrows">
        <span @click="scroll('left')">
          <BsArrowLeftShort class="gallery__arrow-icon" />
        </span>
        <span @click="scroll('right')">
          <BsArrowRightShort class="gallery__arrow-icon" />
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import { images } from "../constants";
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from "./icons";
export default {
  data: () => ({
    galleryImages: [
      images.gallery01,
      images.gallery02,
      images.gallery03,
      images.gallery04
    ]
  }),
  methods: {
    scroll(direction) {
      if (direction === "left") {
        this.$refs.scrollRef.scrollLeft -= 300;
      } else {
        this.$refs.scrollRef.scrollLeft += 300;
      }
    }
  },
  components: {
    BsInstagram: BsInstagram,
    BsArrowLeftShort: BsArrowLeftShort,
    BsArrowRightShort: BsArrowRightShort
  }
};
</script>
<style>
.app__gallery {
  flex-direction: row;

  background: var(--color-black);
  padding: 4rem 0 4rem 6rem;
}

.app__gallery-content {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  min-width: 500px;
  padding-right: 2rem;
}

.app__gallery-content button {
  margin-top: 1rem;
}

.app__gallery-images {
  flex: 1;
  display: flex;
  flex-direction: row;
  max-width: 50%;
  position: relative;
}

.app__gallery-images_container {
  display: flex;
  flex-direction: row;
  width: max-content;
  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.app__gallery-images_container::-webkit-scrollbar {
  display: none;
}

.app__gallery-images_card {
  position: relative;
  min-width: 301px;
  height: 447px;
  margin-right: 2rem;
}

.gallery__image-icon {
  position: absolute;
  color: #fff;
  font-size: 2rem;
  opacity: 0;
  transition: 0.5s ease;
  cursor: pointer;
}

.app__gallery-images_card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 1;
  transition: 0.5s ease;
}

.app__gallery-images_card:hover img {
  opacity: 0.35;
}

.app__gallery-images_card:hover .gallery__image-icon {
  opacity: 1;
}

.app__gallery-images_arrows {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 1rem;
  position: absolute;
  bottom: 5%;
}

.gallery__arrow-icon {
  color: var(--color-golden);
  font-size: 2rem;
  cursor: pointer;
  background: var(--color-black);
  border-radius: 5px;
}

.gallery__arrow-icon:hover {
  color: var(--color-white);
}

@media screen and (min-width: 2000px) {
  .app__gallery-content button {
    margin-top: 2rem;
  }

  .app__gallery-content {
    min-width: 1000px;
    padding-right: 4rem;
  }

  .app__gallery-images_card {
    min-width: 400px;
    height: 547px;
  }
}

@media screen and (max-width: 1150px) {
  .app__gallery {
    flex-direction: column;
  }

  .app__gallery-images {
    max-width: 100%;
    margin: 5rem 0;
  }
}

@media screen and (max-width: 850px) {
  .app__gallery {
    padding: 4rem 0 4rem 4rem;
  }
}

@media screen and (max-width: 650px) {
  .app__gallery {
    padding: 4rem 0 4rem 2rem;
  }

  .app__gallery-content {
    min-width: 100%;
  }

  .app__gallery-images_card {
    min-width: 240px;
    height: 320px;
  }
}
</style>
