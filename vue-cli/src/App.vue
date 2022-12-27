<template>
<!-- template root 는 하나의 엘레멘트만 있어야 함 -->
  <div>
    App Start 
    {{ str }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      str : 'hi'
    }
  }
}
</script>

<style>

</style>