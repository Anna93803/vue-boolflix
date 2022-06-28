<template>
    <div>
        <input type="text" placeholder="Search" v-model="searchText">
        <button>Send</button>

        <ul>
            <li v-for="(movie, i) in movieList" :key="i"> {{movie}}</li>
        </ul>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: 'TheHeader',
    data() {
        return {
            searchText: '',
            movieList: [],
        }
    },
    methods: {
        getMovies() {
            axios.get("https://api.themoviedb.org/3/search/movie", {
                params: {
                    api_key: "52fa4879a16a66a273c3d46682a089b6",
                    query: this.searchText,
                    language: 'it',
                },
            })
            .then((resp) => {
                this.movieList = resp.data.results;
            })
            .cacht(() => {
                alert('Operazione non riuscita.')
            })
            
        }
    },
}

</script>

<style lang="scss" scoped>

</style>