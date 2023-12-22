<template>
    <div class="small-container single-product">
        <div class="row">
            <div class="col-2">
                <img id="productimg" src="/assets/Air_King.png" width="100%" alt="Foto kan niet worden geladen">
                <div class="small-img-row">
                    <div class="small-img-col">
                        <img class="small-img" src="/assets/Air_King_klein1.jpg" width="100%" alt="Foto kan niet worden geladen">
                    </div>
                    <div class="small-img-col">
                        <img class="small-img" src="/assets/Air_King_klein1.jpg" width="100%" alt="Foto kan niet worden geladen">
                    </div>
                    <div class="small-img-col">
                        <img class="small-img" src="/assets/Air_King_klein1.jpg" width="100%" alt="Foto kan niet worden geladen">
                    </div>
                    <div class="small-img-col">
                        <img class="small-img" src="/assets/Air_King_klein1.jpg" width="100%" alt="Foto kan niet worden geladen">
                    </div>
                </div>
            </div>
            <div class="col-2">
                <img class="brand" src="/assets/RolexLogoKleur.png">
                <h1>naam product</h1>
                <h4>prijs product</h4>
                <input type="number" value="1">
                <!-- <a href="" class="btn"><span><i class="fas fa-shopping-cart"></i></span> In winkelwagen</a> -->
                <a @click="addToCart" class="btn"><span><i class="fas fa-shopping-cart"></i></span> In winkelwagen</a>
                <p class="detail">product.descriptionText</p>
                <h3>Product details<i class="fa fa-indent"></i></h3><br>
                <p>- Oyster<br>- 40mm<br>- Oystersteel-staal</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
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