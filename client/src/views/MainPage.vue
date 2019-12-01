<template>
  <div>
    <TitleMenu />
    <Description />
    <Service />
    <Adress />
    <MainFooter />
  </div>
</template>

<script>
import TitleMenu from '@/components/TitleMenu.vue'
import Description from '@/components/Description.vue'
import Service from '@/components/Service.vue'
import Adress from '@/components/Adress.vue'
import MainFooter from '@/components/MainFooter.vue'


export default {
  components: {
    TitleMenu, Description, Service, Adress, MainFooter
  }
}

</script>

<style>
body {
  margin: 0;
}
</style>
