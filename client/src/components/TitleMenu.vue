<template>
  <div class="header">
    <MainHeader />
    <div class="header-titles">
      <div class="header-maintitle">Автомойка на Партизанской</div>
      <div class="header-subtitle">верни новый вид своей машине</div>
    </div>
  </div>
</template>

<script>
import MainHeader from "@/components/MainHeader.vue";
export default {
  components: {
    MainHeader
  }
};
</script>

<style scoped>
.header {
  width: 100%;
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.51) 0%,
      rgba(0, 0, 0, 0) 100%
    ),
    url(../assets/Preview.png);
  background-size: cover;
  background-repeat: no-repeat;
}

.header-titles {
  display: flex;
  flex-flow: column;
  justify-content: center;
}

.header-maintitle {
  text-align: center;
  font-family: Roboto, Ubuntu, Helvetica, sans-serif, Arial;
  font-style: normal;
  font-weight: bold;
  font-size: 65px;
  line-height: 50px;
  text-transform: uppercase;
  color: #f5f5f5;
  text-shadow: 5px -10px 25px rgba(0, 0, 0, 0.25);
}

.header-subtitle {
  margin: 50px;
  text-align: center;
  font-family: Ubuntu, Helvetica, sans-serif, Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: 0.3em;
  text-transform: lowercase;
  color: #f5f5f5;
  text-shadow: 5px -10px 20px rgba(0, 0, 0, 0.25);
}

@media screen and (max-width: 1024px) {
  .header-maintitle {
    font-size: 36px;
  }

  .header {
    height: 600px;
  }

  .header-subtitle {
    font-size: 18px;
    margin: 0px;
  }
}

@media screen and (max-width: 500px) {
  .header-maintitle {
    font-size: 20px;
  }

  .header-subtitle {
    font-size: 14px;
    margin: 0px;
  }
}
</style>
