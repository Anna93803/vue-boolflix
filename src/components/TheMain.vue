<template>
    <div class="container">
        <div class="main">
            <div class="row">
                <div>
                    <h1>Movie Original Netflix</h1>
                </div>
                <div class="col">
                    <div v-for="movie in moviesList" :key="movie.id">
                        <TheCard :cards="movie"></TheCard>
                    </div>
                </div>
                <div class="row">
                    <div>
                        <h1>Series Original Netflix</h1>
                    </div>
                </div>
                <div class="col">
                    <div v-for="serie in seriesList" :key="serie.id">
                        <TheCard :cards="serie"></TheCard>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import {state} from '../store';
import TheCard from './TheCard.vue';

export default {
    name:'TheMain',
    components: {
        TheCard
    },
    computed: {
        moviesList() {
            return state.moviesList;
        },
        seriesList() {
            return state.seriesList;
        }
    },
}

</script>

<style lang="scss" scoped>
@import '../assets/style/variables.scss';

    .main {

        .row {

            h1{
                color: #cec0c0;
                padding: 3.4375rem 0;
                text-transform: uppercase;
                font-size: 1.875rem;
                font-weight: 600;
            }
        }
        .col {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            gap: 1.5625rem;
        }
    }

</style>