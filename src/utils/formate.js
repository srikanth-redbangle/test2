import dayjs from 'dayjs'
import { getReadTime } from './readTime'
const BLOG_DATE_FORMATE = 'MMM DD, YYYY'
const DATE_FORMATE = 'DD/MM/YYYY'
/**
 *
 * @param {*} date number(milliseconds)
 */
export const formateDate = (date) => {
  return dayjs(date).format(DATE_FORMATE)
}

/**
 *
 * @param {*} time number(seconds)
 */
export const formateDuration = (time) => {
  const minutes = Math.floor(time / 60)
  const seconds = time - minutes * 60
  const hours = Math.floor(time / 3600)
  let arr = []
  if (hours != 0) arr.push(hours.toString().padStart(2, '0'))
  arr.push(minutes.toString().padStart(2, '0'))
  arr.push(seconds.toString().padStart(2, '0'))
  return arr.join(':')
}

/**
 *
 * @param {image} featuredImage node from wordpress
 * @returns
 */
export const formatWpImage = (image) => ({
  alt: image?.altText ?? '',
  src: image?.sourceUrl ?? '',
  srcSet: image?.srcSet ?? '',
})

/**
 *
 * @param {works} formate work play list data
 * @returns
 */
export const formatPlayPosts = (works = []) =>
  works.map((w) => ({
    title: w.title,
    slug: w.slug,
    categories: w?.categories?.nodes ?? [],
    tags: w?.tags?.nodes ?? [],
    company: w?.companies?.nodes?.length ? w?.companies?.nodes[0] : null,
    featuredImage: formatWpImage(w?.featuredImage?.node),
  }))

export const formatGlobalPosts = (works = []) =>
  works.map((w) => ({
    title: w?.globalLp?.customTitle ? w?.globalLp?.customTitle : w.title,
    slug: w.slug,
    categories: w?.categories?.nodes ?? [],
    // tags: w?.tags?.nodes ?? [],
    tags: 'videos',
    company: w?.companies?.nodes?.length ? w?.companies?.nodes[0] : null,
    featuredImage: formatWpImage(w?.featuredImage?.node),
    globalLp: w?.globalLp,
  }))

export const formateBlogPostFunc = (node) => ({
  slug: node?.slug,
  title: node?.title,
  excerpt: node?.excerpt,
  date: dayjs(node?.date).format(BLOG_DATE_FORMATE),
  featuredImage: formatWpImage(node?.featuredImage?.node),
  author: `${node?.author?.node?.firstName} ${node?.author?.node?.lastName}`,
  authorAbout: node?.author?.node?.description ?? null,
  avatar: {
    src: node?.author?.node?.avatar?.url ?? '/img/blog-thumb.jpg',
    width: node?.author?.node?.avatar?.width ?? '618',
    height: node?.author?.node?.avatar?.height ?? '315',
  },
  categories: node?.categories?.nodes ?? [],
  tags: node?.tags?.nodes ?? [],
  content: node?.content ?? null,
  readTime: node?.content ? getReadTime(node?.content) : null,
})

export const formatBlogPosts = (edges) =>
  edges.map(({ node }) => formateBlogPostFunc(node))
