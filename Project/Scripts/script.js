var webstore = new Vue({
    el: '#app',
    data: {
        showProduct: true,
        sitename: 'Extra Curricular',
        cartButton: '<i class="fas fa-shopping-cart"></i> Checkout',
        // Using two way binding it changes these empty fields depending on what the user inputs
        searchTerm: '',
        sortStyle: '',
        // Array for cart for items to get added
        cart: [],
        order: {
            Name: '',

            phoneNo: ''
        },
        lessonButton: "<i class='fas fa-plus'></i> Add to cart",
        // Uses products from external file
        products: products,
        inCartButton: "Remove"
    },



    methods: {
        // Adds the product id to cart and decreases a space by 1
        addToCart: function (product) {
            this.cart.push(product.id);
            product.spaces--;
        },
        // Checks if there is still available product left
        canAdd: function (product) {
            return product.spaces > 0;
        },
        // Depending on the boolean value shows the product or checkout page
        showCheckout() {
            this.showProduct = this.showProduct ? false : true;
        },
        // Counts how many times an item is in the cart
        counter(id) {
            let counter = 0;
            for (let i = 0; i < this.cart.length; i++) {
                if (this.cart[i] === id) {
                    counter++;
                }
            }
            if (counter > 0) {
                return counter;
            }
        },
//k
  