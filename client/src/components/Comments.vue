<template>
  <div class="feedback">
    <h1>Поделитесь впечатлениями</h1>
    <div class="border"></div>
    <div class="feedback-comments">
      <ul>
        <li v-for="(post, index) in posts" :key="index">
          <h2>
            {{ post.name }}
            <span>{{ `${post.createdAt.getDate()}/${post.createdAt.getMonth()}/${post.createdAt.getFullYear()}` }}</span>
          </h2>
          <p>{{ post.text }}</p>
          <div class="feedback-commets-likeCounter">
            <img src="@/assets/like.png" />4
            <img src="@/assets/dislike.png" />0
          </div>
        </li>
      </ul>  
      <div class="feedback-comments-forms">
        <input type="text" name="name" placeholder="Ваше имя" class="name" v-model="name"/>
        <!-- <input type="text" name="email" placeholder="E-mail" class="email" /> -->
        <input type="text" name="message" placeholder="Сообщение" class="message" v-model="text"/>
      </div>
      <button @click="createPost">Оставить отзыв</button>
    </div>
  </div>
</template>

<script>
import PostService from '../postService'

export default {
  name: 'Posts',
  data() {
    return {
      posts: [],
      error: '',
      text: '',
      name: ''
    }
  },
  async created() {
    try {
      this.posts = await PostService.getPosts();
    } catch(err) {
      this.error = err.message;
    }
  },
  methods: {
    async createPost() {
      await PostService.insertPost(this.text, this.name);
      this.posts = await PostService.getPosts();
      this.text = this.name = '';
    }
  }
};
</script>

<style scoped>
h1 {
  margin: 0;
  padding: 30px;
  text-align: center;
  font-family: Roboto, Ubuntu, Helvetica, sans-serif, Arial;
  font-style: normal;
  font-weight: 300;
  font-size: 40px;
  line-height: 47px;
  letter-spacing: 0.02em;
  color: #e5e5e5;
  text-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
}

.feedback {
  padding: 20px;
  padding-top: 70px;
  background: #000c1d;
}

.border {
  width: 90px;
  border: 0.25px solid #1063fe;
  margin: auto;
}

.feedback-comments ul {
  margin: 0 auto;
  padding: 20px;
  width: 70%;
}

.feedback-comments h2 {
  text-align: left;
  font-family: Ubuntu, Helvetica, sans-serif, Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 33px;
  text-indent: 5px;
  color: #e5e5e5;
}

.feedback-comments span {
  font-family: Ubuntu, Helvetica, sans-serif, Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 33px;
  text-indent: 5px;
  color: #858585;
}

.feedback-comments li {
  padding: 10px;
  list-style: none;
  border-bottom: 1px solid #666666;
}

.feedback-comments p {
  font-family: Ubuntu, Helvetica, sans-serif, Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 33px;
  text-indent: 5px;
  color: #858585;
}

.feedback-commets-likeCounter {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  font-family: Yu Gothic UI, Ubuntu;
  font-size: 20px;
  line-height: 40px;
  letter-spacing: 0.02em;
  color: #c4c4c4;
}

.feedback-commets-likeCounter img {
  margin: 0px 10px;
}

.feedback-comments-forms {
  width: 40%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: distribute;
  justify-content: space-around;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-flow: row wrap;
  flex-flow: row wrap;
  margin: 0 auto;
  padding: 30px;
}

.feedback-comments-forms input {
  padding: 10px;
  margin: 10px;
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

.name,
.email {
  width: 40%;
}

.message {
  width: 90%;
  height: 100px;
}

.feedback-comments button {
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
  margin: 0 auto;
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
  .feedback-comments-forms {
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-flow: column wrap;
    flex-flow: column wrap;
    padding: 15px;
  }

  .feedback-comments-forms {
    width: 90%;
  }

  .name,
  .email,
  .message {
    width: 90%;
  }
}

@media screen and (max-width: 750px) {
  .feedback-comments ul {
    width: 90%;
  }

  .feedback-comments h2 {
    font-size: 16px;
    line-height: 30px;
  }

  .feedback-comments span {
    font-size: 16px;
    line-height: 30px;
  }

  .feedback-comments p {
    font-size: 16px;
    line-height: 30px;
  }
}

@media screen and (max-width: 500px) {
  h1 {
    font-size: 32px;
  }

  .feedback-comments h2 {
    font-size: 14px;
    line-height: 26px;
  }

  .feedback-comments span {
    font-size: 14px;
    line-height: 26px;
  }

  .feedback-comments p {
    font-size: 14px;
    line-height: 26px;
  }
}
</style>
