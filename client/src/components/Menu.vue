<template>
  <div :class="['menu', {'menu--white':  isScrolled || !isMainPage}]">
    <div class="menu__info">
      <div :class="['menu__text', 'menu__text--address', {'menu__text--white': isScrolled || !isMainPage}]">
        ул. Бр. Сорокиных 3
      </div>
    </div>
    <router-link
      v-for="link in links"
      :class="['menu__link', {'menu__link--white': isScrolled || !isMainPage}]"
      v-bind:key="link.id"
      :to="link.to"
      exact-active-class="menu__link--active"
    >{{ link.text }}</router-link>
    <router-link
      :class="['menu__link', {'menu__link--white': isScrolled || !isMainPage}]"
      to="/login"
      exact-active-class="menu__link--active"
    >{{ isLoggedIn ? 'Профиль' : 'Войти' }}</router-link>
    <div class="menu__info">
      <div :class="['menu__text', 'menu__text--tel', {'menu__text--white': isScrolled || !isMainPage}]">
        +7 927 548 1406
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

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
        { to: '/works', text: 'Работы' }
      ],
      isScrolled: false
    };
  },
  mounted() {
    window.addEventListener("scroll", this.scrollingNav);
  },
  computed: {
    isMainPage() {
      return this.$route.path === '/'
    },
    ...mapGetters(['isLoggedIn'])
  },
  methods: {
    // Метод для изменения цвета меню на главной странице при прокрутке
    scrollingNav() {
      if (this.isMainPage) {
        this.isScrolled = document.documentElement.scrollTop ? true : false
      }
    }
  }
};
</script>

<style lang="scss">
.menu {
  display: flex;
  transition: 0.3s;
  width: 35%;
  height: 100%;
  flex-flow: column;
  padding-top: 75px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.19) 0%, rgba(255, 255, 255, 0) 100%), #F8F8F8;

  @include component-size(tl) {
    width: 100%;
    height: auto;
    flex-flow: row;
    padding: 0;
    background: transparent;
  }

  @include component-size(mp) {
    width: 60%;
  }

  &--white {
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.19) 0%, rgba(255, 255, 255, 0) 100%), #F8F8F8;
  }

  &__info {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 75px;
    order: 1;

    @include component-size(tl) {
      width: 23%;
      order: 0;
    }
  }

  &__text {
    color: #858585;
    text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);

    @include component-size(tablet) {
      font-size: 14px;
      letter-spacing: 0.02em;
    }

    @include component-size(tl) {
      color: #fff;
    }

    &--address{
      position: relative;
      left: 17px;

      &::before {
        content: '';
        background: url(~@images/menu/1.svg) no-repeat;
        width: 33px;
        height: 50px;
        position: absolute;
        top: calc(50% - 25px);
        left: calc(0% - 38px);
      }
    }

    &--tel{
      position: relative;
      left: 25px;

      &::before {
        content: '';
        background: url(~@images/menu/2.svg) no-repeat;
        width: 50px;
        height: 50px;
        position: absolute;
        top: calc(50% - 25px);
        left: calc(0% - 52px);
      }
    }

    &--white {
      color: #858585;
    }
  }

  &__link {
    color: #353535;
    text-decoration: none;
    text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    height: 75px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.2s;

    &:hover {
      color: #fff;
      background: linear-gradient(180deg, rgba(13, 52, 255, 0.52) 0%, rgba(255, 255, 255, 0) 100%), #00B2FF;
    }
    
    @include component-size(tablet) {
      font-size: 18px;
    }

    @include component-size(tl) {
      width: 9%;
      color: #fff;
    }

    &--white {
      color: #353535;
    }

    &--active {
      color: #fff;
      background: linear-gradient(180deg, rgba(13, 52, 255, 0.52) 0%, rgba(255, 255, 255, 0) 100%), #00B2FF;
    }
  }
}
</style>
