<template lang="pug">
  div#login
    h1
      img(src="w.png")
    v-card
      v-card-text
        label Username
        v-text-field(v-model="username")
        label Password
        v-text-field(v-model="password" type="password")
      v-card-actions
        v-btn(flat color="primary" @click="authToken") AuthToken
        v-spacer
        v-btn(flat color="primary" @click="login") Log in
    nav.nav
      a(href="/") Back to 米奇的妙妙屋
</template>

<script>
import {Login} from '@/server/sendData';
import {setStore} from '@/config/localstorage';

export default {
  data(){
    return{
      username: null,
      password: null,

    }
  },

  methods: {
    /**
     * @description 登陆账号
     * 过滤一下账号密码为不为空
     * 
     */
    login () {
      if (!this.username || !this.password) {
        alert("账号或密码为空！");
        return;
      }

      this.$api.user.login({
        username: this.username,
        password: this.password
      }).then(res => {
        let config = res.data.data;
        console.log(config);
        
        setStore('token', config.token);
        setStore('refresh_token', config.refresh_token);

        //跳转到 /admin
        this.$router.push('/admin');
      })
    },

    async authToken(){
      //测试token
      this.$api.user.auth_token().then(res => {
        alert(res.data.msg);
      })


      // try {
        

      //   let res = await this.$axios.get('/admin/hello');
      //   console.log(res.data);
        
      // } catch (error) {
      //   console.log(error);
        
      // }
    }
  }
}
</script>


<style lang="scss">

body{
  background: #f1f1f1;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
}

#login{
  width: 320px;
  padding: 8% 0 0;
  margin: auto;
  
  h1{
    text-align: center;
  }

  img{

    height: 84px;
    width: auto;
    margin: 0 auto 25px;
  }

  .nav{
    margin: 24px 0 0;

    a {
      color: black;
    }
  }
}

</style>
