<template>
  <div class="aboutUs">
    <h2>О нас</h2>
    <div class="border"></div>
    <div class="aboutUs-container">
      <img src="@/assets/zfvnxlil69o.jpg" class="hidden hidden-top" v-infocus="'showElement'"/>
      <div class="aboutUs-container-description hidden hidden-top" v-infocus="'showElement'">
        <p>Наш современный автомоечный комплекс на Партизанской - это высокий уровень обслуживания, гарантия качественных работ, связанных с мойкой, химчисткой и полировкой автомобилей любого класса. Нашими отличительными особенностями являются: квалифицированный персонал, качественные моющие и косметические средства ведущих мировых брендов в области ухода за автомобилем, высокотехнологичное оборудование.</p>
        <p>На территории автомойки имеется уютная комната для клиентов, где вы можете выпить чашечку кофе, посмотреть TV и ознакомиться с последними выпусками профессиональных автомобильных журналов, в то время как вашим автомобилем будет заниматься команда специалистов.Мы работаем более 15-ти лет и нас знают многие, как частные, так и корпоративные клиенты.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.aboutUs {
  padding-top: 70px;
  background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(#001d55),
      to(rgba(255, 255, 255, 0))
    ),
    #0075ff;
  background: -o-linear-gradient(top, #001d55 0%, rgba(255, 255, 255, 0) 100%),
    #0075ff;
  background: linear-gradient(180deg, #001d55 0%, rgba(255, 255, 255, 0) 100%),
    #0075ff;
}

.hidden {
  opacity: 0;
}

.hidden-top  {
  transform: translate(0, -50px);
}

.showElement {
  opacity: 1;
  transform: translate(0, 0);
  -webkit-transition: all 0.5s ease-out;
  -moz-transition: all 0.5s ease-out;
  transition: all 0.5s ease-out;
}

.aboutUs h2 {
  padding: 40px;
  margin: 0;
  text-align: center;
  font-family: Roboto, Ubuntu, Helvetica, sans-serif, Arial;
  font-style: normal;
  font-weight: 300;
  font-size: 40px;
  line-height: 56px;
  letter-spacing: 0.02em;
  color: #e5e5e5;
}

.border {
  width: 90px;
  height: 1px;
  border: 0.25px solid #f8f8f8;
  margin: auto;
}

.aboutUs-container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.aboutUs-container img {
  margin: 40px;
  display: block;
  height: 482px;
  width: 37%;
}

.aboutUs-container-description {
  margin: 30px;
  font-family: Roboto, Ubuntu, Helvetica, sans-serif, Arial;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 39px;
  letter-spacing: 0.02em;
  color: #ebebeb;
}

@media screen and (max-width: 1200px) {
  .aboutUs-container {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-flow: row wrap;
    flex-flow: row wrap;
  }
}

@media screen and (max-width: 770px) {
  .aboutUs-container img {
    width: 60%;
  }
}

@media screen and (max-width: 600px) {
  .aboutUs {
    padding: 0;
  }
}

@media screen and (max-width: 415px) {
  .aboutUs-container-description {
    margin: 20px;
    font-size: 14px;
    line-height: 30px;
  }

  .aboutUs-container img {
    margin: 20px;
    height: 350px;
  }
}

@media screen and (max-width: 320px) {
  .aboutUs-container-description {
    font-size: 12px;
  }
}
</style>
