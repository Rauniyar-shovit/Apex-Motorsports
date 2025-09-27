import { BLOG_PAGE_SIZE as pageSize } from "@/constants";
import { PreviewBlog } from "@/models";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { BLOGS_COUNT_QUERY, BLOGS_LIST_QUERY } from "@/sanity/lib/queries";
import { format } from "date-fns";
import BlogPagination from "./_components/BlogPagination";
import BlogPostCard from "./_components/BlogPostCard";
import Sidebar from "./_components/Sidebar";
import NoPosts from "@/components/reusable/NoPosts";

type SearchParams = {
  page?: string;
  category?: string;
  query?: string;
};

const AllBlog = async ({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) => {
  // search params
  const { page: currentPage, category, query } = await searchParams;

  const page = Math.max(1, Number(currentPage ?? "1") || 1);

  const offset = (page - 1) * pageSize;
  const limit = offset + pageSize;

  const categoryParam = category?.trim() ? category : null;

  // fetching the blogs
  let blogs: PreviewBlog[] = [];
  let total = 0;

  try {
    [blogs, total] = await Promise.all([
      client.fetch<PreviewBlog[]>(BLOGS_LIST_QUERY, {
        offset,
        limit,
        category: categoryParam,
        search: query?.trim() ? query : null,
      }),
      client.fetch<number>(BLOGS_COUNT_QUERY, {
        category: categoryParam,
        search: query?.trim() ? query : null,
      }),
    ]);
  } catch (error: unknown) {
    console.error("Error fetching blogs:", error);
    return <NoPosts />;
  }

  // total page to pagination
  const totalPages = Math.max(1, Math.ceil(Number(total) / pageSize));

  const renderBlogs =
    blogs?.length > 0 ? (
      <>
        {blogs.map((blog: PreviewBlog) => {
          const formatted = format(new Date(blog.publishedAt!), "dd/MM/yyyy");
          return (
            <BlogPostCard
              key={blog._id}
              author={blog.authorName!}
              title={blog.title!}
              date={formatted}
              excerpt={blog.excerpt!}
              href={`/blogs/${blog.slug}`}
              image={urlFor(blog.mainImage!)
                .width(960)
                .height(540)
                .fit("crop")
                .url()}
            />
          );
        })}

        <BlogPagination currentPage={page} totalPages={totalPages} />
      </>
    ) : (
      <NoPosts />
    );
  return (
    <main>
      <div className="section-padding wrapper flex flex-col lg:flex-row gap-10 ">
        <section className="w-full">{renderBlogs}</section>
        <Sidebar />
      </div>
    </main>
  );
};

export default AllBlog;
