<template>
    <HomeView />
</template>

<script>
import HomeView from '@/views/HomeView.vue'

export default {
    name:'App',
    components:{
        HomeView
    }
}
</script>

<style>
*{
    margin: 0;
    padding: 0;
}

body{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
</style>
