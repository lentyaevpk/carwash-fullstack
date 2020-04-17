<template>
  <div class="address">
    <h2 class="title address__title">Мы находимся по адресу:</h2>
    <h4 class="address__subtitle subtitle">г.Мичуринск, ул. Братьев Сорокиных 3</h4>
  </div>
</template>

<script>
export default {
  name: 'Address'
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

.map {
  width: 100%;
}
</style>
