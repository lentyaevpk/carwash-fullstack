<template>
    <div>
        <Header />
        <Comments />
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Comments from '@/components/Comments.vue'

export default {
    components: {
        Header, Comments
    }
}
</script>
