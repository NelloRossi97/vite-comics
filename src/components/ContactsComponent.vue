<template>
    <div class="contacts">
        <div class="container py-4 d-flex justify-content-between align-items-center">
            <button class="text-uppercase text-white px-3 fw-bold">sign-up now!</button>
            <div class="d-flex gap-3 align-items-center">
                <h4 class="text-uppercase">follow us</h4>
                <img src="/images/footer-facebook.png" alt="Facebook">
                <img src="/images/footer-twitter.png" alt="Twitter">
                <img src="/images/footer-youtube.png" alt="Youtube">
                <img src="/images/footer-pinterest.png" alt="Pinterest">
                <img src="/images/footer-periscope.png" alt="Periscope">
            </div>
        </div>
        
    </div>
</template>

<script>
    export default {
        name: 'ContactsComponent'
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/colors.scss' as *;
button{
    background-color: transparent;
    border: 2px solid $blue-secondary;
    height: 50px;
}
h4{
    color: $blue-secondary;
}
img{
    width: 50px;
    height: 50px;
}
</style>