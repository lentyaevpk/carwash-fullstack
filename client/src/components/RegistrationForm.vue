<template>
    <form class="login__form" @submit.prevent="registerUser">
        <div class="form__group">
            <input
                id="reg_username"
                autocomplete="off"
                type="text"
                placeholder=" "
                name="reg_username"
                class="form__input"
                v-model="username"
            />
            <label class="form__label">Логин</label>
        </div>
        <div class="form__group">
            <input
                id="reg_name"
                autocomplete="off"
                type="text"
                placeholder=" "
                name="reg_rname"
                class="form__input"
                v-model="name"
            />
            <label class="form__label">Ваше имя</label>
        </div>
        <div class="form__group">
            <input
                id="reg_email"
                autocomplete="off"
                type="text"
                placeholder=" "
                name="reg_email"
                class="form__input"
                v-model="email"
            />
            <label class="form__label">E-mail</label>
        </div>
        <div class="form__group">
            <input
                id="reg_password"
                autocomplete="off"
                type="password"
                placeholder=" "
                name="reg_password"
                class="form__input"
                v-model="password"
            />
            <label class="form__label">Пароль</label>
        </div>
        <div class="form__group">
            <input
                id="reg_confirm_password"
                autocomplete="off"
                type="password"
                placeholder=" "
                name="reg_confirm_password"
                class="form__input"
                v-model="confirmPassword"
            />
            <label class="form__label">Подтвердите пароль</label>
        </div>
        <button type="submit" class="login__button button">Регистрация</button>
    </form>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'RegistrationForm',
    data() {
        return {
            username: '',
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    },
    methods: {
        registerUser() {
            let user = {
                username: this.username,
                password: this.password,
                confirm_password: this.confirmPassword,
                email: this.email,
                name: this.name
            };
            this.register(user).then(res => {
                if (res.data.success) {
                this.$router.push('/')
                }
            })
        },
        ...mapActions(['register'])
    }
}
</script>

<style lang="scss">
</style>