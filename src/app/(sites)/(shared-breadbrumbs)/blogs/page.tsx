import { client } from "@/sanity/lib/client";
import BlogPagination from "./_components/BlogPagination";
import BlogPostCard from "./_components/BlogPostCard";
import Sidebar from "./_components/Sidebar";
import { BLOGS_COUNT_QUERY, BLOGS_LIST_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { format } from "date-fns";
import { BLOG_PAGE_SIZE as pageSize } from "@/constants";

type SearchParams = {
  page?: string;
  category?: string;
};

const AllBlog = async ({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) => {
  const { page: currentPage, category } = await searchParams;

  const page = Math.max(1, Number(currentPage ?? "1") || 1);

  const offset = (page - 1) * pageSize;
  const limit = offset + pageSize;

  const categoryParam = category?.trim() ? category : null;

  const [blogs, total] = await Promise.all([
    client.fetch(BLOGS_LIST_QUERY, { offset, limit, category: categoryParam }),
    client.fetch<number>(BLOGS_COUNT_QUERY, { category: categoryParam }),
  ]);

  const totalPages = Math.max(1, Math.ceil(Number(total) / pageSize));


  return (
    <main>
      <div className="section-padding wrapper flex flex-col lg:flex-row gap-10 ">
        <section className=" ">
          {blogs?.length ? (
            blogs.map((b: any) => {
              const formatted = format(new Date(b.publishedAt), "dd/MM/yyyy");
              return (
                <BlogPostCard
                  key={b._id}
                  author={b.authorName}
                  title={b.title}
                  date={formatted}
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
              );
            })
          ) : (
            <p className="text-muted-foreground">No posts yet.</p>
          )}

          <BlogPagination currentPage={page} totalPages={totalPages} />
        </section>
        <Sidebar />
      </div>
    </main>
  );
};

export default AllBlog;
