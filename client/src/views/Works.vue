<template>
    <div>
        <Header />
        <Examples />
        <Footer />
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Examples from '@/components/Examples.vue'
import Footer from '@/components/Footer.vue'

export default {
    components: {
        Header, Examples, Footer
    }
}
</script>
