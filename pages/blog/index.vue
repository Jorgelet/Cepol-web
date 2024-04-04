<script setup lang="ts">
useHead({
  title: 'Blog',
  meta: [
    {
      name: 'description',
      content: 'Blogs informativos sobre Desarrolo web, marketing digital y más.'
    }
  ]
})
</script>

<template>
  <div class="container">
    <Blogs />
  </div>
</template>

<style lang="scss" scoped>
.container{
  min-height: 100vh;
}
</style>