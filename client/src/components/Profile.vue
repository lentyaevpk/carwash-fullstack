<template>
  <div class="profile-wrapper">
    <main class="profile">
        <h4 class="profile__title">Добро пожаловать в личный кабинет!</h4>
        <div class="profile__text">Ваш логин: {{user.username}}</div>
        <div class="profile__text">Ваше имя: {{user.name}}</div>
        <div class="profile__text">Ваш email: {{user.email}}</div>
        <button class="profile__button button" @click="logoutUser">
            <span>Выйти</span>
        </button>
    </main>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'Profile',
    computed: {
        ...mapGetters(['user'])
    },
    methods: {
        ...mapActions(['logout']),
        logoutUser() {
            this.logout();
        }
    }
}
</script>

<style lang="scss">
.profile-wrapper {
  background: linear-gradient(180deg, #001d55 0%, rgba(255, 255, 255, 0) 100%),
    #0075ff;
  margin: 0;
  padding: 50px;
  padding-top: 70px;

  @include component-size(tp) {
    min-height: 80vh;
  }

  @include component-size(bigdesktop) {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.profile {
  background: rgba(0, 0, 0, 0.4);
  border-radius: 50px;
  width: 100%;
  margin: 50px auto;
  padding: 40px;

  @include component-size(tablet) {
    width: 70%;
    padding: 80px;
  }

  &__title {
    color: #E5E5E5;
    font-size: 24px;
    margin-bottom: 20px;

    @include component-size(bigdesktop) {
      font-size: 36px;
      line-height: 38px;
      margin-bottom: 40px;
    }
  }

  &__text {
    position: relative;
    color: #E5E5E5;
    margin-bottom: 10px;

    @include component-size(tablet) {
      font-size: 20px;
      line-height: 28px;
      margin-bottom: 20px;
    }

    @include component-size(bigdesktop) {
      font-size: 30px;
      line-height: 38px;
    }
  }

  &__button {
    border: 2px solid #0057FF;
    margin-bottom: 20px;
    transition: 0.3s;
    color: #fff;
    background: transparent;

    &:hover {
      background-color: #0057FF;
    }

    & span {
        position: relative;
        padding-left: 20px;

        &::before {
            content: '';
            position: absolute;
            width: 30px;
            height: 30px;
            background: url(~@images/profile/1.svg) no-repeat;
            left: calc(0% - 15px);
            top: calc(50% - 15px);
        }
    }

    @include component-size(tablet) {
      margin-bottom: 40px;
    }
  }
}
</style>