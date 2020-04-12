<template>
  <div class="description">
    <h2 class="decription__title title">Наш автомоечный комплекс - это</h2>
    <div class="description__body">
      <figure
        v-for="block in descriptions"
        :key="block.id"
        class="descr-item hidden hidden-left"
        v-infocus="'showElement'"
      >
        <img :src="require(`@images/description/${block.image}`)" class="descr-item__image"/>
        <h4 class="descr-item__title">{{block.title}}</h4>
        <figcaption class="descr-item__text">{{block.text}}</figcaption>
      </figure>
    </div>  
    <router-link to="/prices" class="description__button button" tag="div">Узнать подробнее</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      descriptions: [
        { 
          title: 'АВТОМОЙКА',
          text: 'Мы предоставляем весь стандартный комплекс услуг, необходимых для достижения чистоты автомобилей любого класса.',
          image: '1.svg'
        },
        { title: 'ДЕТЕЙЛИНГ',
          text: 'Современный, профессиональный детейлинг включает в себя восстановление ЛКП,нанесение защитных покрытий ,антигравийная пленка,полировка и т.п.',
          image: '2.svg'
        },
        { title: 'ШИНОМОНТАЖ',
          text: 'Шиномонтаж выполняется квалифицированными специалистами на оборудовании,которое предотвращает повреждения диска автомобиля.',
          image: '3.svg'
        },
      ]
    }
  }
};
</script>

<style lang="scss">
.description {
  padding: 35px 50px;

  &__body {
    display: flex;
    flex-flow: column;

    @include component-size(tl) {
      flex-flow: row;
      justify-content: space-between;
    } 
  }

  &__button {
    border: 2px solid #0057FF;
    margin: 20px auto;
    transition: 0.3s;

    &:hover {
      background-color: #0057FF;
      color: #fff;
    }

    @include component-size(tablet) {
      margin: 40px auto;
    }
  }
}

.descr-item {
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  background: #F8F8F8;
  padding: 20px;
  width: 100%;
  margin: 15px auto;

  @include component-size(desktop) {
    padding: 30px 50px;
    width: 350px;
  }

  @include component-size(tl) {
    width: 30%;
    margin: 0;
  }

  &__title {
    text-transform: uppercase;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    padding: 10px;

    @include component-size(tablet) {
      padding: 20px;
      font-size: 30px;
      line-height: 35px;
    }
  }

  &__text {
    text-align: center;
    color: #666666;
    font-size: 16px;
    line-height: 20px;

    @include component-size(tablet) {
      font-size: 20px;
      line-height: 24px;
    }
  }
}
</style>
