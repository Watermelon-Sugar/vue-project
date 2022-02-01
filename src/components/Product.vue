<template> 
    <div @dblclick="$emit('toggle-want', product.id)" :class="[product.want ? 'want' : '', 'product']">
        <h3>{{product.text}}
        <i @click="onDelete(product.id)" class="fas fa-times"></i></h3>
        <p>{{product.type}}</p>
    </div>
</template>



<script>
    export default {
        name: 'Product',
        props: {
            product: Object,
        }, 
        methods: {
            onDelete(id) {
                this.$emit('delete-product', id)
            }
        }
    }
</script>

<style scoped>
    .product {
        background: #f6f6f6;
        margin: 8px;
        padding: 10px 20px;
        cursor: pointer;
    }

    .product.want {
        border-left: 5px solid #000;
    }
    .fas{
        color: #000;
    }
</style>