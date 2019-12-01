<template>
  <div>
    <div class="examples">
      <h2>Примеры наших работ</h2>
      <div class="border"></div>
      <div class="examples-buttons">
        <button class="pressed" @click="showImage(0)">Все</button>
        <button @click="showImage(1)">Мойка</button>
        <button @click="showImage(2)">Полировка</button>
        <button @click="showImage(3)">Жид. стекло</button>
        <button @click="showImage(4)">Химчистка</button>
      </div>
    </div>
    <div class="images">
      <Carousel />
      <img src="@/assets/img1.jpg" class="hidden" />
      <img src="@/assets/img2.jpg" class="hidden" />
      <img src="@/assets/img3.jpg" class="hidden" />
      <img src="@/assets/img4.jpg" class="hidden" />
    </div>
  </div>
</template>

<script>
import Carousel from "@/components/Carousel.vue";

export default {
  components: {
    Carousel
  },
  methods: {
    // Метод для смены изображения
    showImage(index) {
      let buttons = document.querySelectorAll("button");
      buttons.forEach(a => {
        a.className = "";
      });
      event.currentTarget.className = "pressed";
      let pictures = document.querySelector(".images").children;
      for (let i = 0; i < pictures.length; i++) {
        pictures[i].className = "hidden";
      }
      if (index == 0) {
        pictures[index].className = "carousel show-carousel";
      } else {
        pictures[index].className = "show-image";
      }
    }
  }
};
</script>

<style scoped>
.examples {
  padding-top: 70px;
}

.examples h2 {
  padding: 40px;
  margin: 0;
  text-align: center;
  font-family: Roboto, Ubuntu, Helvetica, sans-serif, Arial;
  font-style: normal;
  font-weight: 300;
  font-size: 40px;
  line-height: 47px;
  letter-spacing: 0.02em;
  color: #353535;
  text-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
}

.border {
  width: 90px;
  height: 1px;
  border: 0.25px solid #353535;
  margin: auto;
}

.examples-buttons {
  width: 70%;
  margin: 30px auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-flow: row wrap;
  flex-flow: row wrap;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.examples-buttons .pressed {
  background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(rgba(13, 52, 255, 0.52)),
      to(rgba(255, 255, 255, 0))
    ),
    #00b2ff;
  background: -o-linear-gradient(
      top,
      rgba(13, 52, 255, 0.52) 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    #00b2ff;
  background: linear-gradient(
      180deg,
      rgba(13, 52, 255, 0.52) 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    #00b2ff;
  color: #ffffff;
  border: 0;
}

.examples-buttons button {
  width: 18%;
  padding: 20px;
  background: transparent;
  font-family: Roboto, Ubuntu, Helvetica, sans-serif, Arial;
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 28px;
  color: rgba(0, 0, 0, 0.6);
  border: 0;
  border-bottom: 3px solid #ebebeb;
  cursor: pointer;
}

.images {
  position: relative;
  margin: 20px auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.images img {
  width: 60%;
  height: 400px;
}

.hidden {
  display: none;
}

.show-carousel {
  margin: 20px auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  height: 400px;
}

.show-image {
  display: block;
}

@media screen and (max-width: 1100px) {
  .examples-buttons {
    width: 80%;
  }

  .examples-buttons button {
    padding: 15px;
    font-size: 18px;
  }
}

@media screen and (max-width: 800px) {
  .examples-buttons {
    width: 85%;
  }

  .examples-buttons button {
    padding: 10px;
    font-size: 16px;
  }
}

@media screen and (max-width: 630px) {
  .examples-buttons {
    width: 90%;
  }

  .examples-buttons button {
    width: 18%;
    padding: 5px;
    font-size: 14px;
    line-height: 20px;
  }

  .images img {
    width: 80%;
    height: 300px;
  }

  .show-carousel {
    height: 300px;
  }
}

@media screen and (max-width: 450px) {
  .examples-buttons button {
    width: 19%;
    font-size: 12px;
    line-height: 16px;
  }

  .images img {
    width: 80%;
    height: 300px;
  }

  .show-carousel {
    height: 300px;
  }
}

@media screen and (max-width: 360px) {
  .examples-buttons {
    width: 95%;
  }

  .examples-buttons button {
    width: 19%;
    font-size: 10px;
    line-height: 14px;
  }
}
</style>
