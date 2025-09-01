// src/sanity/image.ts
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { Image } from "sanity";

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2023-10-01",
  useCdn: true,
});

const builder = imageUrlBuilder(sanityClient);
export function urlForImage(source: Image | undefined) {
  return source ? builder.image(source) : null;
}
