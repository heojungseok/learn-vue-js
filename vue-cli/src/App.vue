<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- component 명명법 종류
    <component-temp></component-temp> // kebab-case
    <ComponentTemp></ComponentTemp> // PascalCase  == <ComponentTemp/>
     -->
    <HelloWorld msg="Welcome to Your Vue.js App"/> 
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue' // 컴포넌트 내용을 들고 와서 사용하는 부분

export default {
  // 인스턴스 옵션 속성 또는 컴포넌트 옵션 속성을 넣어주는 곳
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
