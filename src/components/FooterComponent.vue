<template>
    <footer>
        <div class="links">
            <div class="container">
                links
            </div>
        </div>
        <ContactsComponent/>
    </footer>
</template>

<script>
import ContactsComponent from './ContactsComponent.vue';
    export default {
        name: 'FooterComponent',
        components: {
            ContactsComponent
        }
    }
</script>

<style lang="scss" scoped>

</style>