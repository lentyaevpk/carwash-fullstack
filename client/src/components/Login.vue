<template>
  <div class="login-wrapper">
    <div class="login">
      <ul class="login__description">
        <li class="login__text">Только зарегестрированные пользователи могут зарабатывать и тратить баллы.</li>
        <li class="login__text">На Ваш аккаунт сразу же начисляются 100 баллов, которыми Вы можете рассплачиваться за наши услуги.</li>
        <li class="login__text">Будучи зарегестрированным - вы можете оставить свой отзыв, пожелание или предложение.</li>
      </ul>
      <div class="login__forms">
        <div class="login__titles">
          <span @click="isLoginForm = false" :class="[{'login__titles--active': !isLoginForm}]">Регистрация</span>
          <span>/</span>
          <span @click="isLoginForm = true" :class="[{'login__titles--active': isLoginForm}]">Вход</span>
        </div>
        <LoginForm v-if="isLoginForm"/>
        <RegistrationForm v-else />
      </div>
    </div>
  </div>
</template>

<script>
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';

export default {
  name: 'Login',
  components: {
    // LoginForm, RegistrationForm
    RegistrationForm,
    LoginForm
  },
  data() {
    return {
      isLoginForm: true
    }
  },
  created() {
  },
  computed: {
  },
  methods: {
  }
};
</script>

<style lang="scss">
.login-wrapper {
  background: linear-gradient(180deg, #001d55 0%, rgba(255, 255, 255, 0) 100%),
    #0075ff;
  margin: 0;
  padding: 50px;
  padding-top: 70px;
}

.login {
  display: flex;
  justify-content: space-between;
  flex-flow: row nowrap;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 50px;
  width: 70%;
  margin: 50px auto;
  padding: 30px;

  &__description {
    list-style: none;
    padding: 0;
    width: 50%;
  }

  &__text {
    position: relative;
    color: #E5E5E5;

    @include component-size(tl) {
      font-size: 20px;
      line-height: 28px;
      padding: 20px;
      padding-left: 40px;
    }

    &:before {
      content: '';
      position: absolute;
      top: 25px;
      left: 0;
      width: 41px;
      height: 41px;
      background: url(~@images/login/1.png);
    }
  }

  &__forms {
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    align-items: center;
    margin: 30px auto;
  }

  &__titles {
    font-size: 24px;
    padding: 20px;
    cursor: pointer;
    color: #E5E5E5;

    &--active {
      color: #1063FE;
    }
  }
}
</style>
