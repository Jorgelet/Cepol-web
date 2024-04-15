<template>
  <div class="main">
    <h1 class="main__title">
      Nuestros Servicios
    </h1>
    <div class="main__content">
      <div class="content__secondary">
        <i class="fa-solid fa-circle-down content__icon"></i>
        <h2 class="content__subtitle">Conoce nuestros servicios</h2>
      </div>
      <p class="content__paragraph">
        En Cepol, ofrecemos una amplia gama de servicios para ayudarte a alcanzar tus metas.
      </p>
    </div>
    <img 
      decoding="async"
      src="@/assets/nuestros-servicios.webp" 
      alt="Imagen de los servicios de Cepol"
      class="main__image"
    />
  </div>
  <section class="section">
    <ServiceModel />
  </section>
</template>

<style lang="scss" scoped>
.main{
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 54px;
  padding-top: 20px;
  margin-bottom: 80px;
  &__title{
    font-size: 2.5rem;
    width: 100%;
    text-align: start;
    padding-inline: 20px;
    color: $green-700;
    @media (min-width: $tablet-upper-breakpoint){
      font-size: 5rem;
    }
    @media (min-width: $desktop-lower-breakpoint){
      font-size: 7rem;
    }
  }
  &__content{ 
    padding-inline: 20px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 20px;
    @media (min-width: ($desktop-lower-breakpoint - 1px)){
      width: 80%;
    }
  }
  &__image{
    width: 100%;
    height: auto;
    border-radius: 0 0 50px 50px;
    @media (min-width: $desktop-lower-breakpoint){
      height: 600px;
    }
  }
}
.content{
  &__secondary{
    display: flex;
    gap: 20px;
    align-items: center;
  }
  &__icon{
    font-size: 2rem;
    color: $green-900;
  }
  &__paragraph{
    font-size: 1rem;
    max-width: 40ch;
    @media (min-width: $desktop-lower-breakpoint){
      font-size: 1.5rem;
    }
  }
  &__subtitle{
    display: none;
    @media (min-width: $tablet-upper-breakpoint) {
      display: block;
      font-size: .8rem;
      color: $green-900;      
    }
    @media (min-width: $desktop-lower-breakpoint) {
      font-size: 1.25rem;
    }
  }
}
</style>