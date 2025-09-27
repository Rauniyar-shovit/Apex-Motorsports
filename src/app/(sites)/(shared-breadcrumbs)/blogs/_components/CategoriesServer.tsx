import { Categories } from "@/models";
import { client } from "@/sanity/lib/client";
import { CATEGORY_QUERY } from "@/sanity/lib/queries";
import CategoriesClient from "./CategoriesClient";

const CategoriesServer = async () => {
  const categories: Categories[] = await client.fetch(CATEGORY_QUERY);
  return <CategoriesClient categories={categories} />;
};

export default CategoriesServer;
