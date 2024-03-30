<script setup lang="ts">
import { article1, article2, article3 } from '~/utils/content/Articles';
</script>

<template>
  <section class="section">
    <h2 class="section__title">
      Modalidades de estudio 
      <i class="fa-solid fa-graduation-cap section__title__icon"></i>
    </h2>
    <div class="section__content">
      <SectionModelArticle 
        :title="article1.title"
        :paragraph="article1.paragraph"
        :fontClass="article1.fontClass" />
      <SectionModelArticle 
        :title="article2.title"
        :paragraph="article2.paragraph"
        :fontClass="article2.fontClass" />
      <SectionModelArticle 
        :title="article3.title"
        :paragraph="article3.paragraph"
        :fontClass="article3.fontClass" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.section{
  padding: 40px 20px;
  position: relative;
  overflow: hidden;
  @media (min-width: $desktop-lower-breakpoint){
    display: flex;
    justify-content: space-between;
  }
  &__title{
    font-family: $primary-font;
    color: $green-800;
    font-size: 2.2rem;
    margin-bottom: 40px;
    text-align: center;
    @media (min-width: $desktop-lower-breakpoint){
      font-size: 8rem;
      margin-bottom: 0;
      border-radius: 10px;
      padding: 30px;
      color: #fff;
      text-align: left;
      width: 55%;
      overflow-wrap: break-word;
      background-color: $green-800;
    }
  }
}
.section__content{
  @media (min-width: $desktop-lower-breakpoint){
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 40%;
  }
}
</style>