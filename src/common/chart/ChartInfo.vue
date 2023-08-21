<template >
    <div class="legend-cell">
        <img class="legend-img" :src="'../src/assets/icons/' + legend.img" alt="">
        <div class="legend-cell__container">
            <p class="legend-cell-title normal-medium">{{ legend.title }}</p>
            <p class="legend-cell small-regular">{{ legend.customers }}</p>
        </div>
  </div>
</template>
<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    legend: Object
})

</script>

<style lang="sass" scoped>
@import '@/styles/app.sass'
.legend-cell
  display: flex
  gap: 9px
  align-items: start

.legend-cell__container
  display: inline-flex
  flex-direction: column
  align-items: flex-start
  gap: 2px

.small-regular 
  color: $text-primary-light
</style>