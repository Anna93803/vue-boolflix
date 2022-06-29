<template>
    <div class="container">
        <div class="main">
            <h1>Film</h1>
            <ul>
                <li v-for="(movie, i) in moviesList" :key="i"><h2>Titolo originale: {{movie.original_title}}</h2> 
                    <img :src="`https://image.tmdb.org/t/p/w342/${movie.poster_path}`" alt="">
                    <h5>Titolo: {{movie.title}}</h5>
                    <h5>Lingua originale:<lang-flag :iso="movie.original_language" /></h5>
                    <h5>Voto: {{movie.vote_average}}</h5><i class="fa-solid fa-star"></i>
                </li>
            </ul>
            <h1>SERIE TV</h1>
            <ul>
                <li v-for="(serie, i) in seriesList" :key="i"><h2>Titolo originale: {{serie.original_name}}</h2> 
                    <img :src="`https://image.tmdb.org/t/p/w342/${serie.backdrop_path}`" alt="">
                    <h5>Titolo: {{serie.name}}</h5>
                    <h5>Lingua originale:<lang-flag :iso="serie.original_language"/></h5>
                    <h5>Voto:{{serie.vote_average}}</h5><i class="fa-solid fa-star"></i>
                    
                    <!-- <i v-for="(star, i) in getStars(serie.vote_avarage)" :key="i" class="fa-solid fa-star"></i> -->
                </li>
            </ul>

        </div>
    </div>
</template>

<script>

import {state} from '../store';

export default {
    name:'TheMain',
    data() {
        return{

        }
    },
    computed: {
        moviesList() {
            return state.moviesList;
        },
        seriesList() {
            return state.seriesList;
        }
    },
    // methods: {
    //     getStars(vote) {
    //         return  Math.ceil(vote / 2);
    //     }
    // }
}

</script>

<style lang="scss" scoped>
@import '../assets/style/variables.scss';

    .main {
        color: $ColorText;

        ul li {
            color: #837c7c;
            padding-top: 8px;
        }
    }


</style>