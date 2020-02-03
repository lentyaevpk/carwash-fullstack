<template>
  <div class="description">
    <h2>Наш автомоечный комплекс - это</h2>
    <div class="border"></div>
    <transition appear name="appear">
      <div class="description-container" v-show="show" ref="description">
        <div v-for="description in descriptions" :key="description.id" class="description-container-type">
          <img :src="setImage(description)" />
          <h4>{{description.title}}</h4>
          <p>{{description.text}}</p>
        </div>
      </div>
    </transition>  
    <router-link to="/prices" class="details">Узнать подробнее</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      descriptions: [
        { 
          title: 'АВТОМОЙКА',
          text: 'Мы предоставляем весь стандартный комплекс услуг, необходимых для достижения чистоты автомобилей любого класса.',
          image: '001-car.png'
        },
        { title: 'ДЕТЕЙЛИНГ',
          text: 'Современный, профессиональный детейлинг включает в себя восстановление ЛКП,нанесение защитных покрытий ,антигравийная пленка,полировка и т.п.',
          image: '003-tools-and-utensils.png'
        },
        { title: 'ШИНОМОНТАЖ',
          text: 'Шиномонтаж выполняется квалифицированными специалистами на оборудовании,которое предотвращает повреждения диска автомобиля.',
          image: '006-racing-flag.png'
        },
      ]
    }
  },
  mounted() {
    window.addEventListener('scroll', this.showContent());
  },
  methods: {
    setImage(block) {
      return `/static/img/${block.image}`
    },
    showContent() {
      let elemCoordinats = document.documentElement.getElementsByClassName('description-container')[0].getBoundingClientRect();
      let top = elemCoordinats.top;
      let bottom = elemCoordinats.bottom;
      // let height = elemCoordinats.height;
      if((top >= 0) && (bottom <= window.innerHeight)) {
        this.show = true;
      }
    }
  }
};
</script>

<style>
.appear-enter-active {
  transition: all 1s ease;
}
.appear-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.appear-enter, .appear-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}

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
  display: flex;
  flex-flow: row wrap;
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
  box-sizing: border-box;
  font-family: Ubuntu, Helvetica, sans-serif, Arial;
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
    width: 50%;
  }
}

@media screen and (max-width: 320px) {
  .details {
    font-size: 12px;
    width: 40%;
  }
}
</style>
