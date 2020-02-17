<template>
  <div class="bonus">
    <h2>Бонусная программа</h2>
    <div class="border"></div>
    <p
      class="bonus-description hidden hidden-right"
      v-infocus="'showElement'"
    >Дорогие друзья, мы с Вами уже 15 лет! И поэтому рады сообщить Вам, что совсем скоро состоится запуск новой Бонусной программы. Теперь за каждую услугу, которой Вы воспользуетесь у нас, Вам будут начисляться бонусные баллы (1балл=1рубль)! А именно - 10% от суммы ЛЮБОЙ услуги на нашей автомойке. Что для этого нужно сделать? Все очень просто!</p>
    <div class="bonus-step">
      <h4 class="bonus-step-title">шаг 1</h4>
      <h4 class="bonus-step-title">шаг 2</h4>
      <h4 class="bonus-step-title">шаг 3</h4>
    </div>
    <div class="bonus-images">
      <img src="@/assets/Ellipse3.png" />
      <img class="lines" src="@/assets/Line3.png" />
      <img src="@/assets/Ellipse4.png" />
      <img class="lines" src="@/assets/Line3.1.png" />
      <img src="@/assets/Ellipse5.png" />
    </div>
    <div class="bonus-parag">
      <p>Зарегистрируйтесь на нашем сайте avtopart.ru</p>
      <p>При посещении оповещайте менеджера, что вы участвуете в нашей бонусной программе</p>
      <p>Копите баллы и после 5-ого посещения используйте их</p>
    </div>
    <router-link to="/login" class="registration-btn">Зарегистрироваться</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.hidden {
  opacity: 0;

  &-right {
    transform: translate(50px, 0);
  }
}

.showElement {
  opacity: 1;
  transform: translate(0, 0);
  -webkit-transition: all 0.5s ease-out;
  -moz-transition: all 0.5s ease-out;
  transition: all 0.5s ease-out;
}

.bonus {
  padding: 20px;
  margin: 0;
  background: #000c1d;
}

.bonus h2 {
  margin: 0;
  padding: 40px;
  text-align: center;
  font-family: Roboto, Ubuntu, Helvetica, sans-serif, Arial;
  font-style: normal;
  font-weight: 300;
  font-size: 40px;
  line-height: 47px;
  letter-spacing: 0.02em;
  color: #d8d8d8;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.bonus .border {
  border: 0.25px solid #f8f8f8;
}

.bonus-description {
  width: 60%;
  margin: 30px auto;
  font-family: Ubuntu, Helvetica, sans-serif, Arial;
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  color: #d8d8d8;
}

.bonus-step {
  margin: auto;
  width: 60%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.bonus-step-title {
  text-align: center;
  font-family: Ubuntu, Helvetica, sans-serif, Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 34px;
  color: #d8d8d8;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-transform: uppercase;
}

.bonus-images {
  margin: auto;
  width: 60%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.lines {
  margin: 0 -10px;
  display: block;
  width: 41%;
  height: 10px;
}

.bonus-parag {
  margin: auto;
  width: 75%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.bonus-parag p {
  margin: auto;
  padding: 30px;
  text-align: center;
  font-family: Ubuntu, Helvetica, sans-serif, Arial;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 30px;
  color: #d8d8d8;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

button {
  padding: 10px 40px;
  background-color: transparent;
  text-decoration: none;
  text-align: center;
  display: block;
  margin: 30px auto;
  border: 2px solid #1063fe;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: Ubuntu, Helvetica, sans-serif, Arial;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 32px;
  color: #d8d8d8;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
}

.registration-btn {
  text-decoration: none;
  padding: 10px 20px;
  text-align: center;
  display: block;
  margin: 30px auto;
  width: 20%;
  border: 2px solid #1063fe;
  -webkit-box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: Ubuntu, Helvetica, sans-serif, Arial;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 32px;
  color: #d8d8d8;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
}

@media screen and (max-width: 770px) {
  .bonus-description {
    width: 80%;
    margin: 20px auto;
    font-size: 16px;
  }

  .bonus-step {
    width: 70%;
  }

  .bonus-parag {
    width: 85%;
  }

  .bonus-parag p {
    padding: 20px;
    font-size: 14px;
    line-height: 20px;
  }

  .registration-btn {
    padding: 5px 20px;
    font-size: 16px;
    line-height: 20px;
  }
}

@media screen and (max-width: 425px) {
  .bonus-step {
    width: 85%;
  }

  .bonus-parag {
    width: 100%;
  }

  .bonus-parag p {
    padding: 5px;
    font-size: 12px;
    line-height: 20px;
  }

  .registration-btn {
    width: 50%;
  }
}

@media screen and (max-width: 375px) {
  .bonus-step {
    width: 90%;
  }

  .bonus-parag {
    width: 100%;
  }

  .bonus-parag p {
    margin: 0;
    padding: 5px;
    font-size: 10px;
    line-height: 20px;
  }
}

@media screen and (max-width: 320px) {
  .bonus-description {
    width: 90%;
    margin: 20px auto;
    font-size: 12px;
  }

  .bonus-parag p {
    font-size: 8px;
  }
}
</style>
