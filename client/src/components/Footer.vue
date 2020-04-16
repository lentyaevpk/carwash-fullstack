<template>
  <footer class="footer">
    <div class="footer__menu">
      <router-link to="/" class="footer__link">Главная</router-link>
      <router-link to="/about" class="footer__link">О нас</router-link>
      <router-link to="/prices" class="footer__link">Цены</router-link>
      <router-link to="/feedback" class="footer__link">Отзывы</router-link>
      <router-link to="/works" class="footer__link">Работы</router-link>
      <router-link to="/login" class="footer__link">Войти</router-link>
    </div>
    <div class="footer__tel">
      <p class="footer__text">8(917)9887339</p>
      <p class="footer__text">8(917)9898783</p>
    </div>
    <div class="footer__contacts">
      <p class="footer__text">apartiz@yandex.ru</p>
      <div class="footer__socials">
        <img src="@images/footer/facebook.png" />
        <img src="@images/footer/instagram.png" />
        <img src="@images/footer/twitter.png" />
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
};
</script>

<style lang="scss">
.footer {
  background: rgba(0, 0, 0, 0.92);
  display: flex;
  padding: 30px 4px;
  flex-flow: row wrap;
  justify-content: space-between; 

  @include component-size(desktop) {
    padding: 40px 125px;
  }

  @include component-size(tablet) {
    padding: 40px 60px;
    flex-flow: row wrap;
  }

  @include component-size(tp) {
    padding: 40px 100px;
  }

  &__link {
    cursor: pointer;
    text-decoration: none;
    color: #fff;
    padding: 5px;
    font-size: 16px;

    @include component-size(tablet) {
      font-size: 20px;
      padding: 0 15px;
    }
  }

  &__text {
    color: #fff;
    padding-bottom: 15px;

    @include component-size(tablet) {
      font-size: 20px;
    }
  }

  &__tel {
    @include component-size(tp) {
      margin-top: 20px;
    }

    @include component-size(mp) {
      margin-top: 10px;
    }
  }

  &__contacts {
    @include component-size(tp) {
      margin-top: 20px;
    }

    @include component-size(mp) {
      margin-top: 10px;
    }
  }

  &__socials {
    display: flex;
    justify-content: space-between;
  }
}
</style>
