<template>
  <div class="address">
    <h2 class="title address__title">Мы находимся по адресу:</h2>
    <h4 class="address__subtitle subtitle">г.Мичуринск, ул. Братьев Сорокиных 3</h4>
    <div id="map"></div>
  </div>
</template>

<script>
import ymaps from 'ymaps'

export default {
  name: 'Address',
  mounted() {
    ymaps.load().then(maps => {
      const map = new maps.Map(document.getElementById('map'), {
        center: [50.086546, 45.378699],
        zoom: 18
      })
      const marker = new maps.Placemark([50.086546, 45.378699], {
        hintContent: 'ул. Братьев Сорокиных 3',
        balloonContent: 'Автомойка на партизанской'
      });
      map.geoObjects.add(marker)
    })
  }
};
</script>
 
<style lang="scss">
.address {
  padding: 35px 0;

  &__title {
    margin-bottom: 10px;

    &:before {
      content: none;
    }
  }

  &__subtitle {
    margin-bottom: 10px;
  }
}

#map {
  width: 100%;
  height: 500px;

  @include component-size(ml) {
    height: 300px;
  }
}
</style>
