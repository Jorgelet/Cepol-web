<script setup lang="ts">
const props = defineProps({
  image: {
    type: String,
    required: false
  },
  spanTitle: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  paragraph: {
    type: String,
    required: true
  },
  buttonContent: {
    type: String,
    required: true
  },
  reverseSection: {
    type: Boolean,
    required: false
  }
})
</script>

<template>
  <section 
    class="section"
    :class="reverseSection && 'reverse'">
    <img 
      decoding="async"
      :src="image"
      alt="Estudiante de Cepol"
      class="section__img"
    />
    <div class="section__content">
      <span class="content__span">
        {{ spanTitle }}
      </span>
      <h2 class="content__title">
        {{ title }}
      </h2>
      <p class="content__paragraph">
        {{ paragraph }}
      </p>
      <Button
        :text="buttonContent"
        href="#"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.section{
  min-height: 80vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: $mobile-upper-breakpoint){
    max-width: 80%;
    margin: 0 auto;    
  }
  @media (min-width: $desktop-lower-breakpoint){
    flex-direction: row;
    gap: 80px;
    align-items: center; 
  }
  &__img{
    max-width: 300px;
    margin: 0 auto 20px;
    @media (min-width: $tablet-upper-breakpoint){
      max-width: 400px;
    }
    @media (min-width: $desktop-lower-breakpoint){
      max-width: 500px;
      width: 100%;
      height: auto;
    }
  }
  &__content{
    display: flex;
    flex-direction: column;
    gap: 8px;
    @media (min-width: $desktop-lower-breakpoint){
      max-width: 40%;
    }
  }
}
.content{
  &__span{
    font-size: 1rem;
    color: $black;
    @media (min-width: $tablet-upper-breakpoint){
      font-size: 1.1rem;
    }
  }
  &__title{
    font-size:  1.5rem;
    margin: 10px 0 16px;
    color: $black;
    @media (min-width: $tablet-upper-breakpoint){
      font-size: 2rem;
    }
  }
  &__paragraph{
    font-size: 1rem;
    color: $black;
    @media (min-width: $tablet-upper-breakpoint){
      font-size: 1.2rem;
    }
  }
}
.reverse{
  @media (min-width: $desktop-lower-breakpoint){
    flex-direction: row-reverse;
  }
}
</style>