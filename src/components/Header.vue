<template>
    <header>
        <h1>{{title}} </h1>
        <Button 
            @btn-click="$emit('toggle-add-product')" 
            :text="ShowAddProduct ? 'Close' : 'Add Products'" color="pink" />
    </header>
    
</template>

<script>
    import Button from './Button'

    export default {
        name: 'Header', 
        // props: ['title'],

        // // or
        // props: {
        //     title: {
        //         type: String,
        //         default: 'Vidar Nigeria',
        //     }
        // }

        props: {
            title: String,
            showAddProduct: Boolean,
        }, 
        components: {
            Button,
        }
    }
</script>


<style scoped>
    header {
        display: flex;
        justify-content: space-between;
        align-content: center;
    }
    
    
</style>