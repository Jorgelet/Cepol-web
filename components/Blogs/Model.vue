<script setup lang="ts">
import ReduceDate from '~/utils/ReduceDate'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  paragraph: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  authorImg: {
    type: String,
    required: true,
  },
  authorName: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  first: {
    type: Boolean,
    default: false,
  },
});

function getPosts(id:string){
  useRouter().push(`/blog/${id}`);
}
</script>

<template>
  <article 
    class=article__blog
    :class="{'article__blog__first' : first}">
      <figure 
        class="article__figure"
        :class="{'article__figure__first' : first}"
        @click="getPosts(id || '')">
          <img
            :src="img" 
            :alt="`Imagen del blog ${title}`"
            class="figure__img"
          />
      </figure>
      <div 
        class="article__content"
        :class="{'article__content__first' : first}">
          <h2 class="article__content__title">
            {{ title }}
          </h2>
          <p class="article__content__paragraph">
            {{ paragraph }}
          </p>
          <div class="article__author">
            <div class="article__author__link">
              <img 
                :src="authorImg" 
                :alt="authorName+' foto'" 
                class="article__author__img"
              />
            </div>
            <div class="article__author__content">
              <p class="article__author__content-name">
                {{ authorName }}
              </p>
              <p class="article__author__content-date">
                {{ ReduceDate(date ?? '') }}
              </p>
            </div>
          </div>
      </div>
  </article>
</template>

<style lang="scss" scoped>
.article__blog, .article__content {
  display: flex;
  flex-direction: column;
}
.article__blog {
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
  flex: 1 0 calc(33.333% - 48px);
  max-width: calc(33.333% - 48px);
  padding: 40px 25px 17px;
}
.article__figure, .figure__img, .article__author__link img {
  width: 100%;
  height: 100%;
}
.article__figure {
  cursor: pointer;
  overflow: hidden;
}
.figure__img {
  height: 280px;
  border-radius: 8px;
}
.article__content__title {
  font-size: 24px;
  font-weight: 600;
}
.article__content__paragraph {
  font-size: 16px;
  margin: 30px 0 24px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;    
}
.article__author {
  display: flex;
  gap: 10%;
  align-items: center;
}
.article__author__link {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  overflow: hidden;
}
.article__author__content {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.article__author__content-name {
  font-size: 14px;
}
.article__author__content-date {
  font-size: 12px;
}
@media (max-width: $tablet-upper-breakpoint) {
  .article__blog {
    flex: auto;
    max-width: 560px;
    margin: 0 auto;
  }
}
@media (max-width: $mobile-upper-breakpoint) {
  .article__blog {
    max-width: 100%;
  }
}
@media (min-width: $tablet-upper-breakpoint) and (max-width: $desktop-upper-breakpoint) {
  .article__blog {
    flex: 1 0 calc(50% - 48px);
    max-width: calc(50% - 48px);
  }
}
@media (min-width: $tablet-upper-breakpoint) {
  .article__blog__first {
  flex-direction: row;
  justify-content: center;
  gap: 80px;
  max-width: 80vw;
  margin: 40px auto;
  }
  .article__content__first {
    max-width: 40%;
  }
  .article__figure__first {
    width: auto;
  } 
}
</style>