<template>
  <div class="prices">
    <h1>Автомойка</h1>
    <table class="prices-table">
      <tr>
        <td>Наименование услуги</td>
        <td>Класс A</td>
        <td>Класс B</td>
        <td>Класс C</td>
        <td>Класс D</td>
        <td>Класс E</td>
      </tr>
      <tr>
        <td>Экспресс 1</td>
        <td>100</td>
        <td>100</td>
        <td>100</td>
        <td>100</td>
        <td>100</td>
      </tr>
      <tr>
        <td>Эксперсс 2</td>
        <td>200</td>
        <td>200</td>
        <td>200</td>
        <td>200</td>
        <td>200</td>
      </tr>
      <tr>
        <td>Бесконтактная мойка</td>
        <td>200</td>
        <td>200</td>
        <td>200</td>
        <td>200</td>
        <td>200</td>
      </tr>
      <tr>
        <td>Чистка салона</td>
        <td>100</td>
        <td>100</td>
        <td>100</td>
        <td>100</td>
        <td>100</td>
      </tr>
      <tr>
        <td>Бесконтактная мойка+чистка кузова</td>
        <td>400</td>
        <td>400</td>
        <td>400</td>
        <td>400</td>
        <td>400</td>
      </tr>
      <tr>
        <td>Чистка багажника</td>
        <td>300</td>
        <td>300</td>
        <td>300</td>
        <td>300</td>
        <td>300</td>
      </tr>
      <tr>
        <td>Бесконтактная мойка двигателя</td>
        <td>450</td>
        <td>450</td>
        <td>450</td>
        <td>450</td>
        <td>450</td>
      </tr>
      <tr>
        <td>Бесконтактная мойка днища</td>
        <td>450</td>
        <td>450</td>
        <td>450</td>
        <td>450</td>
        <td>450</td>
      </tr>
      <tr>
        <td>Двухфазная нано-мойка</td>
        <td>500</td>
        <td>500</td>
        <td>500</td>
        <td>500</td>
        <td>500</td>
      </tr>
      <tr>
        <td>Трехфазная нано-мойка</td>
        <td>550</td>
        <td>550</td>
        <td>550</td>
        <td>550</td>
        <td>550</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.prices {
  background: #000c1d;
  padding: 30px;
}

.prices-table {
  margin: auto;
  text-align: center;
  font-family: Ubuntu, Helvetica, sans-serif, Arial;
  font-style: normal;
  font-weight: 300;
  font-size: 22px;
  line-height: 34px;
  letter-spacing: 0.02em;
  text-transform: capitalize;
  color: #e5e5e5;
  border: 3px solid #1063fe;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-collapse: collapse;
}

.prices-table td {
  padding: 10px;
  border: 1px solid #1063fe;
}

@media screen and (max-width: 800px) {
  .prices-table {
    font-size: 18px;
    line-height: 28px;
  }
}

@media screen and (max-width: 1200px) {
  .prices-table td {
    padding: 0;
  }
}

@media screen and (max-width: 450px) {
  .prices-table {
    font-size: 16px;
    line-height: 24px;
  }
}

@media screen and (max-width: 375px) {
  .prices-table {
    font-size: 14px;
  }
}

@media screen and (max-width: 330px) {
  .prices-table {
    font-size: 12px;
    line-height: 20px;
  }
}
</style>
