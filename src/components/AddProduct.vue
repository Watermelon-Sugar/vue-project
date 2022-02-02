<template>
    <form @submit="onSubmit" class="add-form">
        <div class="form-control">
            <label>Products</label>
            <input type="text" v-model="text" name="text" placeholder="Add Product">
        </div>
        <div class="form-control">
            <label>Type</label>
            <input type="text"  v-model="type" name="type" placeholder="Add Product Type">
        </div>

        <div class="form-control wishcheck">
            <label>Wishlist</label>
            <input type="checkbox"  v-model="wishlist" name="wishlist" placeholder="Add to Wishlist">
        </div>

        <input class="btn btn-block" type="submit" value="Save Product">

    </form>
</template>


<script>
    export default {
        name: 'AddProduct',
        data() {
            return { 
                text: '',
                type: '',
                wishlist: false
            }
        },
        methods: {
            onSubmit(e) {
                e.preventDefault()
                if (!this.text) {
                    alert('Please add product')
                }

                const newProduct = {
                    text:  this.text,
                    type: this.type,
                    wishlist: this.wishlist
                }

                this.$emit('add-product', newProduct )

                this.text = ''
                this.type = ''
                this.wishlist = false
            }
        }
    }
</script>

<style scoped>
    .add-form {
        margin-bottom: 30px;
    }

    .form-control {
        margin: 20px 0;
    }
    .form-control label {
        display: block;
    }

    .form-control input {
        width: 100%;
        height: 50px;
        margin: 5px;
        padding: 3px 7px;
        font-size: 16px;
        border-radius: 10px;
        border: 1px solid chocolate;
    }

    .form-control input:focus {
        outline: 1px solid chocolate;
    }

    .wishcheck input {
        height: 20px;
    }

    .wishcheck input:focus {
        outline: none;
    }
</style>