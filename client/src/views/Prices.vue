<template>
    <div>
        <Header />
        <ServiceSelection />
        <PriceTable />
        <Footer />
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import ServiceSelection from '@/components/ServiceSelection.vue'
import PriceTable from '@/components/PriceTable.vue'
import Footer from '@/components/Footer.vue'

export default {
    components: {
    Header, ServiceSelection, PriceTable, Footer
  }
}
</script>
