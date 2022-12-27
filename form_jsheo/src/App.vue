<template>
  <form @submit.prevent="submitForm">
    <div>
        <label for="username">id: </label>
        <input id=username type="text" v-model="username">
    </div>
    <div>
        <label for="userpw">pw: </label>
        <input id=userpw type="password" v-model="password">
    </div>
    <button type="submit">Login</button>
  </form>
  
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    submitForm() {
      // e.preventDefault(); // 새로고침을 막는 것
      if(this.username === '' || this.password === ''){
       return; 
      }
      //axios 브라우저에서 서버로 데이터를 넘기는 라이브러리
      let url = 'https://jsonplaceholder.typicode.com/users';
      let data = {
        username: this.username,
        password: this.password
      }
      axios.post(url, data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
          console.log(err);
      });
      console.log('submitForm', this.username, this.password);
    }
  }
}
</script>

<style>

</style>