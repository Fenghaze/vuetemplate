<template>
    <div>
        <router-link to='/new'>跳转new</router-link>

        <router-link to='/main'>跳转main</router-link>
        
        <!-- 子路由link -->
        <router-link to='/sub'>查看子路由</router-link>

        <!-- 子路由展示区域 -->
        <router-view></router-view>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>