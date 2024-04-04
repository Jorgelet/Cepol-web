<script setup lang="ts">
import { content1, content2, content3 } from '@/utils/content/SectionCards/Content'
</script>

<template>
  <div class="sections__container">
    <SectionCardsModel
      :image="content1.image"
      :spanTitle="content1.spanTitle"
      :title="content1.title"
      :paragraph="content1.paragraph"
      :buttonContent="content1.buttonContent"
    />
    <SectionCardsModel
      :image="content2.image"
      :spanTitle="content2.spanTitle"
      :title="content2.title"
      :paragraph="content2.paragraph"
      :buttonContent="content2.buttonContent"
      :reverseSection="true"
    />
    <SectionCardsModel
      :image="content3.image"
      :spanTitle="content3.spanTitle"
      :title="content3.title"
      :paragraph="content3.paragraph"
      :buttonContent="content3.buttonContent"
    />
  </div>
</template>

<style lang="scss" scoped>
.sections__container{
  display: flex;
  flex-direction: column;
  gap: 80px;
}
</style>