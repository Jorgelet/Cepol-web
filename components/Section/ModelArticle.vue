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
    <i :class="fontClass"></i>
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
  padding: 20px;
  border-radius: 10px;
  background-color: #fff;
  margin-bottom: 20px;
  color: $black;
}
.article__title{
  font-family: $primary-font;
  font-size: 1.5rem;
  margin-bottom: 10px;
}
.article__paragraph{
  font-family: $secondary-font;
  font-size: 1rem;
}
</style>