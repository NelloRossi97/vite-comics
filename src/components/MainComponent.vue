<template>
    <main>
        <div class="container py-5 fw-bold fs-3">
            -> Content goes here
        </div>
        <CallToActionComponent/>
    </main>
</template>

<script>
import CallToActionComponent from './CallToActionComponent.vue';
    export default {
        name: 'MainComponent',
        components: {
            CallToActionComponent
        }
    }
</script>

<style lang="scss" scoped>

</style>