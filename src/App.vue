<template>
    <div id="app">
        <el-menu :default-active="activeMenu"
                 router
                 mode="horizontal"
                 background-color="#545c64"
                 text-color="#fff"
                 active-text-color="#ffd04b">
            <el-menu-item index="home">Главная страница</el-menu-item>
            <el-menu-item index="info">Информация о сборке</el-menu-item>
        </el-menu>
        <router-view />
    </div>
</template>

<script>
    export default {
        name: 'App',

        data: () => ({
            activeMenu: null,
        }),

        computed: {
            routeName() {
                return this.$route.name;
            }
        },

        watch: {
            routeName(val) {
                this.activeMenu = val;
            }
        },

        mounted() {
            this.activeMenu = this.routeName;
        }
    }
</script>

<style src="@styles/style.scss" lang="scss" />
