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
  color: $black;
  text-align: center;
  @media (min-width: $tablet-upper-breakpoint){
    width: 45%;
    margin: 0 auto;
  }
}
.content__title{
  font-size: 3rem;
  color: $green-900;
  @media (min-width: $tablet-upper-breakpoint){
    font-size: 4rem;
  }
  &--secondary{
    font-size: 1.5rem;
    color: $black;
  }
}
.content__paragraph{
  font-size: 1rem;
  max-width: 40ch;
  margin: 0 auto;
  @media (min-width: $tablet-upper-breakpoint){
    font-size: 1.2rem;
  }
}
.content__button{
  font-size: 1.2rem;
  padding: 10px 20px;
  border-radius: 10px;
  background-color: $green-900;
  color: #fff;
  text-decoration: none;
  width: 250px;
  margin: 0 auto;
  @media (min-width: $tablet-upper-breakpoint){
    font-size: 1.5rem;
  }
}
</style>
