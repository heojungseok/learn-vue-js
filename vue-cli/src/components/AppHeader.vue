<template>
    <!-- HTML 표준 태그와 구분 지을 수 있게 Component 이름은 두 단어 이상을 PascalCase 로 생성 -->
    <header>
        <h1>{{ propsdata }}</h1>
    </header>
</template>

<script>
export default {
    props: ['propsdata']
}
</script>

<style>

</style>