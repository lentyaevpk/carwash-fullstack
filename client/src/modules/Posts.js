import axios from 'axios'

const state = {
    posts: []
}

const getters = {
    posts: state => {
        return state.posts.map(post => ({
            ...post,
            createdAt: new Date(post.createdAt)
        }))
    }
}

const actions = {
    async getPosts({commit}) {
        let res = await axios.get('http://localhost:5000/api/posts')
        const posts = res.data
        commit('get_posts', posts)
    },

    async insertPost(ctx, post) {
        await axios.post('http://localhost:5000/api/posts', post)
        ctx.dispatch('getPosts')
    }
}

const mutations = {
    get_posts(state, posts) {
        state.posts = posts
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}