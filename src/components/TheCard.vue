<template>
    <div class="card-movie">
        <img :src="`https://image.tmdb.org/t/p/w342/${cards.poster_path}`" alt="cover">
        <div class="card-hover">
            <div v-if="cards.original_title">Titolo Originale: {{cards.original_title}}</div>
            <div v-else-if="cards.original_name">Titolo Originale: {{cards.original_name}}</div>
            <div v-if="cards.title">Titolo: {{cards.title}}</div>
            <div v-else-if="cards.name">Titolo: {{cards.name}}</div>
            <div>Lingua Originale: <lang-flag :iso="cards.original_language" /></div>
            <small>Voto: {{getNum(cards.vote_average)}} <i class="fa-solid fa-star"></i> </small>
        </div>
    </div>
</template>

<script>


export default {
    name: 'TheCard',
    props: {
        cards: Object,
    }, 
    methods: {
        getNum(num) {
            return Math.round(num);
        },
    }
    // methods: {
    //     getStars(vote) {
    //         return  Math.ceil(vote / 2);
    //     }

    // }  
}

</script>

<style lang="scss" scoped>
@import '../assets/style/variables.scss';

.card-movie {
    position: relative;

    img {
        width: 100%;
    }

}
.card-hover {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0;
    font-size: 1.4375rem;
    font-weight: 900;
    padding: 3.125rem 1.25rem;
    transition: all 0.3s;

    &:hover  {
        opacity: 1;
        background-color: rgba(253, 246, 246,0.8);
        color: black;
    }

    div {
        padding-bottom: .625rem;
    }
}

</style>