<template>
  <div>
    <img class="menu-button" src="@/assets/menu2.png" @click="toggleMenu" />
    <div class="header-menu">
      <a class="header-menu-contacts">
        <img src="@/assets/location.png" />ул.Бр.Сорокиных 3
      </a>
      <router-link to="/" class="header-menu-nav pressed">Главная</router-link>
      <router-link to="/about" class="header-menu-nav">О нас</router-link>
      <router-link to="/prices" class="header-menu-nav">Цены</router-link>
      <router-link to="/feedback" class="header-menu-nav">Отзывы</router-link>
      <router-link to="/works" class="header-menu-nav">Работы</router-link>
      <router-link to="/login" class="header-menu-nav">Войти</router-link>
      <a class="header-menu-contacts">
        <img src="@/assets/time.png" />+7 927 548 1406
      </a>
    </div>
    <div class="shadow"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShown: false
    };
  },
  methods: {
    // Метод для изменения цвета меню на главной странице при прокрутке
    scrollingNav() {
      document.documentElement.scrollTop
        ? document.querySelector(".header-menu").classList.add("white-header")
        : document
            .querySelector(".header-menu")
            .classList.remove("white-header");
      let menuButtons = document.querySelectorAll(".header-menu-nav");
      let menuContacts = document.querySelectorAll(".header-menu-contacts");
      if (document.documentElement.scrollTop) {
        menuButtons.forEach(a => {
          a.classList.add("black-titles");
        });
        menuContacts.forEach(a => {
          a.classList.add("black-titles");
        });
      } else {
        menuButtons.forEach(a => {
          a.classList.remove("black-titles");
        });
        menuContacts.forEach(a => {
          a.classList.remove("black-titles");
        });
      }
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
      let menu = document.querySelector(".header-menu");
      let shadowOverlay = document.querySelector(".shadow");
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
  // updated() {
  // 	this.isShown = false
  // }
};
</script>

<style scoped>
.header-menu {
  width: 100%;
  position: fixed;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-flow: row wrap;
  flex-flow: row wrap;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
  -webkit-transform: 1s;
  -ms-transform: 1s;
  transform: 1s;
}

.header-menu-nav {
  height: 70px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
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

.white-header {
  background: white;
  -webkit-transition: 0.5s;
  -o-transition: 0.5s;
  transition: 0.5s;
}

.header-menu-contacts {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
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

.pressed {
  background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(rgba(13, 52, 255, 0.52)),
      to(rgba(255, 255, 255, 0))
    ),
    #00b2ff;
  background: -o-linear-gradient(
      top,
      rgba(13, 52, 255, 0.52) 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    #00b2ff;
  background: linear-gradient(
      180deg,
      rgba(13, 52, 255, 0.52) 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    #00b2ff;
  color: #ebebeb;
}

.header-menu-contacts img {
  margin: 0px 15px;
}

.header-menu-nav:hover {
  background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(rgba(13, 52, 255, 0.52)),
      to(rgba(255, 255, 255, 0))
    ),
    #00b2ff;
  background: -o-linear-gradient(
      top,
      rgba(13, 52, 255, 0.52) 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    #00b2ff;
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
  .header-menu-contacts {
    font-size: 14px;
  }
}

@media screen and (max-width: 768px) {
  .header-menu-contacts {
    height: 50px;
    font-size: 12px;
  }

  .header-menu-nav {
    height: 50px;
    font-size: 12px;
  }

  .header-menu-contacts img {
    margin: 0;
  }
}

@media screen and (max-width: 600px) {
  .header-menu {
    padding-top: 60px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-flow: column;
    flex-flow: column;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    width: 50%;
    height: 100%;
    background: rgb(29, 27, 27);
    left: -50%;
    z-index: 1;
  }

  .header-menu-contacts {
    -webkit-box-ordinal-group: 2;
    -ms-flex-order: 1;
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
    -webkit-transition: 0.5s ease;
    -o-transition: 0.5s ease;
    transition: 0.5s ease;
    position: fixed;
  }
}

@media screen and (max-width: 500px) {
  .header-menu-contacts {
    margin: 0px;
  }
}
</style>
