import { client } from "@/sanity/lib/client";
import BlogPagination from "./_components/BlogPagination";
import BlogPostCard from "./_components/BlogPostCard";
import Sidebar from "./_components/Sidebar";
import { BLOGS_COUNT_QUERY, BLOGS_QUERY } from "@/sanity/lib/queries";

/**
 * Responsive blog card UI
 * - Next.js + Tailwind CSS
 * - Accessible, keyboard-focusable
 * - Dark mode ready
 */
export default async function BlogCardDemo() {
  const post = {
    title: "Discovering the Perfect Running Gear for Your Journey",
    comments: 0,
    date: "14 September 2025",
    excerpt:
      "Qroin faucibus nec mauris a sodales, sed elementum mi tincidunt. Sed eget viverra egestas nisi in consequat. Fusce sodales augue a accumsan. Cras sollicitudin, ipsum eget blandit pulvinar.",
    href: "/blogs/discover-perfect-running-gear",
    image: "/blog.jpg", // put your image under /public
  };
  const post1 = {
    title: "Discovering the Perfect Running Gear for Your Journey",
    comments: 0,
    date: "14 September 2025",
    excerpt:
      "Qroin faucibus nec mauris a sodales, sed elementum mi tincidunt. Sed eget viverra egestas nisi in consequat. Fusce sodales augue a accumsan. Cras sollicitudin, ipsum eget blandit pulvinar.",
    href: "/blogs/discover-perfect-running-gear",
    image: "/race-track.jpg", // put your image under /public
  };
  const post2 = {
    title: "Discovering the Perfect Running Gear for Your Journey",
    comments: 0,
    date: "14 September 2025",
    excerpt:
      "Qroin faucibus nec mauris a sodales, sed elementum mi tincidunt. Sed eget viverra egestas nisi in consequat. Fusce sodales augue a accumsan. Cras sollicitudin, ipsum eget blandit pulvinar.",
    href: "/blogs/discover-perfect-running-gear",
    image: "/race-finish.jpg", // put your image under /public
  };

  const pageSize = 5;
  const page = 2; // dynamic

  const offset = (page - 1) * pageSize;
  const limit = offset + pageSize;

  const blogs = await client.fetch(BLOGS_QUERY, { offset, limit });
  const total = await client.fetch(BLOGS_COUNT_QUERY);

  const totalPages = Math.ceil(total / pageSize);

  return (
    <main>
      <div className="section-padding wrapper flex flex-col lg:flex-row gap-10 ">
        <section className=" ">
          <BlogPostCard {...post} />
          <BlogPostCard {...post1} />
          <BlogPostCard {...post2} />
          <BlogPagination currentPage={1} totalPages={totalPages} />
        </section>
        <Sidebar />
      </div>
    </main>
  );
}
