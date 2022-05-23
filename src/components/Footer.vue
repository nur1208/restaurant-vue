<template>
  <div class="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div class="app__footer-links">
      <div class="app__footer-links_contact">
        <h1 class="app__footer-headtext">Contact Us</h1>
        <p class="p__opensans">
          9 W 53rd St, New York, NY 10019, USA
        </p>
        <p class="p__opensans">+1 212-344-1230</p>
        <p class="p__opensans">+1 212-555-1230</p>
      </div>

      <div class="app__footer-links_logo">
        <img :src="images.gericht" alt="footer_logo" />
        <p class="p__opensans">
          &quot;The best way to find yourself is to lose yourself in the service
          of others.&quot;
        </p>
        <img
          :src="images.spoon"
          class="spoon__img"
          :style="{ marginTop: 15 }"
        />
        <div class="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div class="app__footer-links_work">
        <h1 class="app__footer-headtext">Working Hours</h1>
        <p class="p__opensans">Monday-Friday:</p>
        <p class="p__opensans">08:00 am - 12:00 am</p>
        <p class="p__opensans">Saturday-Sunday:</p>
        <p class="p__opensans">07:00 am - 11:00 pm</p>
      </div>
    </div>

    <div class="footer__copyright">
      <p class="p__opensans">
        2021 Gericht. All Rights reserved.
      </p>
    </div>
  </div>
</template>
<script>
import { images } from "../constants";
import FooterOverlayVue from "./FooterOverlay.vue";
import { FiFacebook, FiTwitter, FiInstagram } from "./icons";
import NewsletterVue from "./Newsletter.vue";
export default {
  data: () => ({
    images
  }),
  components: {
    FiFacebook: FiFacebook,
    FiTwitter: FiTwitter,
    FiInstagram: FiInstagram,
    FooterOverlay: FooterOverlayVue,
    Newsletter: NewsletterVue
  }
};
</script>
<style>
.app__footer {
  width: 100%;
  position: relative;
  z-index: 1;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  background: var(--color-black);
  padding-top: 0;
}

.app__footer-links {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  margin-top: 5rem;
  padding: 0 2rem;
}

.app__footer-links_contact,
.app__footer-links_logo,
.app__footer-links_work {
  flex: 1;
  margin: 1rem;
  text-align: center;
}

.app__footer-links_logo img:first-child {
  width: 210px;
  margin-bottom: 0.75rem;
}

.app__footer-links_work p:nth-child(2n + 1) {
  margin-bottom: 1rem;
}

.app__footer-links_icons {
  margin-top: 0.5rem;
}

.app__footer-links_icons svg {
  color: var(--color-white);
  margin: 0.5rem;
  font-size: 24px;
  cursor: pointer;
}

.app__footer-links_icons svg:hover {
  color: var(--color-golden);
}

.app__footer-headtext {
  font-family: var(--font-base);
  color: var(--color-white);
  font-weight: 400;
  letter-spacing: 0.04em;
  text-transform: capitalize;
  font-size: 32px;
  line-height: 41.6px;
  margin-bottom: 1rem;
}

.footer__copyright {
  margin-top: 3rem;
}

@media screen and (min-width: 2000px) {
  .app__footer-headtext {
    font-size: 51px;
    line-height: 61.6px;
  }
}

@media screen and (max-width: 1150px) {
  .app__footer-links {
    align-items: center;
    flex-direction: column;
    padding: 0;
  }

  .app__footer-links_contact,
  .app__footer-links_logo,
  .app__footer-links_work {
    margin: 2rem 0;
    width: 100%;
  }
}

@media screen and (max-width: 650px) {
  .app__footer {
    padding: 0 0 2rem 0;
  }
}

@media screen and (max-width: 350px) {
  .app__footer-links_logo img:first-child {
    width: 80%;
  }
}
</style>
