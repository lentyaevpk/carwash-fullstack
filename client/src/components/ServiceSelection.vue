<template>
  <div class="services">
    <h2 class="services__title title">Выберите интерисующую услугу</h2>
    <div class="services__body">
      <div
        v-for="(service, index) in services"
        :key="index"
        class="services-item hidden hidden-right"
        v-infocus="'showElement'"
      >
        <div class="services-item__body">
          <h2 class="services-item__title">{{service.title}}</h2>
          <p class="services-item__text">{{service.price}}</p>
        </div>
        <img class="services-item__image" alt="Узнать подробнее" :src="require(`@images/prices/${service.image}`)" />
        <p class="services-item__descr">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae qui cum dolorum aliquid animi beatae possimus inventore cumque</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      services: [
        {title: 'автомойка', price: 'от 250 до 1000 рублей', image: '1.svg'},
        {title: 'доп. услуги', price: 'от 250 до 1000 рублей', image: '2.svg'},
        {title: 'шиномонтаж', price: 'от 250 до 1000 рублей', image: '3.svg'},
        {title: 'химчистка', price: 'от 250 до 1000 рублей', image: '4.svg'},
        {title: 'полировка', price: 'от 250 до 1000 рублей', image: '5.svg'},
        {title: 'анитгр. пленка', price: 'от 250 до 1000 рублей', image: '6.svg'},
      ]
    }
  }
};
</script>

<style lang="scss">
.services {
  padding: 30px;
  background: linear-gradient(180deg, #001D55 0%, rgba(255, 255, 255, 0) 100%), #0075FF;

  @include component-size(tl) {
    padding: 100px 50px;
  }

  &__title {
    color: #fff;

    &::before {
      background-color: #fff;
    }
  }

  &__body {
    display: flex;
    flex-flow: column;
    align-items: center;

    @include component-size(tl) {
      flex-flow: row wrap;
      justify-content: space-between;
    }
  }
}

.services-item {
  position: relative;
  background: rgba(0, 0, 0, 0.7);
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: space-between;
  width: 70%;
  margin-bottom: 25px;
  overflow: hidden;

  @include component-size(tl) {
    width: 400px;
    margin-bottom: 40px;
  }

  @include component-size(desktop) {
    width: 450px;
  }

  @include component-size(bigdesktop) {
    width: 600px;
  }

  @include component-size(mp) {
    width: 100%;
  }

  &:hover .services-item__descr{
    transform: translate(0,0);
  }

  &__title {
    text-transform: uppercase;
    color: #fff;
    font-weight: normal;
    font-size: 20px;
    line-height: 28px;
    padding: 10px;

    @include component-size(tablet) {
      font-size: 24px;
      line-height: 35px;
    }

    @include component-size(bigdesktop) {
      font-size: 30px;
      line-height: 35px;
      padding: 30px;
    }
  }

  &__text {
    color: #9C9C9C;
    padding: 10px;

    @include component-size(tablet) {
      padding: 10px;
      font-size: 20px;
      line-height: 24px;
    }

    @include component-size(bigdesktop) {
      font-size: 26px;
      padding: 30px;
    }
  }

  &__image {
    height: 100%;
    width: 40%;
  }

  &__descr {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.9);
    color: #fff;
    padding: 20px;
    transform: translate(-100%, 0);
    transition: 0.4s;

    @include component-size(tablet) {
      font-size: 20px;
      line-height: 24px;
    }

    @include component-size(bigdesktop) {
      font-size: 26px;
      padding: 30px;
      line-height: 36px;
    }
  }
}
</style>
