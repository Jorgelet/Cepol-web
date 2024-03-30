<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  paragraph: {
    type: String,
    required: true
  },
  fontClass: {
    type: String,
    required: true,
  }
})
</script>

<template>
  <article class="article">
    <i
      class="article__icon" 
      :class="fontClass"></i>
    <h3 class="article__title">
      {{ title }}
    </h3>
    <p class="article__paragraph">
      {{ paragraph }}
    </p>
  </article>
</template>

<style lang="scss" scoped>
.article{
  font-family: $primary-font;
  padding: 10px;
  margin-bottom: 25px;
  border-radius: 10px;
  color: $black;
  @media (min-width: $mobile-upper-breakpoint){
    width: 90%;
    margin: 0 auto 25px;
  }
  &__icon{
    font-size: 2rem;
    @media (min-width: $desktop-lower-breakpoint){
      display: none;
    }
  }
  &__title{
    font-size: 1.5rem;
    margin-bottom: 10px;
    @media (min-width: $desktop-lower-breakpoint){
      font-size: 2.3rem;
    }
  }
  &__paragraph{
    font-size: 1rem;
    @media (min-width: $desktop-lower-breakpoint){
      font-size: 1.1rem;
    }
  }
}
</style>