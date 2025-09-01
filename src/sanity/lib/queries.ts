import { defineQuery } from "next-sanity";

export const DIAMOND_SPONSORS_QUERY =
  defineQuery(`*[_type == "sponsor" && tier == "diamond"]
| order(coalesce(order, 999), name asc) {
  _id,
  name,
  tier,
  "logoSrc": logo.asset->url,
  "logoAlt": logo.alt,
  href,
  description,
  order
}`);
