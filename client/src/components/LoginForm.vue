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
                required
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
                required
            /> 
            <label class="form__label">Пароль</label>
        </div>
        <p class="login__hint" v-if="showHint">Неверный Логин или Пароль</p>
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
            password: '',
            showHint: false
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
                    this.$router.push('/profile');
                }
            }).catch(() => {
                this.showHint = true;
            })
        },
        ...mapActions(['login'])
    }
}
</script>

<style lang="scss">
.login {
    &__button {
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
    
    &__hint {
        color: red;

        @include component-size(bigdesktop) {
            font-size: 24px;
        }
    }
}
</style>