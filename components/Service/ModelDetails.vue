<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  paragraphs: {
    type: Array<String>,
    required: true
  }
})
</script>

<template>
  <details class="details">
    <summary class="details__summary">
      {{ title }}
    </summary>
    <ul class="details__list">
      <li 
        v-for="(p, index) in paragraphs"
        :key="index"
        class="details__list__item">
          {{ p }}
      </li>
    </ul>

</details>
</template>

<style lang="scss" scoped>
.details{
  display: flex;
  padding: 20px;
  flex-direction: column;
  gap: 20px;
  border: 1px solid $green-900;
  cursor: pointer;
  @media (min-width: $desktop-lower-breakpoint){
    padding-left: 10%;
  }
  &__summary{
    font-family: $secondary-font;
    font-size: 1.25rem;
    color: $green-900;
    &::marker{
      margin-right: 8px;
    }
  }
  &__list{
    padding-inline: 20px;
  }
  &__list__item{
    font-family: $secondary-font;
    padding: 10px 0;
    font-size: 1rem;
  }
}
</style>