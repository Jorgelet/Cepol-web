<template>
  <footer class="footer">
    <p class="footer__text">
      Cepol
    </p>
    <p class="footer__text footer__text--hidden">
      El mejor preuniversitario del país
    </p>
    <p class="footer__text">
      @info.com
    </p>
  </footer>
</template>

<style lang="scss" scoped>
.footer{
  height: 5vh;
  font-family: $primary-font;
  background-color: $black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  padding: 0 20px;
}
.footer__text{
  font-size: 1rem;
  &--hidden{
    @media (max-width: $tablet-lower-breakpoint){
      display: none;
    }
  }
}
</style>