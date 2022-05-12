<template>
  <div class="app__menuitem">
    <div class="app__menuitem-head">
      <div class="app__menuitem-">
        <p class="p__cormorant" :style="{ color: '#DCCA87' }">
          {{ title }}
        </p>
      </div>
      <div class="app__menuitem-dash" />
      <div class="app__menuitem-price">
        <p class="p__cormorant">{{ price }}</p>
      </div>
    </div>

    <div class="app__menuitem-sub">
      <p class="p__opensans" :style="{ color: '#AAAAAA' }">
        {{ tags }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: ["title", "price", "tags"]
};
</script>
<style>
.app__menuitem {
  width: 100%;
  margin: 1rem 0;

  display: flex;
  flex-direction: column;
}

.app__menuitem-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.app__menuitem-sub {
  width: 100%;
  margin-top: 0.2rem;
}

.app__menuitem-name {
  flex: 1;
}

.app__menuitem-dash {
  width: 90px;
  height: 1px;
  background: var(--color-golden);
  margin: 0 1rem;
}

.app__menuitem-price {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
}
</style>
