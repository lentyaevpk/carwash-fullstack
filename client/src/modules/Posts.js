import axios from 'axios'

const state = {
    posts: []
}

const getters = {
    posts: state => state.posts.map(post => ({
        ...post,
        createdAt: new Date(post.createdAt)
    }))
}

const actions = {
    async getPosts({commit}) {
        const res = await axios.get('http://localhost:5000/api/posts/')
        const data = res.data
        const posts = data.map(post => ({
            ...post,
            createdAt: new Date(post.createdAt)
        }))
        commit('get_posts', posts)
        return posts
    },

    async insertPost({dispatch}, post) {
        let res = await axios.post('http://localhost:5000/api/posts/', post)
        if(res.status === 201) {
            dispatch('getPosts', post)
        } 
    },

    async setLike({dispatch}, data) {
        await axios.put('http://localhost:5000/api/posts/like', data)
        console.log('here 4')
        await dispatch('getPosts')
        console.log('here')
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