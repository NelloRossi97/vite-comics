<template>
    <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3 d-flex flex-column align-items-center">
        <img class="img-fluid mb-2" :src="thumb" :alt="series">
        <h6 class="text-uppercase">{{ series }}</h6>
        <p>Comprala a {{ price }}</p>
    </div>
</template>

<script>
    export default {
        name:'CardComponent',
        props: ['thumb', 'series', 'price']
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