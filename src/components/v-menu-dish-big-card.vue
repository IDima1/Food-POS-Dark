<template>
    <div class="v-menu-dish-big-card" >
        <img class="v-menu-dish-big-card__image" :src="'../src/assets/dishes/' + dish_data.image" alt="img">
        <div class="v-menu-dish-big-card__text">
            <h3 class="v-menu-dish-big-card__name">{{ dish_data.name }}</h3>
            <div>
                <p class="v-menu-dish-big-card__price">$ {{ dish_data.price }}</p>
                <p>•</p>
                <p class="v-menu-dish-big-card__available"> {{ dish_data.available }} Bowls </p>
            </div>  
        </div>
        <button><img src="../assets/icons/Edit.svg" alt=""><p>Edit dish</p></button>
    </div>
</template>

<script>
export default {
    name: 'v-menu-dish-no-style',
    props: {
        dish_data: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    methods: {
        addToCart() {
            this.$emit('addToCart', this.dish_data)
        }
    }
}
</script>

<style>
.v-menu-dish-big-card {
    width: 221px;
    height: 299px;

    border-radius: 8px;
    border:1px dashed#393C49;
    background-color:#1F1D2B;

    text-align: center;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}

.v-menu-dish-big-card__image {
    padding: 22px;
    border-radius: 50%;
}

.v-menu-dish-big-card__text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap:8px;
}

.v-menu-dish-big-card__name {
    width: 144px;
    color: #FFF;
    text-align: center;

    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%;
}

.v-menu-dish-big-card__text div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;

    color:  #ABBBC2;
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    padding-bottom: 16px;
}

.v-menu-dish-big-card button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;

    width: 100%;
    height: 52px;
    border-radius: 0px 0px 8px 8px;
    opacity: 0.24;
    background: #EA7C69;
    border: none;

    cursor: pointer;
}

.v-menu-dish-big-card button img {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
}

.v-menu-dish-big-card button p {
    color: #FFF;
    font-family: Barlow;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
    opacity: 100;
}

</style>