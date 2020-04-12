<template>
    <div>
        <Header />
        <ServiceSelection />
        <PriceTable />
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import ServiceSelection from '@/components/ServiceSelection.vue'
import PriceTable from '@/components/PriceTable.vue'

export default {
    components: {
        Header, ServiceSelection, PriceTable
    }
}
</script>
