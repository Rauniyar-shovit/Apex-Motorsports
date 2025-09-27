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
  *[
    _type == "blog" &&
    (
      !defined($category) || $category == null || $category == "" ||
      $category in categories[]->slug.current
    ) &&
    (
      !defined($search) || $search == null || $search == "" ||
      lower(coalesce(title, "")) match ("*" + lower($search) + "*")
    )
  ]
  | order(publishedAt desc) [$offset...$limit]{
    _id,
    title,
    "slug": slug.current,
    excerpt,
    authorName,
    mainImage{asset->, alt},
    publishedAt,
    categories[]->{
      _id,
      title,
      "slug": slug.current
    }
  }
`);

export const BLOGS_COUNT_QUERY = defineQuery(`
  count(
    *[
      _type == "blog" &&
      (
        !defined($category) || $category == null || $category == "" ||
        $category in categories[]->slug.current
      ) &&
      (
        !defined($search) || $search == null || $search == "" ||
        lower(title) match ("*" + lower($search) + "*")
      )
    ]
  )
`);

export const RECENT_BLOGS_QUERY = defineQuery(`
  *[_type == "blog" && defined(publishedAt) && publishedAt <= now()]
  | order(publishedAt desc)[0...2]{
    _id,
    title,
    "category": categories[0]->{
      _id,
      title
    },
    "slug": slug.current,
    authorName,
    mainImage{
      asset->,
      alt
    },
    publishedAt
  }
`);

export const CATEGORY_QUERY =
  defineQuery(`*[_type == "category"] | order(title asc) {
  _id,
  title,
  "slug": slug.current
}`);

export const RELATED_BLOGS = defineQuery(`
*[
  _type == "blog" &&
  slug.current != $slug &&
  references($catIds)
] | order(publishedAt desc)[0..1]{
  _id,
  title,
  "slug": slug.current,
  excerpt,
  mainImage{ alt, "asset": { "url": asset->url } },
  authorName,
  publishedAt,
  "categories": categories[]->{ _id, title }
}
`);
