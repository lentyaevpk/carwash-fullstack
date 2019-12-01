<template>
  <div class="container">
    <div class="container-login">
      <ul class="container-login-description">
        <li>Только зарегестрированные пользователи могут зарабатывать и тратить баллы.</li>
        <li>На Ваш аккаунт сразу же начисляются 100 баллов, которыми Вы можете рассплачиваться за наши услуги.</li>
        <li>Будучи зарегестрированным - вы можете оставить свой отзыв, пожелание или предложение.</li>
      </ul>
      <div class="container-login-forms">
        <div>
          <span @click="pressTitle(2)">Регистрация</span>
          <span>/</span>
          <span @click="pressTitle(1)" class="pressed">Вход</span>
        </div>
        <form class="login-form">
          <input type="text" placeholder="Логин (номер машины)" />
          <input type="text" placeholder="Пароль" />
          <button>Войти</button>
        </form>
        <form class="registration-form">
          <input type="text" placeholder="Логин (номер машины)" />
          <input type="text" placeholder="Пароль" />
          <button>Регистрация</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    // Метод для смены форм регистрации и входа
    pressTitle(form) {
      let spans = document.querySelectorAll("span");
      spans.forEach(a => {
        a.className = "";
      });
      event.currentTarget.classList.add("pressed");
      let forms = document.querySelectorAll("form");
      forms.forEach(a => {
        a.style.display = "none";
      });
      if (form === 1) {
        forms[0].style.display = "flex";
      } else if (form === 2) {
        forms[1].style.display = "flex";
      }
    }
  }
};
</script>

<style scoped>
.container {
  background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(#001d55),
      to(rgba(255, 255, 255, 0))
    ),
    #0075ff;
  background: -o-linear-gradient(top, #001d55 0%, rgba(255, 255, 255, 0) 100%),
    #0075ff;
  background: linear-gradient(180deg, #001d55 0%, rgba(255, 255, 255, 0) 100%),
    #0075ff;
  margin: 0;
  padding: 50px;
  padding-top: 70px;
}

.container-login {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-flow: row nowrap;
  flex-flow: row nowrap;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 50px;
  width: 70%;
  margin: 50px auto;
  padding: 30px;
}

.container-login-description {
  width: 50%;
  margin: 40px;
  font-family: Ubuntu, Helvetica, sans-serif, Arial;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 34px;
  color: #e5e5e5;
  list-style-image: url(../assets/right-arrow.png);
}

.container-login-description li {
  margin: 30px 0;
}

.container-login-forms {
  margin: 40px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-flow: column;
  flex-flow: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.container-login-forms div {
  margin: 20px auto;
}

.container-login-forms span {
  font-family: Ubuntu, Helvetica, sans-serif, Arial;
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 41px;
  color: #e5e5e5;
  cursor: pointer;
}

.container-login-forms .pressed {
  color: #1063fe;
}

.registration-form {
  margin: 40px;
  display: none;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-flow: column;
  flex-flow: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.login-form {
  margin: 40px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-flow: column;
  flex-flow: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.registration-form input,
.login-form input {
  padding: 10px;
  margin: 30px 0;
  height: 60px;
  width: 100%;
  background: transparent;
  border: 1px solid #1063fe;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  font-family: Ubuntu, Helvetica, sans-serif, Arial;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  letter-spacing: 0.05em;
  text-indent: 5px;
  color: #9c9c9c;
}

.registration-form button,
.login-form button {
  padding: 10px 40px;
  background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(rgba(13, 52, 255, 0.52)),
      to(rgba(255, 255, 255, 0))
    ),
    #00b2ff;
  background: -o-linear-gradient(
      top,
      rgba(13, 52, 255, 0.52) 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    #00b2ff;
  background: linear-gradient(
      180deg,
      rgba(13, 52, 255, 0.52) 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    #00b2ff;
  display: block;
  width: 100%;
  margin: 30px auto;
  border: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  font-family: Ubuntu, Helvetica, sans-serif, Arial;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: 0.05em;
  text-indent: 5px;
  color: #f6f6f6;
  cursor: pointer;
}

@media screen and (max-width: 900px) {
  .container-login {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-flow: column;
    flex-flow: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }

  .container-login-description {
    width: 80%;
  }
}

@media screen and (max-width: 670px) {
  .container-login-description {
    width: 80%;
    margin: 10px 30px;
    font-size: 16px;
    line-height: 30px;
  }

  .container-login-forms {
    margin: 10px 30px;
  }

  .registration-form {
    margin: 10px 0px;
  }

  .login-form {
    margin: 10px 0px;
  }

  .registration-form input,
  .login-form input {
    margin: 20px 0;
  }
}

@media screen and (max-width: 530px) {
  .container-login {
    width: 90%;
    margin: 40px auto;
    padding: 20px;
  }

  .container-login-description {
    width: 80%;
    font-size: 14px;
    line-height: 26px;
  }

  .container-login-forms div {
    margin: 10px auto;
  }

  .container-login-forms span {
    font-size: 20px;
    line-height: 41px;
  }

  .registration-form input,
  .login-form input {
    height: 45px;
    margin: 20px 0;
    font-size: 14px;
  }

  .registration-form button,
  .login-form button {
    margin: 20px auto;
    font-size: 14px;
  }
}

@media screen and (max-width: 360px) {
  .container-login-description {
    width: 80%;
    font-size: 12px;
    line-height: 22px;
  }

  .container-login-forms span {
    font-size: 14px;
  }

  .registration-form input,
  .login-form input {
    height: 45px;
    margin: 20px 0;
    font-size: 14px;
  }

  .registration-form button,
  .login-form button {
    padding: 10px 10px;
    margin: 20px auto;
    font-size: 14px;
  }
}
</style>
