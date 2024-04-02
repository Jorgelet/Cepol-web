<script setup lang="ts">
import { Vue3Lottie } from 'vue3-lottie';
import ContactAnimation from '@/assets/animations/contact.json'
</script>

<template>
  <main class="main">
    <div class="main__contact">
      <h1 class="contact__title">
        Escribenos y empieza tu camino universitario hoy!
      </h1>
      <Form />
    </div>
    <ClientOnly>
      <div class="contact__animation">
        <Vue3Lottie 
          :animationData="ContactAnimation"
          :noMargin="true" 
          :height="550" 
          :width="550" 
        />
      </div>
    </ClientOnly>
  </main>
</template>

<style lang="scss" scoped>
.main {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 85vh;
  padding: 0 20px;
  &__contact {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 40px;
    @media (min-width: $tablet-lower-breakpoint){
      width: 48%;
    }
    &__title {
      font-size: 2rem;
    }
  }
}
.contact__animation{
  display: none;
  @media (min-width: $desktop-lower-breakpoint){
    display: block;
  }
}
</style>