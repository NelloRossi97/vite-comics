<template>
    <main>
        <JumboComponent/>
        <div class="container py-5 fw-bold fs-3 position-relative d-flex flex-column">
            <span class="mylabel mybg-blue position-absolute px-4 py-1 text-uppercase">Current series</span>
            <div class="row mt-5">
                <CardComponent :thumb="item.thumb" :series="item.series" :price="item.price" v-for="item in seriesData"/>
            </div>
            <button class="text-uppercase px-5 py-1 mybg-blue align-self-center fw-bold">Load More</button>
        </div>
        <CallToActionComponent/>
    </main>
</template>

<script>
import JumboComponent from './JumboComponent.vue';
import CallToActionComponent from './CallToActionComponent.vue';
import { comicsData } from '../data/data';
import CardComponent from './CardComponent.vue';
    export default {
        name: 'MainComponent',
        data(){
            return{
                seriesData: comicsData
            }
        },
        components: {
            CallToActionComponent,
            CardComponent,
            JumboComponent
        }
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/colors.scss' as *;
.mylabel{   
    top: -20px;
    font-size: 1.5rem;
    background-color: $blue-secondary;
}
.mybg-blue{
    
}
button{
    background-color: $blue-secondary;
    font-size: 1.5rem;
    border: none;
    color: white;
    &hover{
        background-color: $blue-hover;
    }
}
</style>