<template>
    <div class="container">
        <div class="row">
            <img src="../assets/img/logo.png" alt="">
            <div class="input">
                <input type="text" placeholder="Search.." v-model="searchText" @keyup.enter="getMovies">
                <button @click="getMovies" class="btn">Send</button>
            </div>
        </div>
    </div>
</template>

<script>

import {getMovies} from "../store";

export default {
    name: 'TheHeader',
    data() {
        return {
            searchText: '',
            type: '',
        }
    },
    methods: {
        getMovies() {
            getMovies(this.searchText, 'movie');
            getMovies(this.searchText, 'tv');
            
            this.searchText = "";
        }
    },
}

</script>

<style lang="scss" scoped>

@import '../assets/style/variables.scss';

.container {

    .row {
        display: flex;
        justify-content: space-between;
        align-items: center;

        img {
            width: 110px;
        }

        h1 {
            color: $ColorSecondary;
        }

        .input {

            input {
                border: none;
                padding: .1875rem;
                margin-right: .5rem;

            }
            .btn {
                padding: .25rem .9375rem;
                background-color: $ColorSecondary;
                color: $ColorText;
                cursor: pointer;
            }
        }
    }

}



</style>