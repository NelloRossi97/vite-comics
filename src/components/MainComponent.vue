<template>
    <main>
        <div class="container py-5 fw-bold fs-3">
            <div class="row">
                <CardComponent :thumb="item.thumb" :series="item.series" :price="item.price" v-for="item in seriesData"/>
            </div>
        </div>
        <CallToActionComponent/>
    </main>
</template>

<script>
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
            CardComponent
        }
    }
</script>

<style lang="scss" scoped>

</style>