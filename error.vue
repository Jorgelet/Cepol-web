<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError
})
</script>

<template>
  <NuxtLayout>
    <div class="container__error">
      <div class="error__content">
        <h1 class="content__title">
          Error {{ props.error?.statusCode }}
        </h1>
        <h2 class="content__title content__title--secondary">
          PAGINA NO ENCONTRADA
        </h2>
        <p class="content__paragraph">
          ¡Hola! Lo sentimos, pero parece que la página que buscas no existe.
          Verifica que la URL sea correcta
        </p>
        <NuxtLink 
          to="/" 
          class="content__button">
          Go back home
        </NuxtLink>
      </div>
    </div>
  </NuxtLayout>
</template>

<style lang="scss" scoped>
.container__error{
  height: 85vh;
  padding: 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.error__content{
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-family: $primary-font;
  color: $black;
  text-align: center;
  @media (min-width: $tablet-upper-breakpoint){
    width: 45%;
    margin: 0 auto;
  }
}
.content__title{
  font-size: 4rem;
  color: $green-700;
  &--secondary{
    font-size: 1.5rem;
    color: $black;
  }
}
.content__paragraph{
  max-width: 40ch;
  margin: 0 auto;
}
.content__button{
  font-size: 1.5rem;
  padding: 10px 20px;
  border-radius: 10px;
  background-color: $green-700;
  color: #fff;
  text-decoration: none;
  width: 250px;
  margin: 0 auto;
}
</style>
