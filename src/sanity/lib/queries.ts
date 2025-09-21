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
