<template>
  <div class="bonus">
    <h2 class="bonus__title title">Бонусная программа</h2>
    <p
      class="bonus__descr hidden hidden-right"
      v-infocus="'showElement'"
    >Дорогие друзья, мы с Вами уже 15 лет! И поэтому рады сообщить Вам, что совсем скоро состоится запуск новой Бонусной программы. Теперь за каждую услугу, которой Вы воспользуетесь у нас, Вам будут начисляться бонусные баллы (1балл=1рубль)! А именно - 10% от суммы ЛЮБОЙ услуги на нашей автомойке. Что для этого нужно сделать? Все очень просто!</p>
    <div class="bonus-schema">
      <div class="bonus-schema__steps">
        <h4 class="bonus-schema__title">шаг 1</h4>
        <h4 class="bonus-schema__title">шаг 2</h4>
        <h4 class="bonus-schema__title">шаг 3</h4>
      </div>
      <div class="bonus-schema__image">
        <img src="@images/bonus/1.svg" alt="Изображение этапов бонусной программы">
      </div>
      <div class="bonus-schema__text">
        <p>Зарегистрируйтесь на нашем сайте avtopart.ru</p>
        <p>При посещении оповещайте менеджера, что вы участвуете в нашей бонусной программе</p>
        <p>Копите баллы и после 5-ого посещения используйте их</p>
      </div>
    </div>
    <router-link to="/login" class="bonus__button button" tag="div">Зарегистрироваться</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.bonus {
  padding: 30px;
  background: #000C1D;

  &__title {
    color: #D8D8D8;

    &::before {
      background-color: #D8D8D8;
    }
  }

  &__descr {
    text-align: center;
    color: #D8D8D8; 

    @include component-size(tablet) {
      font-size: 20px;
      line-height: 30px;
      color: #D8D8D8;
    }
  }

  &__button {
    border: 2px solid #0057FF;
    margin: 20px auto;
    transition: 0.3s;
    color: #fff;

    &:hover {
      background-color: #0057FF;
    }

    @include component-size(tablet) {
      margin: 40px auto;
    }
  }
}

.bonus-schema {
  width: 80%;
  margin: 20px auto;

  @include component-size(mp) {
    width: 100%;
  }

  &__steps {
    width: 100%;
    display: flex;
    justify-content: space-between;
    text-align: center;
  }

  &__title {
    width: 32%;
    text-transform: uppercase;
    color: #D8D8D8;

    @include component-size(tablet) {
      font-size: 22px;
    }
  }

  &__image {
    width: 100%;
    margin: 20px auto;
    display: flex;
    justify-content: center;

    & img {
      width: 73%;
    }
  }

  &__text {
    width: 100%;
    color: #D8D8D8;
    display: flex;
    text-align: center;
    justify-content: space-between;
    font-size: 14px;

    @include component-size(tablet) {
      font-size: 20px;
    }

    & p {
      width: 32%;
    }
  }
}
</style>
