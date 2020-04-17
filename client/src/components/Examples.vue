<template>
  <div class="examples-wrapper">
    <div class="examples">
      <h2 class="examples__title title">Примеры наших работ</h2>
      <nav class="examples__nav">
        <button
          v-for="(btn, index) in navButtons"
          :key="index"
          :class="['examples__btn', {'examples__btn--active': currentImage === index}]"
          @click="setImage(index)"
        >
          {{btn.btnText}}
        </button>
      </nav>
    </div>
    <main class="images">
      <Carousel :show="showCarousel"/>
      <div
        v-for="(block, index) in images"
        :key="index"
        :class="['images__item', {'images__item--active': currentImage === index + 1}]"
      >
        <img :src="require(`@images/examples/${block.image}`)" alt="Изображение машины"/>
      </div>
    </main>
  </div>
</template>

<script>
import Carousel from "./Carousel.vue";

export default {
  components: {
    Carousel
  },
  data() {
    return {
      currentImage: 0,
      navButtons: [
        {btnText: 'Все'},
        {btnText: 'Мойка'},
        {btnText: 'Полировка'},
        {btnText: 'Жид. стекло'},
        {btnText: 'Химчистка'}
      ],
      images: [
        {image: '1.jpg'},
        {image: '2.jpg'},
        {image: '3.jpg'},
        {image: '4.jpg'}
      ]
    }
  },
  computed: {
    showCarousel() {
      return this.currentImage === 0
    }
  },
  methods: {
    setImage(index) {
      this.currentImage = index;
    }
  }
};
</script>

<style lang="scss">
.examples-wrapper {
  padding: 30px;
  min-height: 100vh;

  @include component-size(tl) {
    padding: 100px 50px;
  }

  @include component-size(mp) {
    padding: 10px;
    padding-top: 80px;
  }
}

.examples {
  &__nav {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: auto;

    @include component-size(tl) {
      width: 75%;
    }
  }

  &__btn {
    cursor: pointer;
    padding: 10px;
    border: none;
    border-bottom: 3px solid #EBEBEB;
    background-color: #fff;
    color: rgba(0, 0, 0, 0.6);
    font-size: 12px;

    @include component-size(tablet) {
      padding: 20px;
      font-size: 18px;
    }

    @include component-size(bigdesktop) {
      font-size: 26px;
    }

    &--active {
      background: linear-gradient(180deg, rgba(13, 52, 255, 0.52) 0%, rgba(255, 255, 255, 0) 100%), #00B2FF;
      color: #fff;
      border: none;
    }
  }
}

.images {
  &__item {
    display: none;
    justify-content: center;
    padding: 30px;

    & img {
      width: 50%;
      height: 50%;
    }

    &--active {
      display: flex;
    }
  }
}

.carousel {
  &--active {
    display: block;
  }
}
</style>
