import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  // template 속성을 정의 했을 때 기본적으로 render 라는 함수가 실행
  render: h => h(App), // render: h => h(App): 위에 import 된 App 이라는 컴포넌트를 랜더링하는 문법
  // components: {
  //   'app' : App
  // } // render: h => h(App)와 동일
}).$mount('#app') // ← el: '#app' 과 동일
