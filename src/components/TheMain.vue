<template>
    <div class="container">
        <div class="main">
            <ul>
                <li v-for="(movie, i) in moviesList" :key="i"><h2>Titolo originale: {{movie.original_title}}</h2> 
                    <h5>Titolo: {{movie.title}}</h5>
                    <h5>Lingua originale: {{movie.original_language}}</h5>
                    <h5>Voto: {{movie.vote_average}}</h5>
                </li>
            </ul>

            <ul>
                <li v-for="(serie, i) in seriesList" :key="i"><h2>Titolo originale: {{serie.original_name}}</h2> 
                    <h5>Titolo: {{serie.name}}</h5>
                    <h5>Lingua originale: {{movie.original_language}}</h5>
                    <h5>Voto: {{movie.vote_average}}</h5>
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
    }
}

</script>

<style lang="scss" scoped>
@import '../assets/style/variables.scss';

    .main {

        ul li {
            color: #837c7c;
            padding-top: 8px;
        }
    }


</style>