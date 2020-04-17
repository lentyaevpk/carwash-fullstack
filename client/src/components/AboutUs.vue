<template>
  <div class="about">
    <h2 class="about__title title">О нас</h2>
    <div class="about__body">
      <img src="@/assets/images/about_us/1.jpg" alt="Изображение машины" class="about__image hidden hidden-top" v-infocus="'showElement'"/>
      <div class="about__text hidden hidden-top" v-infocus="'showElement'">
        <p>Наш современный автомоечный комплекс на Партизанской - это высокий уровень обслуживания, гарантия качественных работ, связанных с мойкой, химчисткой и полировкой автомобилей любого класса. Нашими отличительными особенностями являются: квалифицированный персонал, качественные моющие и косметические средства ведущих мировых брендов в области ухода за автомобилем, высокотехнологичное оборудование.</p>
        <br/>
        <p>На территории автомойки имеется уютная комната для клиентов, где вы можете выпить чашечку кофе, посмотреть TV и ознакомиться с последними выпусками профессиональных автомобильных журналов, в то время как вашим автомобилем будет заниматься команда специалистов.Мы работаем более 15-ти лет и нас знают многие, как частные, так и корпоративные клиенты.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutUs'
};
</script>

<style lang="scss">
.about {
  color: #fff;
  background: linear-gradient(180deg, #001D55 0%, rgba(255, 255, 255, 0) 100%), #0075FF;
  padding: 30px;

  @include component-size(tl) {
    padding: 100px 50px;
  }

  &__title {
    &::before {
      background-color: #fff;
    }
  }

  &__body {
    display: flex;
    justify-content: center;
    flex-flow: column;

    @include component-size(tablet) {
      flex-flow: row;
    }
  }

  &__image {
    width: 100%;
    margin: 15px auto;

    @include component-size(tablet) {
      width: 40%;
      margin: 0 50px 0 0;
    }
  }

  &__text {
    width: 100%;
    font-size: 16px;
    line-height: 18px;

    @include component-size(tablet) {
      width: 50%;
      font-size: 20px;
      line-height: 24px;
    }

    @include component-size(bigdesktop) {
      font-size: 26px;
      line-height: 36px;
    }
  }
}
</style>
