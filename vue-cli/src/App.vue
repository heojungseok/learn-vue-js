<template>
<!-- template root 는 하나의 엘레멘트만 있어야 함 -->
  <div>
    App Start 
    {{ str }}
    <app-header :propsdata="str"
    v-on:renew="renewStr"></app-header>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
export default {
  data() {
    return {
      str : 'hi'
    }
  },
  components: {
    'app-header' : AppHeader
  },
  methods: {
    renewStr(e) {
      console.log('event emit', e);
      // this.str = e;
    }
  }
}
</script>

<style>

</style>