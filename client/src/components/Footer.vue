<template>
  <div class="footer">
    <div class="footer-container">
      <div class="footer-container-parts">
        <h3>меню</h3>
        <router-link to="/">Главная</router-link>
        <router-link to="/about">О нас</router-link>
        <router-link to="/prices">Цены</router-link>
        <router-link to="/feedback">Отзывы</router-link>
        <router-link to="/works">Работы</router-link>
      </div>
      <div class="footer-container-parts">
        <h3>контакты</h3>
        <p>9-217-217</p>
        <p>8(914)7896754</p>
        <p>apart@mail.ru</p>
      </div>
      <div class="footer-container-parts">
        <h3>адрес</h3>
        <p>г.Мичуринск</p>
        <p>Бр.Сорокиных 3</p>
        <p>за рынком</p>
        <img src="@/assets/Arrow.png" />
      </div>
      <img class="map" src="@/assets/map.png" />
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
.footer {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  background: url(../assets/footer.png);
  background-size: cover;
}

.footer-container {
  margin: 40px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-flow: row wrap;
  flex-flow: row wrap;
  background: rgba(17, 17, 17, 0.4);
}

.footer-container-parts {
  margin: 30px;
}

.footer-container h3 {
  margin: 0;
  padding: 10px;
  font-family: Yu Gothic UI, Ubuntu, Helvetica, sans-serif, Arial;
  font-size: 20px;
  line-height: 40px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #00b2ff;
}

.footer-container a {
  padding: 1px 6px;
  display: block;
  background-color: transparent;
  text-decoration: none;
  border: 0;
  font-family: Yu Gothic UI, Ubuntu, Helvetica, sans-serif, Arial;
  font-size: 16px;
  line-height: 32px;
  text-transform: capitalize;
  color: #f6f6f6;
  cursor: pointer;
}

.footer-container p {
  font-family: Yu Gothic UI, Ubuntu, Helvetica, sans-serif, Arial;
  font-size: 16px;
  line-height: 32px;
  color: #f6f6f6;
  margin-top: 0;
}

.map {
  -ms-flex-item-align: center;
  -ms-grid-row-align: center;
  align-self: center;
  width: 35%;
  height: 80%;
}

@media screen and (max-width: 1200px) {
  .footer-container {
    -ms-flex-pack: distribute;
    justify-content: space-around;
  }

  .footer-container-parts {
    margin: 10px;
  }

  .map {
    -ms-flex-item-align: center;
    -ms-grid-row-align: center;
    align-self: center;
    width: 80%;
    height: 50%;
  }
}

@media screen and (max-width: 530px) {
  .footer-container {
    margin: 25px;
  }

  .footer-container h3 {
    font-size: 18px;
    line-height: 30px;
  }

  .footer-container a {
    font-size: 14px;
    line-height: 26px;
  }

  .footer-container p {
    font-size: 14px;
    line-height: 26px;
  }

  .map {
    width: 80%;
    height: 50%;
  }
}

@media screen and (max-width: 450px) {
  .footer-container-parts {
    margin: 0px;
  }
  .footer-container h3 {
    font-size: 16px;
    line-height: 25px;
  }

  .footer-container a {
    font-size: 14px;
    line-height: 26px;
  }

  .footer-container p {
    font-size: 14px;
    line-height: 26px;
  }

  .map {
    width: 90%;
    height: 40%;
  }
}

@media screen and (max-width: 360px) {
  .footer-container h3 {
    font-size: 14px;
    line-height: 20px;
  }

  .footer-container a {
    font-size: 12px;
    line-height: 22px;
  }

  .footer-container p {
    font-size: 12px;
    line-height: 22px;
  }
  .map {
    height: 20%;
  }
}
</style>
