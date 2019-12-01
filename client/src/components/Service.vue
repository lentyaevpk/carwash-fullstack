<template>
  <div class="service">
    <h2>Услуги автомойки</h2>
    <div class="border"></div>
    <div class="service-types">
      <div class="type-container">
        <img src="@/assets/Intersect.png" />
        <div>Мойка кузова</div>
      </div>
      <div class="type-container">
        <img src="@/assets/Intersect2.png" />
        <div>Доп. услуги</div>
      </div>
      <div class="type-container">
        <img src="@/assets/Intersect3.png" />
        <div>Защ. покрытие</div>
      </div>
      <div class="type-container">
        <img src="@/assets/Intersect4.png" />
        <div>Шиномонтаж</div>
      </div>
      <div class="type-container">
        <img src="@/assets/Intersect5.png" />
        <div>Химчистка</div>
      </div>
      <div class="type-container">
        <img src="@/assets/Intersect6.png" />
        <div>Полировка</div>
      </div>
      <div class="type-container">
        <img src="@/assets/Intersect7.png" />
        <div>Химчистка ковров</div>
      </div>
      <div class="type-container">
        <img src="@/assets/Intersect8.png" />
        <div>Антигр. пленка</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.service {
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

.service h2 {
  padding: 20px;
  color: white;
}

.service .border {
  border: 0.25px solid white;
}

.service-types {
  margin: 20px 100px;
  padding: 20px;
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

.type-container {
  margin: 30px;
}

.type-container div {
  text-align: center;
  font-family: Ubuntu, Helvetica, sans-serif, Arial;
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 34px;
  letter-spacing: 0.02em;
  text-transform: capitalize;
  color: #d8d8d8;
}

@media screen and (max-width: 1200px) {
  .service-types {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
}
</style>
