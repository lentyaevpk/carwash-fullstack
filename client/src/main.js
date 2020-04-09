import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false

Vue.directive('infocus', {
  isLiteral: true,
    inserted: (el, binding) => {
      let f = () => {
      let rect = el.getBoundingClientRect()
      let inView = (
        rect.width > 0 &&
        rect.height > 0 &&
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
      )
      if (inView) {
        el.classList.add(binding.value)
        window.removeEventListener('scroll', f)
      }
    }
    window.addEventListener('scroll', f)
    f()
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


