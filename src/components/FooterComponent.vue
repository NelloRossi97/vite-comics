<template>
    <footer>
        <div class="container d-flex justify-content-between position-relative overflow-hidden">
            <div class="lists-container py-5 d-flex gap-5">
                <div>
                    <div>
                        <h3 class="text-uppercase">DC Comics</h3>
                        <ul class="list-unstyled">
                            <li v-for="item in comicsArray">{{ item.text }}</li>
                        </ul>
                    </div>
                    <div>
                        <h3 class="text-uppercase">Shop</h3>
                        <ul class="list-unstyled">
                            <li v-for="item in shopArray">{{ item.text }}</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h3 class="text-uppercase">DC</h3>
                    <ul class="list-unstyled">
                        <li v-for="item in dcArray">{{ item.text }}</li>
                    </ul>
                </div>
                <div>
                    <h3 class="text-uppercase">sites</h3>
                    <ul class="list-unstyled">
                        <li v-for="item in sitesArray">{{ item.text }}</li>
                    </ul>
                </div>
            </div>
            <div class="logo-container position-absolute">
                <img src="/images/dc-logo-bg.png" alt="Logo">
            </div> 
        </div>
        <ContactsComponent/>
    </footer>
</template>

<script>
import ContactsComponent from './ContactsComponent.vue';
    export default {
        name: 'FooterComponent',
        data(){
            return{
                comicsArray:[
                    {
                        text: 'Characters'
                    },
                    {
                        text: 'Comics'
                    },
                    {
                        text: 'Movies'
                    },
                    {
                        text: 'TV'
                    },
                    {
                        text: 'Games'
                    },
                    {
                        text: 'Videos'
                    },
                    {
                        text: 'News'
                    },
                ],
                shopArray:[
                    {
                        text:'Shop DC'
                    },
                    {
                        text:'Shop DC Collectibles'
                    }
                ],
                dcArray:[
                    {
                        text:'Terms Of Use'
                    },
                    {
                        text:'Privacy policy (New)'
                    },
                    {
                        text:'Ad Choices'
                    },
                    {
                        text:'Advertising'
                    },
                    {
                        text:'Jobs'
                    },
                    {
                        text:'Subscriptions'
                    },
                    {
                        text:'Talent Workshops'
                    },
                    {
                        text:'CPSC Certificates'
                    },
                    {
                        text:'Rating'
                    },
                    {
                        text:'Shop Help'
                    },
                    {
                        text:'Contact Us'
                    },
                ],
                sitesArray:[
                    {
                        text: 'DC'
                    },
                    {
                        text:'MAD Magazine'
                    },
                    {
                        text:'DC Kids'
                    },
                    {
                        text:'DC Universe'
                    },
                    {
                        text:'DC Power Visa'
                    },
                ]
            }
        },
        components: {
            ContactsComponent
        }
        
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/colors.scss' as *;
li{
    color: $links-color;
}
.logo-container{
    height: 150%;
    right: 0;
    top: -80px;
}
</style>