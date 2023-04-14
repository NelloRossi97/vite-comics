<template>
    <main>
        <div class="container py-5 fw-bold fs-3">
            <div class="row">
                <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3 d-flex flex-column align-items-center" v-for="(item, index) in seriesData" :key="index">
                    <img class="img-fluid mb-2" :src="item.thumb" :alt="item.series">
                    <h6 class="text-uppercase">{{ item.series }}</h6>
                    <p>Comprala a {{ item.price }}</p>
                </div>
            </div>
        </div>
        <CallToActionComponent/>
    </main>
</template>

<script>
import CallToActionComponent from './CallToActionComponent.vue';
import { comicsData } from '../data/data';
    export default {
        name: 'MainComponent',
        data(){
            return{
                seriesData: comicsData
            }
        },
        components: {
            CallToActionComponent
        }
    }
</script>

<style lang="scss" scoped>
img{
    width: 200px;
    height: 300px;
}
p{
    font-size: 1rem;
    font-weight: 100;
}
</style>