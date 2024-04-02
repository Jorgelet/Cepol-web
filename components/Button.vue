<script setup lang="ts">
const props = defineProps({
  href: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },

})
</script>

<template>
  <a 
    :href="href" 
    class="button"
    role="button">
      {{ text }}  
  </a>
</template>

<style lang="scss" scoped>
.button{
  font-family: $secondary-font;
  margin-top: 20px;
  padding: 16px 8px;
  background-color: $green-700;
  color: #fff;
  border-radius: 8px;
  text-decoration: none;
  font-size: 1rem;
  text-align: center;
  max-width: 200px;
  @media (min-width: $tablet-upper-breakpoint){
    font-size: 1.2rem;
    max-width: 250px;
  }
  &:hover{
    background-color: darken($green-700, 10%);
  }
}
</style>