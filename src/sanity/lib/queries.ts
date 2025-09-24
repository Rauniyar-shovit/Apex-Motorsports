import { defineQuery } from "next-sanity";

export const TIER_SPONSORS_QUERY = defineQuery(`
  *[_type == "sponsor" && tier == $tier]
  | order(coalesce(order, 999), name asc) {
    _id,
    name,
    tier,
    "logoSrc": logo.asset->url,
    "logoAlt": logo.alt,
    href,
    description,
    order
  }
`);

export const ACHIEVEMENTS_QUERY = defineQuery(`
*[_type == "achievements"] | order(order asc)[0..3] {
  _id,
  title,
  ranking,
  iconName,
  order
}
`);

export const BLOG_BY_SLUG_QUERY = defineQuery(`
  *[_type == "blog" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    excerpt,
    mainImage{
      asset->{
        url
      },
      alt
    },
    authorName,
    categories[]->{
      _id,
      title
    },
    publishedAt,
    body
  }
`);

export const BLOGS_LIST_QUERY = defineQuery(`
  *[_type == "blog"] | order(publishedAt desc) [$offset...$limit] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    mainImage{asset->, alt},
    publishedAt
  }
`);
export const BLOGS_COUNT_QUERY = defineQuery(`
  count(*[_type == "blog"])
`);
