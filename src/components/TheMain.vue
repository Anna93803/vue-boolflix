<template>
    <div class="container">
        <div class="main">
            <div class="row">
                <div class="col">
                    <div v-for="movie in moviesList" :key="movie.id">
                        <TheCard :cards="movie"></TheCard>
                    </div>
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

        .col {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            gap: 1.5625rem;
        }
    }

</style>