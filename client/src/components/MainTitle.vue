<template>
  <div class="header">
    <transition appear name="fade">
      <div class="header__body">
        <h1 class="header__maintitle">Автомойка на Партизанской</h1>
        <h5 class="header__subtitle">верни новый вид своей машине</h5>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'MainTitle',
  data() {
    return {
    }
  }
};
</script>

<style lang="scss">
.fade-enter-active {
  transition: all .3s ease;
}
.fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: translateX(20px);
}

.header {
  &__body {
    width: 100%;
    background: url(~@images/MainTitle/1.png) no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column;
    color: #fff;
    height: 300px;

    @include component-size(tablet) {
      height: 700px;
    }
  }

  &__maintitle {
    font-size: 36px;
    line-height: 50px;
    text-align: center;
    text-transform: uppercase;

    @include component-size(tablet) {
      font-size: 70px;
      line-height: 105px;
    }
  }

  &__subtitle {
    font-size: 16px;
    line-height: 20px;
    font-weight: normal;
    text-align: center;

    @include component-size(tablet) {
      font-size: 24px;
      line-height: 28px;
    }
  }
}
</style>
