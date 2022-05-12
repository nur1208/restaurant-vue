<template>
  <nav class="app__navbar">
    <div class="app__navbar-logo">
      <img :src="images.gericht" alt="app__logo" />
    </div>
    <ul class="app__navbar-links">
      <li class="p__opensans">
        <a href="#home">Home</a>
      </li>
      <li class="p__opensans">
        <a href="#about">About</a>
      </li>
      <li class="p__opensans">
        <a href="#menu">Menu</a>
      </li>
      <li class="p__opensans">
        <a href="#awards">Awards</a>
      </li>
      <li class="p__opensans">
        <a href="#contact">Contact</a>
      </li>
    </ul>
    <div class="app__navbar-login">
      <a href="#login" class="p__opensans">
        Log In / Registration
      </a>
      <div />
      <a href="/" class="p__opensans">
        Book Table
      </a>
    </div>
    <div class="app__navbar-smallscreen">
      <span @click="toggleMenu = !toggleMenu">
        <GiHamburgerMenu
          color="#fff"
          fontSize="{27}"
          @click="toggleMenu = !toggleMenu"
        />
      </span>
      <div
        v-if="toggleMenu"
        class="app__navbar-smallscreen_overlay flex__center slide-bottom"
      >
        <span @click="toggleMenu = !toggleMenu">
          <MdOutlineRestaurantMenu fontSize="{27}" class="overlay__close" />
        </span>
        <ul class="app__navbar-smallscreen_links">
          <li>
            <a href="#home" @click="toggleMenu = !toggleMenu">
              Home
            </a>
          </li>
          <li>
            <a href="#about" @click="toggleMenu = !toggleMenu">
              About
            </a>
          </li>
          <li>
            <a href="#menu" @click="toggleMenu = !toggleMenu">
              Menu
            </a>
          </li>
          <li>
            <a href="#awards" @click="toggleMenu = !toggleMenu">
              Awards
            </a>
          </li>
          <li>
            <a href="#contact" @click="toggleMenu = !toggleMenu">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import { images } from "../constants";
import { GiHamburgerMenu, MdOutlineRestaurantMenu } from "./icons";

export default {
  data: () => ({ toggleMenu: true, images }),
  components: {
    GiHamburgerMenu: GiHamburgerMenu,
    MdOutlineRestaurantMenu: MdOutlineRestaurantMenu
  }
};
</script>
<style>
.app__navbar {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--color-black);

  padding: 1rem 2rem;
}

.app__navbar-logo {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.app__navbar-logo img {
  width: 150px;
}

.app__navbar-links {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  list-style: none;
}

.app__navbar-links li {
  margin: 0 1rem;
  cursor: pointer;
}

.app__navbar-links li:hover {
  color: var(--color-grey);
}

.app__navbar-login {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.app__navbar-login a {
  margin: 0 1rem;
  text-decoration: none;
  transition: 0.5s ease;
}

.app__navbar-login a:hover {
  border-bottom: 1px solid var(--color-golden);
}

.app__navbar-login div {
  width: 1px;
  height: 30px;
  background: var(--color-grey);
}

.app__navbar-smallscreen {
  display: none;
}

.app__navbar-smallscreen_overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: var(--color-black);
  transition: 0.5s ease;

  flex-direction: column;
  z-index: 5;
}

.app__navbar-smallscreen_overlay .overlay__close {
  font-size: 27px;
  color: var(--color-golden);
  cursor: pointer;

  position: absolute;
  top: 20px;
  right: 20px;
}

.app__navbar-smallscreen_links {
  list-style: none;
}

.app__navbar-smallscreen_links li {
  margin: 2rem;
  cursor: pointer;
  color: var(--color-golden);
  font-size: 2rem;
  text-align: center;
  font-family: var(--font-base);
}

.app__navbar-smallscreen_links li:hover {
  color: var(--color-white);
}

@media screen and (min-width: 2000px) {
  .app__navbar-logo img {
    width: 210px;
  }
}

@media screen and (max-width: 1150px) {
  .app__navbar-links {
    display: none;
  }

  .app__navbar-smallscreen {
    display: flex;
  }
}

@media screen and (max-width: 650px) {
  .app__navbar {
    padding: 1rem;
  }

  .app__navbar-login {
    display: none;
  }

  .app__navbar-logo img {
    width: 110px;
  }
}
</style>
