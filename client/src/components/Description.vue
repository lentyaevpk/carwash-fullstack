<template>
  <div class="description">
    <h2>Наш автомоечный комплекс - это</h2>
    <div class="border"></div>
    <div class="description-container">
      <div class="description-container-type">
        <img src="@/assets/001-car.png" />
        <h4>АВТОМОЙКА</h4>
        <p>Мы предоставляем весь стандартный комплекс услуг, необходимых для достижения чистоты автомобилей любого класса.</p>
      </div>
      <div class="description-container-type">
        <img src="@/assets/003-tools-and-utensils.png" />
        <h4>ДЕТЕЙЛИНГ</h4>
        <p>Современный, профессиональный детейлинг включает в себя восстановление ЛКП,нанесение защитных покрытий ,антигравийная пленка,полировка и т.п.</p>
      </div>
      <div class="description-container-type">
        <img src="@/assets/006-racing-flag.png" />
        <h4>ШИНОМОНТАЖ</h4>
        <p>Шиномонтаж выполняется квалифицированными специалистами на оборудовании,которое предотвращает повреждения диска автомобиля.</p>
      </div>
    </div>
    <router-link to="/prices" class="details">Узнать подробнее</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style>
h2 {
  text-align: center;
  font-family: Roboto, Ubuntu, Helvetica, sans-serif, Arial;
  font-style: normal;
  font-weight: 300;
  font-size: 40px;
  line-height: 47px;
  color: #353535;
}

h4 {
  text-align: center;
  font-family: Roboto, Ubuntu, Helvetica, sans-serif, Arial;
  font-style: normal;
  font-weight: 300;
  font-size: 28px;
  line-height: 33px;
  color: #353535;
}

.border {
  width: 90px;
  height: 1px;
  border: 0.25px solid #000000;
  margin: auto;
}

.description-container {
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
  padding: 40px 60px;
}

.description-container-type {
  min-width: 250px;
  display: inline-block;
  margin: 50px;
  padding: 10px;
  width: 23%;
  background: #f8f8f8;
}

.description-container-type img {
  display: block;
  margin: auto;
}

.description-container-type h4 {
  margin: 20px;
  text-align: center;
  font-family: Ubuntu, Helvetica, sans-serif, Arial;
  font-style: normal;
  font-weight: 300;
  font-size: 30px;
  line-height: 41px;
  color: #353535;
}

.description-container-type p {
  margin: auto;
  text-align: center;
  font-family: Roboto, Ubuntu, Helvetica, sans-serif, Arial;
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 28px;
  color: #666666;
}

.description a {
  text-decoration: none;
}

.details {
  padding: 10px 40px;
  background-color: white;
  width: 20%;
  display: block;
  margin: auto;
  border: 2px solid #0057ff;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 28px;
  color: #353535;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
}

@media screen and (max-width: 1200px) {
  .description-container {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
}

@media screen and (max-width: 768px) {
  .details {
    padding: 5px 20px;
    font-size: 16px;
    line-height: 20px;
  }
}

@media screen and (max-width: 425px) {
  .details {
    font-size: 14px;
    width: 30%;
  }
}

@media screen and (max-width: 320px) {
  .details {
    font-size: 12px;
    width: 40%;
  }
}
</style>
