<template>
    <div v-bind:key="product.id" v-for="product in products">
        
    <Product @toggle-want="$emit('toggle-want', product.id) " @delete-product="$emit('delete-product', product.id)" :product="product" />
    </div>
</template>


<script>
import Product from './Product'

    export default {
        name: 'Products',
        props: {
            products: Array,
        },
        components: {
            Product
        }, 
        emits: ['delete-product', 'toggle-want'],
    }
</script>