<script setup lang="ts">
import { article1, article2, article3 } from '~/utils/content/Articles';
</script>

<template>
  <section class="section">
    <h2 class="section__title">
      Modalidades de estudio <i class="fa-solid fa-graduation-cap"></i>
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
    <div class="circle circle--large"></div>
    <div class="circle circle--medium"></div>
    <div class="circle circle--small"></div>
  </section>
</template>

<style lang="scss" scoped>
.section{
  min-height: 100vh;
  padding: 40px 20px;
  color:  $green-700;
  position: relative;
}
.section__title{
  font-family: $primary-font;
  font-size: 2.2rem;
  text-align: center;
  margin-bottom: 40px;
}
.section__content{
  display: flex;
  flex-direction: column; 
  gap: 20px;
}
.circle{
  position: absolute;
  border-radius: 50%;
  background-color: $green-700;
  &--large{
    width: 300px;
    height: 300px;
    top: 0;
    right: 0;
  }
  &--medium{
    width: 150px;
    height: 150px;
    bottom: 0;
    left: 0;
  }
  &--small{
    width: 100px;
    height: 100px;
    top: 0;
    left: 0;
  }
}
</style>