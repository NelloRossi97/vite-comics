<template>
    <section class="py-3">
        <div class="container px-5 d-flex flex-column flex-xl-row justify-content-between align-items-center">
            <div class="d-flex align-items-center prova" v-for="item in contentCall">
                <img class="me-4 mb-4 h-50" :src="'/images/'+item.image" :alt="item.text">
                <span class="text-uppercase">{{ item.text }}</span>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'CallToActionComponent',
        data(){
            return{
                contentCall: [
                    {
                        image: "buy-comics-digital-comics.png",
                        text: "Digital Comics"
                    },
                    {
                        image: "buy-comics-merchandise.png",
                        text: "DC Merchandise"
                    },
                    {
                        image: "buy-comics-subscriptions.png",
                        text: "Subscription"
                    },
                    {
                        image: "buy-comics-shop-locator.png",
                        text: "Comic shop locator"
                    },
                    {
                        image: "buy-dc-power-visa.svg",
                        text: "DC power visa"
                    },
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
.prova:last-child{
    img{
        width: 70px;
        height: 70px;
    }
}
</style>