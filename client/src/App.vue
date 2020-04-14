<template>
  <div id="app">
    <Menu :class="['app__menu', {'app__menu--toggled': isMenuToggled}]"/>
    <ToggleIcon class="app__toggle-icon" @toggleMenu="toggleMenu"/>
    <router-view />
    <MainFooter />
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import Menu from "@/components/Menu.vue";
import ToggleIcon from '@/components/ToggleIcon'
import MainFooter from '@/components/MainFooter'

export default {
  name: 'app',
  components: {
    Menu, ToggleIcon, MainFooter
  },
  data() {
    return {
      isMenuToggled: false
    }
  },
  created() {
    if (this.isLoggedIn) {
      this.getProfile();
    }
  },
  computed: {
    ...mapGetters(['isLoggedIn'])
  },
  methods: {
    toggleMenu() {
      this.isMenuToggled = !this.isMenuToggled;
    },
    ...mapActions(['getProfile'])
  }
}
</script>

<style lang="scss">
#app {
  position: relative;
}

.app__menu {
  position: fixed;
  transform: translate(-100%, 0);
  z-index: 10;

  @include component-size(tl) {
    transform: translate(0, 0);
  }

  &--toggled {
    transform: translate(0, 0);
  }
}

.app__toggle-icon {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;

  @include component-size(tl) {
    display: none;
  }
}

.hidden {
  opacity: 0;
}

.hidden-left {
  transform: translate(-100px, 0);
}

.hidden-right {
  transform: translate(50px, 0);
}

.hidden-top  {
  transform: translate(0, -50px);
}

.showElement {
  opacity: 1;
  transform: translate(0, 0);
  transition: all 0.5s ease-out;
}

.title {
  position: relative;
  font-weight: normal;
  text-align: center;
  font-size: 30px;
  line-height: 28px;
  margin-bottom: 30px;

  @include component-size(tablet) {
    font-size: 40px;
    line-height: 47px;
    margin-bottom: 100px;
  }

  &:before {
    content: '';
    position: absolute;
    left: calc(50% - 45px);
    top: calc(100% + 15px);
    width: 90px;
    height: 1px;
    background: black;
    @include component-size(tablet) {
      top: calc(100% + 50px)
    }
  }
}

.subtitle {
  text-align: center;
  font-size: 20px;
  line-height: 28px;

  @include component-size(tablet) {
    font-size: 26px;
    line-height: 40px;
  }
}

.button {
  cursor: pointer;
  text-decoration: none;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 50px;

  @include component-size(tablet) {
    font-size: 20px;
    line-height: 24px;
    width: 300px;
    height: 60px;
  }
}

.form {
  &__group {
    position: relative;
    margin-bottom: 20px;
  }

  &__label {
    position: absolute;
    top: calc(50% - 9px);
    left: 0;
    color: #9C9C9C;
    transition: 0.3s;
    font-size: 18px;
  }

  &__input {
    width: 100%;
    height: 50px;
    color: #9C9C9C;
    background: transparent;
    border: none;
    border-bottom: 1px solid #9C9C9C;
    outline: none;
    transition: 0.3s;
    font-size: 18px;

    &:focus {
      border-bottom: 1px solid #1063FE;

      & ~ .form__label {
        top: calc(50% - 33px);
        font-size: 12px;
      }
    }

    &:not(:placeholder-shown) {
      & ~ .form__label {
        top: calc(50% - 33px);
        font-size: 12px;
      }
    }
  }
}
</style>
