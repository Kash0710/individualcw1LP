<template>
  <div id="app">
    <header>
      <h1>{{sitename}}</h1>
      <button @click="showCheckout">{{this.cart.length}} Checkout</button>
    </header>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <product-list @addProduct='addToCart'></product-list>
  </div>
</template>

<script>
import ProductList from "./components/Lessons.vue";
// import Checkout from "./components/Lessons.vue";

export default {
  name: 'App',
  data() {
    return {
      sitename: "Vue.js Lessons",
      cart: []
    }
  },
  methods: {
    showCheckout() {
    },
    addToCart(product) {
      this.cart.push(product);
    }
  },
  components: {
    ProductList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
