<script setup lang="ts">
import Header from './web/Header.vue';
import Footer from './web/Footer.vue';
</script>

<template>
  <div>
    <Header></Header>
    <slot />
    <Footer></Footer>
  </div>
</template>