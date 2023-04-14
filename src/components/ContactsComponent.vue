<template>
    <div class="contacts">
        <div class="container py-4 d-flex justify-content-between align-items-center">
            <button class="text-uppercase text-white px-3 fw-bold me-1 fs-7">sign-up now!</button>
            <div class="d-flex gap-3 align-items-center">
                <h4 class="text-uppercase d-none d-md-flex">follow us</h4>
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
    font-size: 0.6rem;
}
h4{
    color: $blue-secondary;
}
img{
    width: 25px;
    height: 25px;
}
@media screen and (min-width: 461px) {
    button{
        font-size: 1rem;
    }
    img{
        width: 50px;
        height: 50px;
    }
}
</style>