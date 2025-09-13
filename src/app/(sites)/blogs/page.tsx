import BlogPostCard from "./_components/BlogPostCard";

/**
 * Responsive blog card UI
 * - Next.js + Tailwind CSS
 * - Accessible, keyboard-focusable
 * - Dark mode ready
 */
export default function BlogCardDemo() {
  const post = {
    title: "Discovering the Perfect Running Gear for Your Journey",
    date: "2025-03-19",
    comments: 0,
    excerpt:
      "Qroin faucibus nec mauris a sodales, sed elementum mi tincidunt. Sed eget viverra egestas nisi in consequat. Fusce sodales augue a accumsan. Cras sollicitudin, ipsum eget blandit pulvinar.",
    href: "/blog/discover-perfect-running-gear",
    image: "/blog.jpg", // put your image under /public
  };

  return (
    <main>
      <div className="wrapper flex gap-10">
        <section className="section-padding wrapper">
          <BlogPostCard {...post} />
        </section>
        <section className=" section-padding h-[100vh] sticky  w-100 bg-muted-secondary"></section>
      </div>
    </main>
  );
}
