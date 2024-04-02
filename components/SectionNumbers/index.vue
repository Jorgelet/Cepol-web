<script setup lang="ts">
import { article1, article2, article3 } from '~/utils/content/SectionNumbers/Content';
</script>

<template>
  <div class="section">
    <h2 class="section__title">
      ¿Porque funciona Cepol?
    </h2>
    <div class="section__models">
      <SectionNumbersModel
        :icon="article1.icon"
        :title="article1.title"
        :paragraph="article1.paragraph"
      />
      <SectionNumbersModel
        :icon="article2.icon"
        :title="article2.title"
        :paragraph="article2.paragraph"
      />
      <SectionNumbersModel
        :icon="article3.icon"
        :title="article3.title"
        :paragraph="article3.paragraph"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.section{
  margin: 100px 0;
  padding: 20px;
  display: flex;
  flex-direction: column;
  &__title{
    font-size: 2rem;
    text-align: center;
    margin-bottom: 40px;
    color: $green-800;
  }
  &__models{
    display: flex;
    flex-direction: column;
    gap: 40px;
    @media (min-width: $mobile-upper-breakpoint){
      width: 80%;
      margin: 0 auto;
      flex-wrap: wrap;
    }
    @media (min-width: $desktop-lower-breakpoint){
      flex-direction: row;
      gap: 80px;
      justify-content: center;
    }
  }
}
</style>~/utils/content/SectionNumbers/Articles