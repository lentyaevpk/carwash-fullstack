<template>
  <div class="service">
    <h2 class="hidden hidden-right service__title title" v-infocus="'showElement'">Услуги автомойки</h2>
    <div class="service__body">
      <figure
        v-for="item in services"
        :key="item.id" class="service-item hidden hidden-right"
        v-infocus="'showElement'"
      >
        <img :src="require(`@images/service/${item.image}`)" class="service-item__image"/>
        <figcaption class="service-item__text">{{item.text}}</figcaption>
      </figure>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      services: [
        {
          text: 'Мойка кузова',
          image: '1.svg'
        },
        {
          text: 'Доп. услуги',
          image: '2.svg'
        },
        {
          text: 'Защ. покрытие',
          image: '3.svg'
        },
        {
          text: 'Шиномонтаж',
          image: '4.svg'
        },
        {
          text: 'Химчистка',
          image: '5.svg'
        },
        {
          text: 'Полировка',
          image: '6.svg'
        },
        {
          text: 'Химчистка ковров',
          image: '7.svg'
        },
        {
          text: 'Антигр. пленка',
          image: '8.svg'
        }
      ]
    }
  }
};
</script>

<style lang="scss">
.service {
  padding: 35px 50px;
  background: linear-gradient(180deg, #001d55 0%, rgba(255, 255, 255, 0) 100%), #0075ff;

  &__title {
    color: #fff;

    &:before {
      background-color: #fff;
    }
  }

  &__body {
    display: flex;
    flex-flow: column;
    
    @include component-size(tablet) {
      flex-flow: row wrap;
      justify-content: space-between;
    }

    @include component-size(ml) {
      flex-flow: row wrap;
    }
  }

  &-item {
    flex: 1 1 25%;
    display: flex;
    justify-content: center;
    flex-flow: column;
    margin: 20px 0;

    @include component-size(ml) {
      flex: 1 1 50%;
    }

    &__text {
      text-align: center;
      color: #fff;
      font-size: 20px;
      line-height: 24px;
      letter-spacing: 0.02em;
      padding: 20px 0;

      @include component-size(tablet) {
        font-size: 24px;
        line-height: 26px;
      } 
    }
  }
}

</style>
