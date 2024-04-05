<script setup lang="ts">
import CursoIngreso from '@/assets/curso-ingreso-a-la-universidad.webp'
import CursoPrepolitecnico from '@/assets/curso-prepolitecnico.webp'
import ClasesParticulares from '@/assets/clases-particulares.webp'
import VacacionalCepol from '@/assets/vacacional-cepol.webp'
import EducacionContinua from '@/assets/educacion-continua.webp'
import 
{ 
  contentCard1, 
  contentCard2, 
  contentCard3, 
  contentCard4,
  contentCard5 
} from '@/utils/content/Services/ContentCards'
import 
{ contentCard1_Details1,
  contentCard1_Details2,
  contentCard2_Details1,
  contentCard2_Details2,
  contentCard3_Details1,
  contentCard3_Details2,
  contentCard4_Details1,
  contentCard4_Details2,
  contentCard5_Details1,
  contentCard5_Details2,
} from '~/utils/content/Services/ContentDetails';
</script>

<template>
  <ServiceModelCard 
    :title="contentCard1.title"
    :subtitle="contentCard1.subtitle"
    :paragraph="contentCard1.paragraph"
    :image="CursoIngreso"
  />
  <ServiceModelDetails
    :title="contentCard1_Details1.title"
    :paragraphs="contentCard1_Details1.paragraphs"
  />
  <ServiceModelDetails
    :title="contentCard1_Details2.title"
    :paragraphs="contentCard1_Details2.paragraphs"
  />
  <ServiceModelCard 
    :title="contentCard2.title"
    :subtitle="contentCard2.subtitle"
    :paragraph="contentCard2.paragraph"
    :image="CursoPrepolitecnico"
    :reverse="true"
  />
  <ServiceModelDetails
    :title="contentCard2_Details1.title"
    :paragraphs="contentCard2_Details1.paragraphs"
  />
  <ServiceModelDetails
    :title="contentCard2_Details2.title"
    :paragraphs="contentCard2_Details2.paragraphs"
  />
  <ServiceModelCard 
    :title="contentCard3.title"
    :subtitle="contentCard3.subtitle"
    :paragraph="contentCard3.paragraph"
    :image="ClasesParticulares"
  />
  <ServiceModelDetails
    :title="contentCard3_Details1.title"
    :paragraphs="contentCard3_Details1.paragraphs"
  />
  <ServiceModelDetails
    :paragraphs="contentCard3_Details2.paragraphs"
    :title="contentCard3_Details2.title"
  />
  <ServiceModelCard 
    :title="contentCard4.title"
    :subtitle="contentCard4.subtitle"
    :paragraph="contentCard4.paragraph"
    :image="VacacionalCepol"
    :reverse="true"
  />
  <ServiceModelDetails
    :title="contentCard4_Details1.title"
    :paragraphs="contentCard4_Details1.paragraphs"
  />
  <ServiceModelDetails
    :title="contentCard4_Details2.title"
    :paragraphs="contentCard4_Details2.paragraphs"
  />
  <ServiceModelCard 
    :title="contentCard5.title"
    :subtitle="contentCard5.subtitle"
    :paragraph="contentCard5.paragraph"
    :image="EducacionContinua"
  />
  <ServiceModelDetails
    :title="contentCard5_Details1.title"
    :paragraphs="contentCard5_Details1.paragraphs"
  />
  <ServiceModelDetails
    :title="contentCard5_Details2.title"
    :paragraphs="contentCard5_Details2.paragraphs"
  />
</template>