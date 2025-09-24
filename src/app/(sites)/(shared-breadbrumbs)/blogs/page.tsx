import { client } from "@/sanity/lib/client";
import BlogPagination from "./_components/BlogPagination";
import BlogPostCard from "./_components/BlogPostCard";
import Sidebar from "./_components/Sidebar";
import { BLOGS_COUNT_QUERY, BLOGS_LIST_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

type Props = {
  searchParams?: { page?: string };
};

export default async function BlogCardDemo({ searchParams }: Props) {
  const pageSize = 4;
  const page = Math.max(1, Number(searchParams?.page ?? "1") || 1);

  const offset = (page - 1) * pageSize;
  const limit = offset + pageSize;

  const [blogs, total] = await Promise.all([
    client.fetch(BLOGS_LIST_QUERY, { offset, limit }),
    client.fetch<number>(BLOGS_COUNT_QUERY),
  ]);

  const totalPages = Math.max(1, Math.ceil(Number(total) / pageSize));
  console.log("🚀 ~ BlogCardDemo ~ blogs:", blogs);

  return (
    <main>
      <div className="section-padding wrapper flex flex-col lg:flex-row gap-10 ">
        <section className=" ">
          {blogs?.length ? (
            blogs.map((b: any) => (
              <BlogPostCard
                key={b._id}
                author={b.authorName}
                title={b.title}
                date={
                  b.publishedAt
                    ? new Date(b.publishedAt).toLocaleDateString()
                    : ""
                }
                excerpt={b.excerpt}
                href={`/blogs/${b.slug}`} // detail page by slug
                image={
                  b.mainImage
                    ? urlFor(b.mainImage)
                        .width(960)
                        .height(540)
                        .fit("crop")
                        .url()
                    : "/placeholder.jpg"
                }
              />
            ))
          ) : (
            <p className="text-muted-foreground">No posts yet.</p>
          )}

          <BlogPagination currentPage={page} totalPages={totalPages} />
        </section>
        <Sidebar />
      </div>
    </main>
  );
}
