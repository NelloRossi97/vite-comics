<template>
    <header class="container">
        <nav class="d-flex justify-content-between align-items-center">
            <img src="../assets/images/dc-logo.png" alt="DC Logo">
            <ul class="d-flex list-unstyled">
                <li class="me-3" v-for="(link, index) in navbar" :key="index">
                    <a :href="link.url" class="nav-link fw-bold text-uppercase">{{ link.text }}</a>
                </li>
            </ul>
        </nav>
        
    </header>
</template>

<script>
import{navLinks} from '../data/data'
    export default {
        name: 'HeaderComponent',
        data(){
            return{
                navbar: navLinks
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>