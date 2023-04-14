<template>
    <main>
        <JumboComponent/>
        <div class="container py-5 fw-bold fs-3 position-relative">
            <span class="mylabel position-absolute px-4 py-1 text-uppercase">Current series</span>
            <div class="row mt-5">
                <CardComponent :thumb="item.thumb" :series="item.series" :price="item.price" v-for="item in seriesData"/>
            </div>
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
    background-color: $blue-secondary;
    top: -20px;
    font-size: 1.5rem;
}
</style>