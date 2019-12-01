<template>
  <div class="carousel">
    <img src="@/assets/img1.jpg" class="center" @click="carousel(0)" />
    <img src="@/assets/img2.jpg" class="left" @click="carousel(1)" />
    <img src="@/assets/img3.jpg" class="notshown" @click="carousel(2)" />
    <img src="@/assets/img4.jpg" class="right" @click="carousel(3)" />
  </div>
</template>

<script>
export default {
  methods: {
    // Метод, реализующий карусель изображений
    carousel(index) {
      let images = document.querySelectorAll(".carousel img");
      images.forEach(a => {
        a.className = "notshown";
      });
      images[index].className = "center";
      if (index + 1 > images.length - 1) {
        images[0].className = "left";
        images[index - 1].className = "right";
      } else if (index - 1 < 0) {
        images[images.length - 1].className = "right";
        images[index + 1].className = "left";
      } else {
        images[index + 1].className = "left";
        images[index - 1].className = "right";
      }
    }
  }
};
</script>

<style scoped>
.carousel {
  margin: 20px auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  height: 400px;
}

.notshown {
  position: absolute;
  top: 13%;
  right: 30%;
  width: 30%;
  height: 200px;
  opacity: 0;
  z-index: -1;
  -webkit-transition: 0.5s;
  -o-transition: 0.5s;
  transition: 0.5s;
}

.center {
  position: absolute;
  display: block;
  top: 4%;
  right: 30%;
  width: 40%;
  height: 300px;
  -webkit-transition: 1s;
  -o-transition: 1s;
  transition: 1s;
  z-index: 1;
}

.right {
  position: absolute;
  display: block;
  right: 9%;
  top: 13%;
  width: 30%;
  height: 200px;
  opacity: 0.85;
  -webkit-transition: 1s;
  -o-transition: 1s;
  transition: 1s;
}

.left {
  position: absolute;
  display: block;
  width: 30%;
  height: 200px;
  top: 13%;
  right: 61%;
  opacity: 0.85;
  -webkit-transition: 1s;
  -o-transition: 1s;
  transition: 1s;
}

@media screen and (max-width: 450px) {
  .carousel {
    height: 300px;
  }

  .center {
    height: 230px;
  }

  .right {
    height: 180px;
  }

  .left {
    height: 180px;
  }
}

@media screen and (max-width: 360px) {
  .carousel {
    height: 260px;
  }
}
</style>
