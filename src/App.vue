<template>
 <div class="container"> 
  <Header @toggle-add-product="toggleAddProduct" title="Vidar Nigeria" :ShowAddProduct="ShowAddProduct"/>
  <div v-show="showAddProduct">
    <AddProduct @add-product="addProduct" />
  </div>
 
  <Products 
    @toggle-want="toggleWant" @delete-product="deleteProduct" :products="products"
  />
 </div>
  
</template>

<script>
import Header from './components/Header'
import Products from './components/Products'
import AddProduct from './components/AddProduct'

export default {
  name: 'App',
  components: {
    Header,
    Products,
    AddProduct
  },
  data() {
    return {
      products: [],
      showAddProduct: false
    }
  },
  methods: {
    toggleAddProduct() {
      this.showAddProduct = !this.showAddProduct
    },

    async addProduct(product) {
      const res = await fetch('api/products', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        
        body: JSON.stringify(product),
      })

      const data = await res.json()
      
      this.products = [...this.products, data]
    },
    async deleteProduct(id) {
     if (confirm('Are you sure?')) {
       const res = await fetch(`api/products/${id}`, {
        method: 'DELETE' 
      })

      res.status === 200 ? (this.products = this.products.filter((product) => product.id !== id)) : alert('Error deleting product')

        
     } 
    },
    toggleWant(id) {
      this.products = this.products.map((product) => product.id === id ? {...product, want: !product.want } : product
      )
    },
    async fetchProducts() {
      const res = await fetch('api/products')

      const data = await res.json()

      return data
    },
    
    async fetchProduct(id) {
      const res = await fetch(`api/products/${id}`)

      const data = await res.json()

      return data
    },
  },
  async created() {
    this.products = await this.fetchProducts()
  }
  
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Lato', sans-serif;
}

.container {
  max-width: 750px;
  margin: 30px auto;
  overflow: auto;
  min-height: 400px;
  border: 1px solid chocolate;
  padding: 30px;
  border-radius: 5px;

}

.btn {
  display: inline-block;
  background-color: rgb(248, 162, 3);
  color: rgb(253, 6, 88);
  border: none;
  margin: 8px;
  padding: 15px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 15px;
  font-family: inherit;
}

.btn:focus {
  outline: none;
}


</style>
