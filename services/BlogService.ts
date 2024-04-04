import { useRuntimeConfig } from "#app";

class BlogService {
  private API_URL = 'https://codigoencasa.com/ghost/api/content/posts/';

  public async getPostByUuid(id: string, postDetail: Ref<any>) {
    const config = useRuntimeConfig();
    const API_KEY =  config.public.urlKey;
    try {
      const response = await fetch(`${this.API_URL}${id}/?key=${API_KEY}&include=authors`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      const post = data.posts.map((blog: any) => {
        return {
          title: blog.title,
          feature_image: blog.feature_image,
          id: blog.id,
          excerpt: blog.excerpt,
          published_at: blog.published_at,
          authorName: blog.authors[0].name,
          authorImage: blog.authors[0].profile_image,
          html: blog.html
        };
      });
      postDetail.value = post[0];
    } catch (error) {
      console.error('An error occurred while fetching the post:', error);
    }
  }

  public async fetchAuthorInfo(authorName: string, authorInfo: Ref<any>) {
    const config = useRuntimeConfig();
    const API_KEY =  config.public.urlKey;
    try {
      const { data } = await useFetch(`${this.API_URL}?key=${API_KEY}&include=authors&filter=authors.slug:${authorName}`);
      (data.value as any).posts.filter((blog: any) => {
        authorInfo.value.push({
          title: blog.title,
          feature_image: blog.feature_image,
          id: blog.id,
          excerpt: blog.excerpt,
          published_at: blog.published_at,
          authorName: blog.authors[0].name,
          authorImage: blog.authors[0].profile_image
        });
      });
    } catch (error) {
      console.error(`Failed to fetch data for author ${authorName}:`, error);
    }
  }
}

export default new BlogService();