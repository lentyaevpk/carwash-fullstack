<template>
    <div>
        <AboutUs />
        <History />
        <Bonus />
    </div>
</template>

<script>
import AboutUs from '@/components/AboutUs.vue'
import History from '@/components/History.vue'
import Bonus from '@/components/Bonus.vue'

export default {
  props: ['links'],
  components: {
    AboutUs, History, Bonus
  }
}
</script>

