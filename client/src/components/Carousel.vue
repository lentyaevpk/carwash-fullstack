<template>
  <div
    v-if="show"
    class="carousel" 
    @touchstart="handleTouchstart"
    @touchmove="handleTouchmove"
    @touchend="handleTouchend(centerIndex)"
    @touchcancel="handleTouchend"
  >
    <img
      v-for="(item, index) in carousel"
      :key="index"
      :src="require(`@images/examples/${item.image}`)"
      alt="Изображение машины"
      @click="setImage(index)"
      :class="['carousel__item', 'carousel__item--hidden',
        {'carousel__item--left': leftIndex === index,
        'carousel__item--right': rightIndex === index,
        'carousel__item--center': centerIndex === index
      }]"
    >
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  props: {
    show: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      carousel: [
        {image: '1.jpg'},
        {image: '2.jpg'},
        {image: '3.jpg'},
        {image: '4.jpg'}
      ],
      leftIndex: 1,
      rightIndex: 3,
      centerIndex: 0
    }
  },
  methods: {
    // Метод, реализующий карусель изображений
    setImage(index) {
      this.centerIndex = index;
      if (index + 1 > this.carousel.length - 1) {
        this.leftIndex = 0;
        this. rightIndex = index - 1;
      } else if (index - 1 < 0) {
        this.rightIndex = this.carousel.length - 1;
        this.leftIndex = index + 1;
      } else {
        this.rightIndex = index - 1;
        this.leftIndex = index + 1;
      }
    },
    handleTouchstart(e) {
      const touch = e.touches[0];
      this.startX = touch.clientX;
      this.startY = touch.clientY;
    },
    handleTouchmove(e) {
      const minX = 30; // threshold
      const touch = e.touches[0];
      this.endX = touch.clientX;
      this.endY = touch.clientY;
      if (Math.abs(this.endX) > minX) {
          e.preventDefault();
          e.returnValue = false;
          return false;
      }
    },
    handleTouchend(index) {
      if (!(this.endX && this.endY)) return;
      const minX = 30;
      const maxX = 30;
      const minY = 50;
      const maxY = 60;
      if (
          // Horizontal move
          (Math.abs(this.endX - this.startX) > minX) && (Math.abs(this.endY - this.startY) < maxY)
      ) {
          this.direction = (this.endX > this.startX) ? 'right' : 'left';
      } else if (
          // Vertical move
          (Math.abs(this.endY - this.startY) > minY) && (Math.abs(this.endX - this.startX) < maxX)
      ) {
          this.direction = (this.endY > this.startY) ? 'down' : 'up';
      }
      if (this.direction === 'left') {
          this.goToNext(index);
      } else if (this.direction === 'right') {
          this.goToPrev(index);
      }
      this.startX = 0;
      this.endX = 0;
      this.startY = 0;
      this.endY = 0;
      this.direction = null;
    },
    goToNext(index) {
      this.leftIndex = index;
      this.centerIndex = this.leftIndex ? this.leftIndex - 1 : this.carousel.length - 1;
      this.rightIndex = this.centerIndex ? this.centerIndex - 1 : this.carousel.length - 1;
    },
    goToPrev(index) {
      this.centerIndex = this.leftIndex;
      this.rightIndex = index;
      this.leftIndex = this.centerIndex === this.carousel.length - 1 ? 0 : this.centerIndex + 1;
    }
  }
};
</script>

<style lang="scss">
.carousel {
  position: relative;
  margin: 20px auto;
  display: flex;
  height: 400px;

  @include component-size(bigdesktop) {
    height: 700px;
  }
  
  &__item {
    position: absolute;
    display: block;

    &--hidden {
      top: 13%;
      right: 30%;
      width: 30%;
      height: 200px;
      opacity: 0;
      z-index: 1;
      transition: 0.5s;

      @include component-size(bigdesktop) {
        height: 500px;
      }
    }

    &--center {
      top: 4%;
      right: 30%;
      width: 40%;
      height: 300px;
      opacity: 1;
      z-index: 2;
      transition: 0.5s;

      @include component-size(bigdesktop) {
        height: 600px;
      }
    }

    &--right {
      right: 9%;
      top: 13%;
      width: 30%;
      height: 200px;
      opacity: 0.85;
      transition: 0.5s;

      @include component-size(bigdesktop) {
        height: 500px;
      }
    }

    &--left {
      width: 30%;
      height: 200px;
      top: 13%;
      right: 61%;
      opacity: 0.85;
      transition: 0.5s;

      @include component-size(bigdesktop) {
        height: 500px;
      }
    }
  }
}
</style>
