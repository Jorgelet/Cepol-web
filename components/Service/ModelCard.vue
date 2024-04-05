<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: true
  },
  paragraph: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  reverse: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <article 
    class="article"
    :class="{'article__reverse': reverse}">
      <div class="article__content">
        <h1 class="content__title">
          {{ title }}
        </h1>
        <h2 class="content__subtitle">
          {{ subtitle }}
        </h2>
        <p class="content__paragraph">
          {{ paragraph }}
        </p>
      </div>
      <img 
        :src="image" 
        alt="Imagen de los servicios de Cepol"
        class="article__image"
      />    
  </article>
</template>

<style lang="scss" scoped>
.article{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-inline: 20px;
  gap: 54px;
  margin: 112px 0 40px;
  @media (min-width: $tablet-upper-breakpoint){
    flex-direction: row;    
    align-items: flex-start;
    max-width: 80%;
    margin-inline: auto;
  }
  &__reverse{
    @media (min-width: $tablet-upper-breakpoint){
      flex-direction: row-reverse;
    }    
  }
  &__content{ 
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    gap: 20px;
  }
  &__image{
    width: 100%;
    border-bottom-left-radius: 50px;
    @media (min-width: $tablet-upper-breakpoint){
      width: 50%;
      height: 400px;
    }
  }
}
.content{
  &__title{
    font-size: 1.75rem;
    color: $green-900;
    @media (min-width: $desktop-lower-breakpoint){
      font-size: 4rem;
      max-width: 80%;
    }
  }
  &__paragraph{
    font-size: 1rem;
    max-width: 80%;
    @media (min-width: $desktop-lower-breakpoint){
      font-size: 1.25rem;
    }
  }
  &__subtitle{
    font-size: 1rem;
    color: $black;
  }
}
</style>