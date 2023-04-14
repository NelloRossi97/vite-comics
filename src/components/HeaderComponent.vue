<template>
    <header class="container">
        <nav class="d-flex justify-content-between align-items-center">
            <img src="/images/dc-logo.png" alt="DC Logo">
            <ul class="d-flex align-items-center list-unstyled m-0 h-100 d-none d-lg-flex">
                <li class="me-3 h-100 d-flex align-items-center" v-for="(link, index) in navbar" :class="index===currentIndex && 'active'" :key="index">
                    <a :href="link.url" class="nav-link fw-bold text-uppercase" @click="activeLink(index)">{{ link.text }}</a>
                </li>
            </ul>
            <div class="dropdown d-lg-none">
                <button class="btn" @click="show = !show"><i class="fa-solid fa-bars fs-3"></i></button>
                <ul class="dropdown-menu" :class="show && 'show'">
                    <li v-for="link in navbar" class="px-3 mb-2">
                        <a :href="link.url" class="nav-link fw-bold text-uppercase">{{ link.text }}</a>
                    </li>
                </ul>
            </div>
            
        </nav>
    </header>
</template>

<script>
import{navLinks} from '../data/data';
    export default {
        name: 'HeaderComponent',
        data(){
            return{
                navbar: navLinks,
                show: false,
                currentIndex: 0
            }
        },
        methods:{
            activeLink(index){
                this.currentIndex = index;
            }
        }
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/colors.scss' as *;
.border-transparent{
    border-bottom: 3px solid transparent;
}
.active{
    border-bottom: 3px solid $blue-secondary;
    color: $blue-secondary;
}
nav{
   ul{
    color: $bg-contacts;
    li:hover{
        border-bottom: 3px solid $blue-secondary;
        color: $blue-secondary;
    }
} 
}
.dropdown{
    ul{
        right:0px;
    }
}

</style>