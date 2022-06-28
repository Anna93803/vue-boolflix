import Vue from "vue";
import axios from "axios";

export const state = Vue.observable ({
    moviesList: [],
    seriesList: [],
});

export function getMovies(searchText) {

    axios.get("https://api.themoviedb.org/3/search/movie", {
        params: {
            api_key: "52fa4879a16a66a273c3d46682a089b6",
            query: searchText,
            language: 'it',
        },
    })
    .then((resp) => {
        state.moviesList = resp.data.results;
    })
}