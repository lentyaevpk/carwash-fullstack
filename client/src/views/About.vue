<template>
    <div>
        <Header />
        <AboutUs />
        <History />
        <Bonus />
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import AboutUs from '@/components/AboutUs.vue'
import History from '@/components/History.vue'
import Bonus from '@/components/Bonus.vue'

export default {
  props: ['links'],
  components: {
    Header, AboutUs, History, Bonus
  }
}
</script>

