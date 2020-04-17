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
                required
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
                required
            />
            <label class="form__label">Ваше имя</label>
        </div>
        <div class="form__group">
            <input
                id="reg_email"
                autocomplete="off"
                type="email"
                placeholder=" "
                name="reg_email"
                class="form__input"
                pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}"
                v-model="email"
                required
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
                pattern="(?=.*\d)(?=.*[a-z]).{6,}"
                v-model="password"
                required
            />
            <label class="form__label">Пароль</label>
            <div class="form__hint">Пароль должен содержать минимум 6 символов и состоять из букв и цифр</div>
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
                required
            />
            <label class="form__label">Подтвердите пароль</label>
            <div v-if="!equalPasswords" class="form__requirements">Пароли не совпадают</div>
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
    computed: {
        equalPasswords() {
            return this.confirmPassword === this.password
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
            if (this.equalPasswords) {
                this.register(user).then(res => {
                    if (res.data.success) {
                        this.login(user).then(() => {
                            this.$router.push('/profile')
                        })
                    }
                })
            }
        },
        ...mapActions(['register', 'login'])
    }
}
</script>

<style lang="scss">
.form {
    &__input {
        &:invalid:not(:focus):not(:placeholder-shown) {
            background: red;
            & + label {
                opacity: 0;
            }
        }

        &:invalid:focus:not(:placeholder-shown) {
            & ~ .form__hint {
                max-height: 200px;
            }
        }
    }

    &__hint {
        max-height: 0;
        max-width: 250px;
        transition: 0.28s;
        overflow: hidden;
        color: red;
        font-style: italic;
    }

    &__requirements {
        max-width: 250px;
        transition: 0.28s;
        overflow: hidden;
        color: red;
        font-style: italic;
    }
}
</style>