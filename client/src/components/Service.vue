<template>
  <div class="service">
    <h2>Услуги автомойки</h2>
    <div class="border"></div>
    <div class="service-types">
      <div v-for="service in services" :key="service.id" class="type-container">
        <img :src="setImage(service)" class="service-icon"/>
        <div>{{service.text}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      services: [
        {
          text: 'Мойка кузова',
          image: 'Intersect.png'
        },
        {
          text: 'Доп. услуги',
          image: 'Intersect2.png'
        },
        {
          text: 'Защ. покрытие',
          image: 'Intersect3.png'
        },
        {
          text: 'Шиномонтаж',
          image: 'Intersect4.png'
        },
        {
          text: 'Химчистка',
          image: 'Intersect5.png'
        },
        {
          text: 'Полировка',
          image: 'Intersect6.png'
        },
        {
          text: 'Химчистка ковров',
          image: 'Intersect7.png'
        },
        {
          text: 'Антигр. пленка',
          image: 'Intersect8.png'
        }
      ]
    }
  },
  methods: {
    setImage(block) {
      return `/static/img/${block.image}`
    }
  }
};
</script>

<style scoped>
.service {
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
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
}

.type-container {
  display: flex;
  flex-flow: column nowrap;
  flex-basis: 25%;
  margin: 30px 0;
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

.service-icon {
  margin: auto;
}

@media screen and (max-width: 1200px) {
  .service-types {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
}
</style>
