Vue.component('search',{
    template:`
    <form class="d-flex form">
        <input class="form-control me-2" type="search" placeholder="Buscar productos, marcas y más…" aria-label="Search" v-model="searchText">
        <button class="btn btn-outline-success" type="button" v-on:click="searchProducts"></button>
    </form>`,
    data: function(){
        return {
            searchText: "",
            error: ""
        }
    },
    methods: {
        searchProducts() {
            axios
                .get(`https://api.mercadolibre.com/sites/MCO/search?q=${encodeURIComponent(this.searchText)}`, {
                        headers: {"Access-Control-Allow-Origin": "*"},
                        proxy: 'https://api.mercadolibre.com',
                })
                .then(response => (this.products = response.data.results))
                .catch(error => (this.error = error.message))
           }
    }
});