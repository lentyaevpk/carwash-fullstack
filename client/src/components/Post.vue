<template>
    <li class="post">
        <h2 class="post__title">
            {{ post.name }}
            <span>{{ `${post.createdAt.getDate()}/${post.createdAt.getMonth()}/${post.createdAt.getFullYear()}` }}</span>
        </h2>
        <p class="post__text">{{ post.text }}</p>
        <div class="post__likes">
            <img
                :src="require(`@images/comments/${ isLikedByUser ? 'like_active' : 'like' }.png`)"
                alt="like"
                @click="likePost()"
            >
            <span class="post__like-counter">{{likes.length}}</span>
            <img
                :src="require(`@images/comments/${ isDislikedByUser ? 'like_active' : 'like' }.png`)"
                alt="dislike"
                style="transform: rotate(180deg)"
                @click="dislikePost()"
            >
            <span class="post__like-counter">{{dislikes.length}}</span>
        </div>
    </li>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'

export default {
    name: 'Post',
    props: {
        post: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            likes: [],
            dislikes: []
        }
    },
    created() {
        this.getLikes()
        this.getDislikes()
    },
    computed: {
        ...mapGetters(['user', 'isLoggedIn']),
        postData() { 
            return {
                postId: this.post._id,
                userId: this.user._id
            }
        },
        isLikedByUser() {
            return this.likes.some(like => like.userId === this.user._id)
        },
        isDislikedByUser() {
            return this.dislikes.some(dislike => dislike.userId === this.user._id)
        }
    },
    methods: {
        getLikes() {
            axios.post('http://localhost:5000/api/like/getLikes', this.postData)
            .then(res => {
                if (res.data.success) {
                    this.likes = res.data.likes
                } else {
                    console.log('failed to get likes')
                }
            })
        },
        getDislikes() {
            axios.post('http://localhost:5000/api/like/getDislikes', this.postData)
            .then(res => {
                if (res.data.success) {
                    this.dislikes = res.data.dislikes
                } else {
                    console.log('failed to get dislikes')
                }
            })
        },
        likePost() {
            if (this.isLoggedIn) {
                axios.post(`http://localhost:5000/api/like/${ this.isLikedByUser ? 'un' : 'up' }Like`, this.postData)
                .then(res => {
                    if (res.data.success) {
                        this.getLikes()
                        if (this.isDislikedByUser) {
                            this.getDislikes()
                        }
                    } else {
                        console.log('failed')
                    }
                })
            }
        },
        dislikePost() {
            if (this.isLoggedIn) {
                axios.post(`http://localhost:5000/api/like/${ this.isDislikedByUser ? 'un' : 'up' }Dislike`, this.postData)
                .then(res => {
                    if (res.data.success) {
                        this.getDislikes()
                        if (this.isLikedByUser) {
                            this.getLikes()
                        }
                    } else {
                        console.log('failed')
                    }
                })
            }
        }
    }
}
</script>

<style lang="scss">
</style>