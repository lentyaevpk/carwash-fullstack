<template>
  <div>
    <img class="menu-button" src="@/assets/menu2.png" @click="toggleMenu" />
    <div :class="['header-menu', {'white': isMenuWhite}]" ref="headerMenu">
      <a :class="['contacts', {'black-titles': isMenuWhite}]">
        <img src="@/assets/location.png" />ул.Бр.Сорокиных 3
      </a>
      <router-link v-for="button in navButtons" :key="button.id" :to="button.to" :class="['header-menu-nav', {'black-titles': isMenuWhite}]">{{button.text}}</router-link>
      <a :class="['contacts', {'black-titles': isMenuWhite}]">
        <img src="@/assets/time.png" />+7 927 548 1406
      </a>
    </div>
    <div class="shadow" ref="shadow"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShown: false,
      navButtons: [
        { to: '/', text: 'Главная' },
        { to: '/about', text: 'О нас' },
        { to: '/prices', text: 'Цены' },
        { to: '/feedback', text: 'Отзывы' },
        { to: '/works', text: 'Работы' },
        { to: '/login', text: 'Войти' },
      ],
      isMenuWhite: false
    };
  },
  methods: {
    // Метод для изменения цвета меню на главной странице при прокрутке
    scrollingNav() {
      this.isMenuWhite = document.documentElement.scrollTop ? true : false
    },
    watchResize() {
      let menu = document.querySelector(".header-menu");
      if (document.documentElement.clientWidth > 600) {
        menu.style.left = "0%";
      } else {
        menu.style.left = "-50%";
      }
    },

    // Выпадающее меню для мобильных версий
    toggleMenu() {
      let menu = this.$refs.headerMenu;
      let shadowOverlay = this.$refs.shadow;
      if (this.isShown) {
        menu.style.left = "-50%";
        shadowOverlay.classList.toggle("overlay");
      } else {
        menu.style.left = "0%";
        shadowOverlay.classList.toggle("overlay");
      }
      this.isShown = !this.isShown;
    }
  },
  mounted() {
    window.addEventListener("scroll", this.scrollingNav);
    window.addEventListener("resize", this.watchResize);
  }
};
</script>

<style scoped>
.header-menu {
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  transition: 0.3s;
  transform: 1s;
  z-index: 2;
}

.header-menu-nav {
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10%;
  text-decoration: none;
  font-family: Ubuntu, Helvetica, sans-serif, Arial;
  font-style: normal;
  font-weight: normal;
  color: #ebebeb;
  font-size: 16px;
  line-height: 23px;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  cursor: pointer;
}

.white {
  background: white;
  transition: 0.5s;
}

.contacts {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  width: 20%;
  font-family: Yu Gothic UI, Ubuntu, Helvetica, sans-serif, Arial;
  font-size: 16px;
  line-height: 27px;
  letter-spacing: 0.02em;
  color: #f1f1f1;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
}

.black-titles {
  color: #353535;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
}

.router-link-exact-active {
  background: linear-gradient(
      180deg,
      rgba(13, 52, 255, 0.52) 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    #00b2ff;
  color: #ebebeb;
}

.contacts img {
  margin: 0px 15px;
}

.header-menu-nav:hover {
  background: linear-gradient(
      180deg,
      rgba(13, 52, 255, 0.52) 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    #00b2ff;
  color: #f8f8f8;
}

.menu-button {
  display: none;
}

@media screen and (max-width: 1024px) {
  .contacts {
    font-size: 14px;
  }
}

@media screen and (max-width: 768px) {
  .contacts {
    height: 50px;
    font-size: 12px;
  }

  .header-menu-nav {
    height: 50px;
    font-size: 12px;
  }

  .contacts img {
    margin: 0;
  }
}

@media screen and (max-width: 600px) {
  .header-menu {
    padding-top: 60px;
    flex-flow: column;
    justify-content: flex-start;
    width: 50%;
    height: 100%;
    background: rgb(29, 27, 27);
    left: -50%;
    z-index: 1;
  }

  .contacts {
    order: 1;
    width: 100%;
    color: white;
  }

  .header-menu-nav {
    width: 100%;
    color: white;
  }

  .menu-button {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    padding: 5px;
    background: rgb(29, 27, 27);
    cursor: pointer;
    z-index: 2;
  }

  .overlay {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.83);
    opacity: 1;
    transition: 0.5s ease;
    position: fixed;
    top: 0;
    left: 0;
  }
}

@media screen and (max-width: 500px) {
  .contacts {
    margin: 0px;
  }
}
</style>
