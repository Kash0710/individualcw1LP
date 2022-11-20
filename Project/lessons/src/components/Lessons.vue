<template>
    <main>
        <div v-for="product in products" :key="product.id">
            <figure>
                <img class="lessonImage" v-bind:src="product.image" />
            </figure>
            <h2>Subject: {{ product.name }}</h2>
            <p>Location: {{ product.location }}</p>
            <p>Price: £{{ product.price }}</p>
            <p>Spaces available: {{ product.spaces }}</p>
            <button @click="addProduct(product)">Add to Cart</button>
            <button v-html="lessonButton" disabled v-else></button>
        </div>
    </main>
</template>
<script>
export default {
    name: "ProductList",
    data() {
        return {
            products: [
                {
                    id: 1001,
                    name: "Maths",
                    location: "London",
                    price: 50,
                    image: "math.png",
                    spaces: 5,
                },
                {
                    id: 1002,
                    name: "English",
                    location: "Birmingham",
                    price: 40,
                    image: "english.png",
                    spaces: 5,
                },
                {
                    id: 1003,
                    name: "Physics",
                    location: "Enfield",
                    price: 45,
                    image: "science.jpeg",
                    spaces: 5,
                },
                {
                    id: 1004,
                    name: "Chemistry",
                    location: "Birmingham",
                    price: 50,
                    image: "science.jpeg",
                    spaces: 5,
                },
                {
                    id: 1005,
                    name: "French",
                    location: "Brighton",
                    price: 45,
                    image: "french.jpeg",
                    spaces: 5,
                },
                {
                    id: 1006,
                    name: "Geography",
                    location: "London",
                    price: 50,
                    image: "geography.jpeg",
                    spaces: 5,
                },
                {
                    id: 1007,
                    name: "Statistics",
                    location: "Basildon",
                    price: 50,
                    image: "math.png",
                    spaces: 5,
                },
                {
                    id: 1008,
                    name: "IT",
                    location: "London",
                    price: 40,
                    image: "IT.png",
                    spaces: 5,
                },
                {
                    id: 1009,
                    name: "History",
                    location: "Bournemouth",
                    price: 40,
                    image: "history.jpeg",
                    spaces: 5,
                },
                {
                    id: 1010,
                    name: "Biology",
                    location: "Birmingham",
                    price: 45,
                    image: "science.jpeg",
                    spaces: 5,
                }
            ]
        }
    },
    methods: {
        addProduct(product) {
            if (product.spaces > 0) {
                this.$emit('addProduct', product);
                product.spaces--;
            }
        }
    }
}
</script>
