<template>
  <div class="footer">
    <div class="footer-buttons">
      <router-link to="/">Главная</router-link>
      <router-link to="/about">О нас</router-link>
      <router-link to="/prices">Цены</router-link>
      <router-link to="/feedback">Отзывы</router-link>
      <router-link to="/works">Работы</router-link>
      <router-link to="/login">Войти</router-link>
    </div>
    <div class="footer-tel">
      <p>8(917)9887339</p>
      <p>8(917)9898783</p>
    </div>
    <div class="footer-links">
      <p>apartiz@.yandex.ru</p>
      <div>
        <img src="@/assets/facebook.png" />
        <img src="@/assets/instagram.png" />
        <img src="@/assets/twitter.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: distribute;
  justify-content: space-around;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-flow: row wrap;
  flex-flow: row wrap;
  padding: 30px;
  /*height: 150px;*/
  background: rgba(0, 0, 0, 0.92);
}

.footer-buttons a {
  padding: 1px 6px;
  text-decoration: none;
  margin: 0px 10px;
  background-color: transparent;
  font-family: Yu Gothic UI, Ubuntu, Helvetica, sans-serif, Arial;
  font-size: 20px;
  line-height: 27px;
  letter-spacing: 0.02em;
  color: #ebebeb;
  border: 0;
  cursor: pointer;
}

@media screen and (max-width: 800px) {
  .footer-buttons a {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-flow: column;
    flex-flow: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
}

.footer-tel {
  font-family: Yu Gothic UI, Ubuntu, Helvetica, sans-serif, Arial;
  font-size: 20px;
  line-height: 27px;
  letter-spacing: 0.02em;
  color: #ebebeb;
}

.footer-tel p {
  margin: 0;
  margin-bottom: 5px;
}

.footer-links {
  font-family: Yu Gothic UI, Ubuntu, Helvetica, sans-serif, Arial;
  font-size: 20px;
  line-height: 27px;
  letter-spacing: 0.02em;
  color: #ebebeb;
}

.footer-links div {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.footer-links p {
  margin: 0;
  margin-bottom: 5px;
}

.footer-links img {
  margin-right: 43px;
  cursor: pointer;
}
</style>
