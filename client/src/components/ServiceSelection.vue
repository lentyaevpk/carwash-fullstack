<template>
  <div class="services">
    <h1>Выберите интерисующую услугу</h1>
    <div class="services-container">
      <div
        v-for="(service, index) in services"
        :key="index"
        class="services-container-type"
      >
        <div>
          <h2>{{service.title}}</h2>
          <p>{{service.price}}</p>
        </div>
        <img class="services-image" :src="require(`@/assets/prices/${service.image}`)" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      services: [
        {title: 'автомойка', price: 'от 250 до 1000 рублей', image: '1.svg'},
        {title: 'доп. услуги', price: 'от 250 до 1000 рублей', image: '2.svg'},
        {title: 'шиномонтаж', price: 'от 250 до 1000 рублей', image: '3.svg'},
        {title: 'химчистка', price: 'от 250 до 1000 рублей', image: '4.svg'},
        {title: 'полировка', price: 'от 250 до 1000 рублей', image: '5.svg'},
        {title: 'анитгр. пленка', price: 'от 250 до 1000 рублей', image: '6.svg'},
      ]
    }
  }
};
</script>

<style scoped lang="scss">
.services {
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

h1 {
  margin: 0;
  padding: 30px;
  text-align: center;
  font-family: Roboto, Ubuntu, Helvetica, sans-serif, Arial;
  font-style: normal;
  font-weight: 300;
  font-size: 40px;
  line-height: 47px;
  letter-spacing: 0.02em;
  color: #e5e5e5;
  text-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
}

.services-container {
  padding: 30px;
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

  &-type {
    min-width: 386px;
    margin: 20px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-flow: row nowrap;
    flex-flow: row nowrap;
    width: 30%;
    background: rgba(0, 0, 0, 0.7);
    -webkit-box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);

    & h2 {
      font-family: Ubuntu, Helvetica, sans-serif, Arial;
      font-style: normal;
      font-weight: 300;
      font-size: 20px;
      line-height: 32px;
      letter-spacing: 0.02em;
      text-transform: uppercase;
      color: #e5e5e5;
    }

    & p {
      font-family: Ubuntu, Helvetica, sans-serif, Arial;
      font-style: normal;
      font-weight: 300;
      font-size: 20px;
      line-height: 36px;
      color: #9c9c9c;
    }

    & div {
      margin: 10px;
    }

    & a {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      font-family: Ubuntu, Helvetica, sans-serif, Arial;
      font-style: normal;
      font-weight: 300;
      font-size: 20px;
      line-height: 30px;
      letter-spacing: 0.02em;
      text-transform: capitalize;
      color: #009ce1;
      cursor: pointer;
    }
  }
}

.services-image {
  width: 50%;
  height: 100%;
}

@media screen and (max-width: 1200px) {
  .services-container {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
}

@media screen and (max-width: 450px) {
  .services-container-type h2 {
    font-size: 20px;
    line-height: 28px;
  }

  .services-container-type p {
    font-size: 18px;
    line-height: 36px;
  }
}

@media screen and (max-width: 400px) {
  .services-container-type {
    min-width: 310px;
    margin: 10px;
  }

  .services-container-type h2 {
    font-size: 16px;
    line-height: 24px;
  }

  .services-container-type p {
    font-size: 16px;
    line-height: 30px;
  }

  .services-container-type a {
    font-size: 16px;
  }
}
</style>
