<template>
  <div id="app">
    <Menu :class="['app__menu', {'app__menu--toggled': isMenuToggled}]"/>
    <ToggleIcon class="app__toggle-icon" @toggleMenu="toggleMenu"/>
    <router-view />
    <MainFooter />
  </div>
</template>

<script>
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
  updated() {
    // window.scrollTo(0,0);
  },
  methods: {
    toggleMenu() {
      this.isMenuToggled = !this.isMenuToggled;
    }
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
  z-index: 1;

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
  z-index: 1;

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
</style>
