<template>
    <header class="container">
        <nav class="d-flex justify-content-between align-items-center">
            <img src="/images/dc-logo.png" alt="DC Logo">
            <ul class="d-flex align-items-center list-unstyled m-0 h-100">
                <li class="me-3 h-100 d-flex align-items-center" v-for="(link, index) in navbar" :class="{'active':link.status}" :key="index" @click="link.status = !link.status">
                    <a :href="link.url" class="nav-link fw-bold text-uppercase">{{ link.text }}</a>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
import{navLinks} from '../data/data';
    export default {
        name: 'HeaderComponent',
        data(){
            return{
                navbar: navLinks
            }
        },
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/colors.scss' as *;
.active{
    border-bottom: 3px solid $blue-secondary;
    color: $blue-secondary;
}
ul{
    color: $bg-contacts;
}
</style>