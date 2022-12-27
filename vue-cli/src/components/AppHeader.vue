<template>
    <!-- HTML 표준 태그와 구분 지을 수 있게 Component 이름은 두 단어 이상을 PascalCase 로 생성 -->
    <header>
        <h1>{{ propsdata }}</h1>
        <input @input="target = $event.target.value">
        <button type="button" @click="sendEvt">Click here !</button>
    </header>
</template>

<script>
export default {
    props: ['propsdata'],
    data() {
        return{
            target: ''
        }
    },
    methods: {
        sendEvt() {
            
            this.$emit('renew', this.target);
        }
    }
}
</script>

<style>

</style>