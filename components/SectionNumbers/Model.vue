<script setup lang="ts">
const props = defineProps({
  icon: {
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
  }
})
</script>

<template>
  <div class="article">
    <i 
      :class="icon"
      class="article__icon">
    </i>
    <div class="article__content">
      <h3 class="content__title">
        {{ title }}
      </h3>
      <p class="content__paragraph">
        {{ paragraph }}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.article{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  margin: 0 auto;
  @media (min-width: $tablet-upper-breakpoint) and (max-width: $desktop-lower-breakpoint){
    max-width: 80%;
    flex-direction: row;    
    gap: 60px;
  }
  @media (min-width: $desktop-lower-breakpoint){
    width: 25%;
  }
  &__icon{
    font-size: 2rem;
    color: $black;
    @media (min-width: $tablet-upper-breakpoint){
      font-size: 3rem;
    }
  }
  &__content{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
  }
}
.content{
  &__title{
    font-size: 1.5rem;
    text-align: center;
    color: $green-800;
  }
  &__paragraph{
    font-size: 1rem;
    color: $black;
    max-width: 50ch;
    text-align: center;
  }
}
</style>