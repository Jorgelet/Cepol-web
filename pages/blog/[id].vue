<script setup lang="ts">
import BlogService from '~/services/BlogService';
import ReduceDate from '~/utils/ReduceDate';

useHead({
  htmlAttrs: {
    lang: 'es'
  },
  meta: [
    {
      name: 'description',
      content: 'Blog | Cepol'
    }
  ],
});

const postDetail = ref<null | any>(null);
const isLoading = ref<boolean>(false);

const formattedDate = computed(() => {
  if (postDetail.value) {
    return ReduceDate(postDetail.value.published_at);
  }
  return '';
});

onBeforeMount(async () => {
  isLoading.value = true;
  await BlogService.getPostByUuid(useRoute().params.id as string, postDetail);
  isLoading.value = false;
});
</script>

<template>
  <Head>
    <Title>{{ postDetail?.title }}</Title>
  </Head>
  <div 
    v-if="!isLoading"
    class="container">
      <div class="blog">
        <div class="blog__author">
          <h1 class="blog__author__title">
            {{ postDetail?.title }}
          </h1>
          <div class="blog__author__info">
            <img 
              :src="postDetail?.authorImage" 
              :alt="'Imagen del autor ' + postDetail?.authorName" 
              class="blog__author__info__img">
            <div class="blog__author__info__paragraphs">
              <p class="blog__author__info__paragraphs-name">
                {{ postDetail?.authorName }}
              </p>
              <p class="blog__author__info__paragraphs-date">
                {{ formattedDate }}
              </p>
            </div>
          </div>
        </div>
        <div 
          v-html="postDetail?.html" 
          class="blog__container" 
        />
      </div>
  </div>
</template>

<style lang="scss" scoped>
.blog {
  position: relative;
  max-width: 80vw;
  margin: 0 auto;
  display: flex;
  gap: 120px;
  @media (max-width: $desktop-lower-breakpoint) {
    flex-direction: column;
    gap: 20px;
    max-width: 90vw;
  }
  &__container {
    width: 60%;
    margin: 80px auto;
    @media (max-width: $desktop-lower-breakpoint) {
      width: 90%;
      margin: 24px auto;
    }
  }
}
.blog__author {
  height: 100vh;
  position: sticky;
  top: 0;
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;
  padding: 70px 40px;
  border-right: 1px solid $black;
  @media screen and (max-width: $desktop-lower-breakpoint) {
    position: relative;
    height: auto;
    top: auto;
    width: 100%;
    border-right: none;
    border-bottom: 1px solid $black;
    padding: 40px 20px;
  }
  &__title {
    font-family: $primary-font;
    font-size: 2.5rem;
    color: $black;
  }
  &__info {
    font-family: $secondary-font;
    display: flex;
    gap: 40px;
    align-items: center;
    @media (min-width: $desktop-lower-breakpoint) and (max-width: $desktop-upper-breakpoint) {
      flex-direction: column;
      gap: 20px;
    }
    &__img {
      border-radius: 50%;
      width: 40%;
      min-width: 144px;
      margin: 0;
      min-height: 144px;
      object-fit: cover;
      @media (max-width: $desktop-lower-breakpoint) {
        width: 50%;
        aspect-ratio: 1/1;
        max-width: 120px;
        min-height: auto;
        min-width: auto;
      }
    }
  }
}
.blog__author__info__paragraphs {
  &-name {
    margin-bottom: 8px;
  }
}
:deep(p) {
  margin-bottom: 20px;
}
:deep(h3) {
  font-size: $font-size-large;
  color: $black;
}
:deep(pre) {
  overflow-x: auto;
  margin: 20px 0;
  padding: 20px;
  color: #e5eff5;
  font-size: .875rem;
  line-height: 1.6em;
  background: #2a3644;
  border-radius: 5px;
}
:deep(a) {
  color: $black;
}
:deep(code, pre) {
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  tab-size: 4;
}
:deep(figcaption, cite) {
  color: $black;
  display: block;
  font-feature-settings: "liga" on, "lnum" on;
  font-size: .875rem;
  font-style: normal;
  letter-spacing: 0;
  line-height: 1.4;
  margin-top: .625rem;
  margin-bottom: 1rem;
  outline: 0;
  text-align: center;
  width: 100%;
}
:deep(img) {
  max-width: 100%;
  height: auto;
  margin: 20px auto;
  aspect-ratio: auto 1386 / 1000;
  display: block;
}
:deep(blockquote:not(.pullquote)) {
  border-left: .25rem solid;
  font-size: 1.35rem;
  line-height: 1.5;
  margin: 2rem 0 2rem -1.5rem;
  padding-bottom: .125rem;
  padding-left: 1.25rem;
}
:deep(video){
  max-width: 100%;
  aspect-ratio: 16 / 9;
  height: auto;
}
:deep(.kg-video-overlay), :deep(.kg-video-hide), :deep(.kg-embed-card), :deep(.story-social-cta){
  display: none;
}
:deep(.blog__container p:first-of-type::first-letter) {
  font-size: 7rem;
  text-transform: uppercase;
  font-weight: 700;
  color: $black;
}
</style>