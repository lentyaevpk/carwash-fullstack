<template>
  <div class="menu">
    <div class="menu__info menu_info--adress">ул. Бр. Сорокиных 3</div>
    <router-link
      v-for="link in links"
      class="menu__link"
      v-bind:key="link.id"
      :to="link.way"
    >{{ link.text }}</router-link>
    <div class="menu__info menu__info--tel">+7 927 548 1406</div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data() {
    return {
      isShown: false,
      links: [
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

<style lang="scss">
.menu {
  &__info {
    &--adress{}
    &--tel{}
  }

  &__link {}
}
</style>
