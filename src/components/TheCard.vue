<template>
    <div class="card-movie">
        <img :src="cover" alt="cover">
        <div class="card-hover">
            <div v-if="cards.original_title">Titolo Originale: {{cards.original_title}}</div>
            <div v-else-if="cards.original_name">Titolo Originale: {{cards.original_name}}</div>
            <div v-if="cards.title">Titolo: {{cards.title}}</div>
            <div v-else-if="cards.name">Titolo: {{cards.name}}</div>
            <div>Lingua Originale: <lang-flag :iso="cards.original_language" /></div>
            <div>
                <span v-for="i in 5" :key="i">
                    <i v-if="i <= getNum()" class="fa-solid fa-star"></i> 
                    <i  v-else class="fa-regular fa-star"></i> 
                </span>
            </div>
            <div>Voto: {{getNum(cards.vote_average)}} </div>
            <div v-if="cards.overview" >Overview: {{cards.overview}}</div>
            <div v-else>Overview non Disponibile</div>
        </div>
    </div>
</template>

<script>


export default {
    name: 'TheCard',
    props: {
        cards: Object,
    }, 
    data() {
        return {
            poster: ""
        }
    },
    computed: {
        cover() {
            if(this.cards.poster_path === null) {
                return '../imgError.png';
            }
            return `https://image.tmdb.org/t/p/w342/${this.cards.poster_path}`;
        }
    },
    methods: {
        getNum(vote) {
            // return Math.round(num);
            return  Math.ceil(vote / 2);
            // return Math.floor(Math.random() * 5 + 1);
    
        },
    }
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
    overflow: auto;

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