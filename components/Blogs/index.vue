<script setup lang="ts">
import BlogService from '~/services/BlogService';

const authorInfo = ref<any[]>([]);
const firstPost = ref<any>(null);
const authors = ['yeyodev', 'denisse', 'luis-reyes', 'dayanara'];
const orderedPosts = computed(() => {
  return authorInfo.value.sort((a, b) => {
    return new Date(b.published_at).getTime() - new Date(a.published_at).getTime();
  });
});

Promise.all(authors.map((authorName: string) => BlogService.fetchAuthorInfo(authorName, authorInfo)))
  .then(() => {
    firstPost.value = orderedPosts.value.shift();
});
</script>

<template>
  <main>
    <div class="blog">
      <h1 class="blog__title">
        Blogs
      </h1>
    </div>
    <section>
      <BlogsModel
        :first="true"
        :id="firstPost.id" 
        :title="firstPost.title" 
        :img="firstPost.feature_image" 
        :paragraph="firstPost.excerpt" 
        :authorImg="firstPost.authorImage" 
        :authorName="firstPost.authorName"
        :date="firstPost.published_at"
      />
    </section>
    <section class="blog__model__container">
      <BlogsModel 
        v-for="(info, index) in orderedPosts" 
        :key="index" 
        :id="info.id" 
        :title="info.title"
        :img="info.feature_image" 
        :paragraph="info.excerpt" 
        :authorImg="info.authorImage" 
        :authorName="info.authorName"
        :date="info.published_at"
      />
    </section>
  </main>
</template>

<style lang="scss" scoped>
.blog {
  text-align: center;
  margin-bottom: 40px;
  &__title {
    font-size: 4rem;
    color: $green-900;
    padding: 20px;
  }
}
.blog__model__container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  max-width: 96%;
  margin: 0 auto 48px;
  @media (max-width: $tablet-lower-breakpoint) {
    flex-direction: column;
  }
}
</style>