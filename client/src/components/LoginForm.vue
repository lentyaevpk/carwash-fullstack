<template>
    <form class="login__form" @submit.prevent="loginUser">
        <div class="form__group">
            <input
                id="log_username"
                autocomplete="off"
                type="text"
                placeholder=" "
                name="log_username"
                class="form__input"
                v-model="username"
            />
            <label class="form__label">Логин</label>
        </div>
        <div class="form__group">
            <input
                id="log_password"
                autocomplete="off"
                type="password"
                placeholder=" "
                name="log_password"
                class="form__input"
                v-model="password"
            /> 
            <label class="form__label">Пароль</label>
        </div>
        <button type="submit" class="login__button button">Войти</button>
    </form>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'LoginForm',
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        loginUser() {
        let user = {
            username: this.username,
            password: this.password
        };
        this.login(user)
            .then(res => {
                if (res.data.success) {
                    this.$router.push('/');
                }
            }).catch(err => {
                console.log(err)
            })
        },
        ...mapActions(['login'])
    }
}
</script>

<style lang="scss">
.login__button {
    border: 2px solid #0057FF;
    margin: 20px auto;
    transition: 0.3s;
    color: #fff;
    background: transparent;

    &:hover {
      background-color: #0057FF;
    }

    @include component-size(tablet) {
      margin: 40px auto;
    }
}
</style>