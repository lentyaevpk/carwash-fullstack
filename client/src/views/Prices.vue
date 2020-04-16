<template>
    <div>
        <ServiceSelection />
        <PriceTable />
    </div>
</template>

<script>
import ServiceSelection from '@/components/ServiceSelection.vue'
import PriceTable from '@/components/PriceTable.vue'

export default {
    components: {
        ServiceSelection, PriceTable
    }
}
</script>
