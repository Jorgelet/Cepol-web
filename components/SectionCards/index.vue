<script setup lang="ts">
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { content1, content2 } from '@/utils/content/SectionCards/Content'

gsap.registerPlugin(ScrollTrigger);

function animateSection(){
  const sectionsImages = document.querySelectorAll('.section__img');
  const sectionsContent = document.querySelectorAll('.section__content');

  sectionsImages.forEach((sectionImage, index) => {
    gsap.from(sectionImage, {
      scrollTrigger: {
        trigger: sectionImage,
        start: 'top 80%',
        end: 'top 20%',
        toggleActions: 'play none none none',
      },
      x: index % 2 === 0 ? -100 : 100,
      opacity: 0,
      duration: 1,
      delay: index * .5
    });
  });

  sectionsContent.forEach((sectionContent, index) => {
    gsap.from(sectionContent, {
      scrollTrigger: {
        trigger: sectionContent,
        start: 'top 80%',
        end: 'top 20%',
        toggleActions: 'play none none none',
      },
      x: index % 2 === 0 ? 100 : -100,
      opacity: 0,
      duration: 1,
      delay: index * .5
    });
  });
}

onMounted(animateSection);
</script>

<template>
  <div class="sections__container">
    <SectionCardsModel
      :image="content1.image"
      :spanTitle="content1.spanTitle"
      :title="content1.title"
      :paragraph="content1.paragraph"
      :buttonContent="content1.buttonContent"
    />
    <blockquote class="section__blockquote">
      “La educación es el arma más poderosa para salvar el mundo”
      <footer class="section__blockquote__footer">
        - <cite class="footer--author">Nelson Mandela</cite>
      </footer>
    </blockquote>
    <SectionCardsModel
      :image="content2.image"
      :spanTitle="content2.spanTitle"
      :title="content2.title"
      :paragraph="content2.paragraph"
      :buttonContent="content2.buttonContent"
      :reverseSection="true"
    />
  </div>
</template>

<style lang="scss" scoped>
.sections__container{
  display: flex;
  flex-direction: column;
  gap: 80px;
}
.section__blockquote{
  font-family: $secondary-font;
  padding: 20px 0;
  font-size: 1.5rem;
  font-style: italic;
  font-weight: $font-weight-bold;
  text-align: center;
  background-color: rgba(128, 128, 128, .2);
  @media (min-width: $tablet-upper-breakpoint){
    font-size: 2rem;
    padding: 60px 40px;
  }
  &__footer{
    font-size: 1rem;
    font-weight: $font-weight-normal;
    margin-top: 10px;
    @media (min-width: $tablet-upper-breakpoint){
      font-size: 1.25rem;
      margin-top: 20px;
    }
  }
}
</style>