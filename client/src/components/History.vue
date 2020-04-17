<template>
  <div class="history">
    <h2 class="history__title title">Немного истории</h2>
    <ul class="history__body">
      <li class="history-item hidden hidden-left" v-infocus="'showElement'">
        <h3 class="history-item__title">2001 г.</h3>
        <p class="history-item__text">«Автомойка на Партизанской» на рынке обслуживания автомобилей существует c 2001 года. За это время была сформирована рабочая база, на основе которой шло дальнейшее развитие компании.</p>
      </li>
      <li class="history-item hidden hidden-left" v-infocus="'showElement'">
        <h3 class="history-item__title">2004 г.</h3>
        <p class="history-item__text">В 2004 году, для удобства наших клиентов, была создана зона для отдыха. Теперь пока мы работаем с вашим автомобилем или мотоциклом, вы можете насладиться чашечкой кофе в нашей комнате ожидания.</p>
      </li>
      <li class="history-item hidden hidden-left" v-infocus="'showElement'">
        <h3 class="history-item__title">2007 г.</h3>
        <p class="history-item__text">В связи с большим наплывом клиентов в 2007 году, было решено открыть 3 дополнительных бокса и построить на территории автомойки замечательную летнюю веранду для посетителей.</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'History'
};
</script>

<style lang="scss">
.history {
  padding: 30px;
  padding-right: 0;

  &__body {
    padding: 0;

    @include component-size(desktop) {
      padding: 100px;
    }

    @include component-size(tl) {
      background: url(~@images/history/1.svg) no-repeat;
      background-size: contain;
      background-position: center right;
    }
  }
}

.history-item {
  list-style: none;
  width: 100%;
  margin-bottom: 10px;

  @include component-size(tl) {
    width: 65%;
    margin-bottom: 20px;
  }

  &__title {
    padding-left: 40px;
    position: relative;
    font-size: 24px;

    @include component-size(tablet) {
      font-size: 34px;
    }

    @include component-size(bigdesktop) {
      font-size: 38px;
    }

    &:before {
      content: '';
      position: absolute;
      width: 30px;
      height: 2px;
      background-color: #1063FE;
      top: calc(50%);
      left: calc(0% + 5px);
    }
  }

  &__text {
    font-size: 16px;
    line-height: 18px;
    color: #666666;
    margin-top: 15px;

    @include component-size(tablet) {
      font-size: 20px;
      line-height: 30px;
      margin-top: 25px;
    }

    @include component-size(bigdesktop) {
      font-size: 26px;
      line-height: 36px;
    }
  }
}
</style>

