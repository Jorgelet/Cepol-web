<template>
  <main class="main">
    <div class="main__content">
      <h1 class="content__title content__title--principal">
        CEPOL 
      </h1>
      <p class="content__paragraph">
        Desbloquea tus habilidades con nuestros profesores y materiales de estudio excepcionales.<br> 
        ¡Tu éxito universitario comienza aquí!
      </p>
    </div>
    <img 
      decoding="async"
      src="/assets/boy-mobil.webp"
      alt="Estudiante de Cepol" 
      class="main__img" 
    />
    <img 
      decoding="async"
      src="/assets/boy.webp" 
      alt="Estudiante de Cepol"
      class="main__img main__img--large"
    />
    <div class="secondary__content">
      <h2 class="content__title">
        Descubre tu potencial
      </h2>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.main{
  min-height: 90vh;
  display: flex;
  padding: 10px 16px;
  position: relative;
  text-align: center;
  flex-direction: column;
  overflow: hidden;
  @media (min-width: $tablet-upper-breakpoint){
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
  }
  @media (min-width: $desktop-lower-breakpoint){
    justify-content: space-between;    
  }
  &__img{
    height: 85vh;
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: -10;
    @media (min-width: $tablet-upper-breakpoint){
      display: none;
    }
    &--large{
      display: none;
      @media (min-width: $tablet-upper-breakpoint){
        display: block;
        left: 0;
        margin: auto;
        max-width: 100%;
        max-height: 100%;
      }
    }
  }
  &__content{
    margin-bottom: 20px;
    @media (min-width: $tablet-upper-breakpoint){
      width: 30%;
      padding-inline: 20px;
      align-self: end;
    }
    @media (min-width: $desktop-lower-breakpoint){
      align-self: center;
    }
  }
}
.content{
  &__title{
    font-size: 5rem;
    margin-bottom: 20px;
    color: $green-700;
    &--principal{
      @media (min-width: $tablet-upper-breakpoint){
        font-size: 6rem;
      }
    }
  }
  &__paragraph{
    font-size: $font-size-normal;
    max-width: 80%;
    margin: 0 auto;
    @media (min-width: $tablet-upper-breakpoint) and (max-width: $desktop-lower-breakpoint){
      display: none;
    }
    @media (min-width: $desktop-lower-breakpoint){
      font-size: 1.2rem;
    }
  }
}
.secondary__content{
  display: none;
  @media (min-width: $tablet-upper-breakpoint){
    display: block;
    padding-inline: 20px;
    width: 30%;
    align-self: flex-start;
  }
}
</style>