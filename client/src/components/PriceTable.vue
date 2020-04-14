<template>
  <div class="prices">
    <h1 class="prices__title title">Автомойка</h1>
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

<style lang="scss">
.prices {
  background: #000c1d;
  padding: 30px;

  &__title {
    color: #fff;

    &::before {
      background-color: #fff;
    }
  }
}

.prices-table {
  margin: auto;
  text-align: center;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.02em;
  text-transform: capitalize;
  color: #e5e5e5;
  border: 3px solid #1063fe;
  border-collapse: collapse;

  @include component-size(tablet) {
    font-size: 18px;
    line-height: 34px;
  }
}

.prices-table td {
  padding: 5px;
  border: 1px solid #1063fe;

  @include component-size(tablet) {
    padding: 10px;
    font-size: 18px;
    line-height: 34px;
  }

  @include component-size(mp) {
    padding: 0;
  }

}
</style>
