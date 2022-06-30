<template>
    <div class="card-movie">
        <img :src="coverError" alt="Immagine">
        <div class="card-hover">
            <div v-if="cards.original_title" :class="{'d-none' : cards.original_title === cards.title}"><span>Titolo Originale: </span> {{cards.original_title}}</div>
            <div v-else-if="cards.original_name" :class="{'d-none' : cards.original_name === cards.name}"><span>Titolo Originale: </span>{{cards.original_name}}</div>
            <div v-if="cards.title"><span>Titolo:</span> {{cards.title}}</div>
            <div v-else-if="cards.name"><span>Titolo:</span> {{cards.name}}</div>
            <div><span>Lingua Originale: </span><lang-flag :iso="cards.original_language"/></div>
            <div>
                <span v-for="i in 5" :key="i">
                    <i v-if="i <= getNum()" class="fa-solid fa-star yellow-star"></i> 
                    <i  v-else class="fa-regular fa-star"></i> 
                </span>
            </div>
            <!-- <div>Voto: {{getNum(cards.vote_average)}} </div> -->
            <div v-if="cards.overview"><span>Overview</span>: {{cards.overview}}</div>
            <div v-else><span>Overview:</span> Non Disponibile</div>
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
            
        }
    },
    computed: {
        coverError() {
            if(this.cards.poster_path === null) {
                return '../imgError.png';
            }
            return `https://image.tmdb.org/t/p/w342/${this.cards.poster_path}`;
        },
    },
    methods: {
        getNum() {
            return  Math.ceil(this.cards.vote_average / 2);
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
    font-weight: 700;
    padding: 1.875rem 1.25rem;
    transition: all 0.5s;
    overflow: auto;

    &:hover  {
        opacity: 1;
        background-color: rgba(253, 246, 246,0.8);
        color: $ColorPrimary;
        cursor: pointer;
    }

    div {
        padding-bottom: .625rem;
    }

    span {
        font-weight: 800;
    }

    .d-none {
        display: none;
    }
}

</style>