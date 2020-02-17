<template>
  <div class="history">
    <h2>Немного истории</h2>
    <div class="border"></div>
    <ul>
      <li class="history-container hidden hidden-left" v-infocus="'showElement'">
        <h3>2001 г.</h3>
        <p>«Автомойка на Партизанской» на рынке обслуживания автомобилей существует c 2001 года. За это время была сформирована рабочая база, на основе которой шло дальнейшее развитие компании.</p>
      </li>
      <li class="history-container hidden hidden-left" v-infocus="'showElement'">
        <h3>2004 г.</h3>
        <p>В 2004 году, для удобства наших клиентов, была создана зона для отдыха. Теперь пока мы работаем с вашим автомобилем или мотоциклом, вы можете насладиться чашечкой кофе в нашей комнате ожидания.</p>
      </li>
      <li class="history-container hidden hidden-left" v-infocus="'showElement'">
        <h3>2007 г.</h3>
        <p>В связи с большим наплывом клиентов в 2007 году, было решено открыть 3 дополнительных бокса и построить на территории автомойки замечательную летнюю веранду для посетителей.</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.hidden {
  opacity: 0;
}

.hidden-left {
  transform: translate(-50px, 0);
}

.showElement {
  opacity: 1;
  transform: translate(0, 0);
  -webkit-transition: all 0.5s ease-out;
  -moz-transition: all 0.5s ease-out;
  transition: all 0.5s ease-out;
}

.history {
  margin: 0;
  background-image: url(../assets/Bugatti-Chiron_010.png),
    url(../assets/Rectangle.png);
  background-repeat: no-repeat, no-repeat;
  background-size: 25%, 20%;
  background-position: center right, center right;
}

.history h2 {
  margin: 0;
  padding: 40px;
  text-align: center;
  font-family: Roboto, Ubuntu, Helvetica, sans-serif, Arial;
  font-style: normal;
  font-weight: 300;
  font-size: 40px;
  line-height: 56px;
  letter-spacing: 0.02em;
  color: #353535;
}

.history .border {
  border: 0.25px solid #000000;
}

.history ul {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-flow: column wrap;
  flex-flow: column wrap;
  margin: 50px 100px;
}

.history-container {
  list-style: none;
}

.history h3 {
  position: relative;
  font-family: Ubuntu, Helvetica, sans-serif, Arial;
  font-style: normal;
  padding-left: 60px;
  font-weight: 200;
  font-size: 30px;
  line-height: 10px;
  color: #000000;

  &::before {
    content: '';
    position: absolute;
    background: url(../assets/Line2.png) no-repeat;
    right: calc(100% - 40px);
    top: calc(50% - 3px);
    width: 40px;
    height: 6px;
  }
}

.history p {
  width: 70%;
  font-family: Ubuntu, Helvetica, sans-serif, Arial;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 39px;
  color: #666666;
}

@media screen and (max-width: 415px) {
  .history ul {
    margin: 50px 70px 50px 20px;
  }

  .history p {
    width: 90%;
    font-size: 14px;
    line-height: 30px;
  }
}

@media screen and (max-width: 320px) {
  .history ul {
    margin: 30px 70px 30px 10px;
  }

  .history p {
    width: 100%;
    font-size: 12px;
    line-height: 25px;
  }
}
</style>

