<template>
  <div class="app__video">
    <video
      ref="vidRef"
      :src="meal"
      type="video/mp4"
      loop
      :controls="false"
      muted
    />
    <div class="app__video-overlay flex__center">
      <div class="app__video-overlay_circle flex__center">
        <span @click="toggleVideo">
          <BsPauseFill v-if="playVideo" />
          <BsFillPlayFill v-else />
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import { BsFillPlayFill, BsPauseFill } from "./icons";
import { meal } from "../constants";

export default {
  components: { BsFillPlayFill: BsFillPlayFill, BsPauseFill: BsPauseFill },
  data: () => ({
    meal,
    playVideo: false
  }),
  methods: {
    toggleVideo() {
      console.log("here");
      this.playVideo = !this.playVideo;
      if (this.playVideo) {
        this.$refs.vidRef.pause();
      } else {
        this.$refs.vidRef.play();
      }
    }
  }
};
</script>
<style>
.app__video {
  height: 100vh;
  position: relative;
}

.app__video video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.app__video-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.65);
}

.app__video-overlay_circle {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 1px solid var(--color-golden);
  cursor: pointer;
}
</style>
