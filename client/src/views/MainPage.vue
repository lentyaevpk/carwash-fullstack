<template>
  <div>
    <MainTitle />
    <Description />
    <Service />
    <Address />
  </div>
</template>

<script>
import MainTitle from '@/components/MainTitle.vue'
import Description from '@/components/Description.vue'
import Service from '@/components/Service.vue'
import Address from '@/components/Address.vue'


export default {
  components: {
    MainTitle, Description, Service, Address
  }
}

</script>

<style>
</style>
