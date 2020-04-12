<template>
  <div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { title: "Главная", way: "/" },
        { title: "О нас", way: "/about" },
        { title: "Цены", way: "/prices" },
        { title: "Отзывы", way: "/feedback" },
        { title: "Работы", way: "/works" },
        { title: "Войти", way: "/login" }
      ],
      isShown: false
    };
  },
  methods: {
    // watchResize() {
    //   let menu = document.querySelector(".header-menu");
    //   if (document.documentElement.clientWidth > 600) {
    //     menu.style.left = "0%";
    //   } else {
    //     menu.style.left = "-50%";
    //   }
    // },

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
  // mounted() {
  //   window.addEventListener("resize", this.watchResize);
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
  background-color: white;
  z-index: 2;
}

.header-menu-nav {
  text-decoration: none;
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
  height: 70px;
  font-family: Ubuntu, Helvetica, sans-serif, Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;
  color: #353535;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  cursor: pointer;
}

.router-link-exact-active {
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
  font-family: Ubuntu, Helvetica, sans-serif, Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
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
  color: #858585;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
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
    background: white;
    left: -50%;
  }

  .header-menu-contacts {
    -webkit-box-ordinal-group: 2;
    -ms-flex-order: 1;
    order: 1;
    width: 100%;
    color: #353535;
  }

  .header-menu-nav {
    width: 100%;
    color: #353535;
  }

  .menu-button {
    display: block;
    position: fixed;
    padding: 5px;
    background: white;
    cursor: pointer;
    z-index: 3;
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
