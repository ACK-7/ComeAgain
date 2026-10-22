import type { BlogPost, BlogPostSection } from '../data/blogData';

// PHP can encode numeric-keyed arrays as objects after validation reorders keys.
function list<T>(value: T[] | Record<string, T> | undefined | null): T[] {
  if (Array.isArray(value)) return value;
  if (!value || typeof value !== 'object') return [];
  return Object.entries(value)
    .filter(([key]) => /^\d+$/.test(key))
    .sort(([a], [b]) => Number(a) - Number(b))
    .map(([, item]) => item);
}

export function normalizeBlogArticle(post: BlogPost): BlogPost {
  return {
    ...post,
    sections: list<BlogPostSection>(post.sections).filter(Boolean).map(section => ({
      ...section,
      paragraphs: list<string>(section.paragraphs),
      ...(section.tips ? { tips: list<string>(section.tips) } : {}),
    })),
    tags: list<string>(post.tags),
    ...(post.faqs ? { faqs: list(post.faqs) } : {}),
    ...(post.linkedPackage ? { linkedPackage: { ...post.linkedPackage, highlights: list<string>(post.linkedPackage.highlights) } } : {}),
  };
}

export function normalizeBlogArticles(posts: BlogPost[]): BlogPost[] {
  const timestamp = (post: BlogPost) => {
    const value = Date.parse(post.publishedDate);
    return Number.isFinite(value) ? value : 0;
  };
  return posts.map(normalizeBlogArticle).sort((a, b) => timestamp(b) - timestamp(a));
}
