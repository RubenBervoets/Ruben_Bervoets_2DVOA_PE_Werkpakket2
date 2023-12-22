<!-- Kreeg de data niet geladen dus heb overal dummytekst in gezet zodat je toch iets kunt zien-->
<template>
    <div class="small-container single-product">
        <div class="row">
            <div class="col-2">
                <img id="productimg" src="/assets/Air_King.png" width="100%" alt="Foto kan niet worden geladen">
                <div class="small-img-row">
                    <div class="small-img-col">
                        <img class="small-img" src="/assets/Air_King_klein1.jpg" width="100%"
                            alt="Foto kan niet worden geladen">
                    </div>
                    <div class="small-img-col">
                        <img class="small-img" src="/assets/Air_King_klein1.jpg" width="100%"
                            alt="Foto kan niet worden geladen">
                    </div>
                    <div class="small-img-col">
                        <img class="small-img" src="/assets/Air_King_klein1.jpg" width="100%"
                            alt="Foto kan niet worden geladen">
                    </div>
                    <div class="small-img-col">
                        <img class="small-img" src="/assets/Air_King_klein1.jpg" width="100%"
                            alt="Foto kan niet worden geladen">
                    </div>
                </div>
            </div>
            <div class="col-2">
                <img class="brand" src="/assets/RolexLogoKleur.png">
                <h1>Naam product</h1>
                <h4>Prijs product</h4>
                <input type="number" value="1">
                <a @click="addToCart" class="btn"><span><i class="fas fa-shopping-cart"></i></span>{{ button }}</a>
                <p class="detail">product.descriptionText</p>
                <h3>{{ details }}<i class="fa fa-indent"></i></h3><br>
                <p>- braceletMaterial<br>- case size<br>- case material</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            button: " In winkelwagen",
            details: "Product details",
        }
    },
    props: {
        product: Object
    },
    methods: {
        addToCart() {
            const cartStore = cartStore();
            cartStore.addToCart(this.product);
        },
    },
};
</script>